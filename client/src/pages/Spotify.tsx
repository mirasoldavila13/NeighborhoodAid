import { useEffect, useState } from 'react';
import spotifyAuthService from '../services/spotifyAuthService';
import SpotifyNav from '../components/SpotifyNav';
import authService from '../services/authService';

const Spotify = () => {
    const [playlists, setPlaylists] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const userProfile = authService.getProfile();
    const userId = userProfile ? userProfile.id : null;

    useEffect(() => {
        const loadPlaylists = async () => {
            try {
                const accessToken = spotifyAuthService.getAccessToken(); // Retrieve access token
                if (!accessToken) {
                    throw new Error('Access token is not available.');
                }

                const response = await fetch('https://api.spotify.com/v1/me/playlists', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch playlists.');
                }

                const data = await response.json();
                setPlaylists(data.items); // Set playlists to state
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load playlists');
            }
        };

        loadPlaylists();
    }, []);

    return (
        <div>
            {userId && <SpotifyNav userData={userProfile} onRefreshToken={() => {}} onLogout={() => authService.logout()} />}
            <h1>Your Spotify Playlists</h1>
            {error && <p>{error}</p>}
            <ul>
                {playlists.map((playlist) => (
                    <li key={playlist.id}>{playlist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Spotify;
