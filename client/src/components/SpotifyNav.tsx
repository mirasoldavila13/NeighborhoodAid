// src/components/SpotifyNav.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface SpotifyNavProps {
  userData: any; // Ideally, define a more specific type based on Spotify's user data
  onRefreshToken: () => void; // Callback for refreshing token
  onLogout: () => void; // Callback for logging out
}

const SpotifyNav: React.FC<SpotifyNavProps> = ({ userData, onRefreshToken, onLogout }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Logged in as {userData.display_name}</h1>
      {userData.images && userData.images.length > 0 && (
        <img
          width="150"
          src={userData.images[0].url}
          alt={userData.display_name}
          className="mb-4 rounded-full shadow-md"
        />
      )}

      <table className="mb-4 w-full border border-gray-300 rounded-md">
        <tbody>
          <tr>
            <td className="font-semibold">Display Name:</td>
            <td>{userData.display_name}</td>
          </tr>
          <tr>
            <td className="font-semibold">ID:</td>
            <td>{userData.id}</td>
          </tr>
          <tr>
            <td className="font-semibold">Email:</td>
            <td>{userData.email}</td>
          </tr>
          <tr>
            <td className="font-semibold">Spotify URI:</td>
            <td>
              <a
                href={userData.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {userData.external_urls.spotify}
              </a>
            </td>
          </tr>
          <tr>
            <td className="font-semibold">Country:</td>
            <td>{userData.country}</td>
          </tr>
        </tbody>
      </table>

      {/* Navigation Links */}
      <nav className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Spotify Navigation</h3>
        <ul className="space-y-2">
          <li>
            <Link
              to={`/dashboard/${userData.id}/playlists`}
              className="text-blue-500 hover:underline"
            >
              Your Playlists
            </Link>
          </li>
          <li>
            <Link
              to={`/dashboard/${userData.id}/report`}
              className="text-blue-500 hover:underline"
            >
              Report an Issue
            </Link>
          </li>
          {/* Add more links as necessary */}
        </ul>
      </nav>

      <div className="flex space-x-2">
        <button
          onClick={onRefreshToken}
          className="px-4 py-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 transition"
        >
          Refresh Token
        </button>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default SpotifyNav;
