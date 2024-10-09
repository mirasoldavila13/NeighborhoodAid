import axios from 'axios';

class SpotifyAuthService {
  private clientId: string = process.env.CLIENT_ID || ''; // Your Spotify Client ID
  private clientSecret: string = process.env.CLIENT_SECRET || ''; // Your Spotify Client Secret
  private redirectUri: string = process.env.REDIRECT_URI || 'http://localhost:3001/callback'; // Your redirect URI

  // Method to generate a random string for code_verifier
  private generateRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  // Method to hash the code_verifier
  private async sha256(plain: string): Promise<ArrayBuffer> {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return await crypto.subtle.digest('SHA-256', data);
  }

  // Method to initiate the authentication process
  async authenticate() {
    const codeVerifier = this.generateRandomString(128);
    const hashed = await this.sha256(codeVerifier);
    const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(hashed)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    localStorage.setItem('code_verifier', codeVerifier); // Save code_verifier in localStorage

    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.search = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope: 'user-read-private user-read-email',
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    }).toString();

    window.location.href = authUrl.toString(); // Redirect to Spotify's authorization page
  }

  // Method to exchange code for access and refresh tokens
  async exchangeCodeForToken(code: string): Promise<any> {
    const codeVerifier = localStorage.getItem('code_verifier');

    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: this.redirectUri,
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code_verifier: codeVerifier || '',
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      return response.data; // Return the data containing access token and refresh token
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      throw error;
    }
  }

  // Method to get the access token from local storage
  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }
}

export default new SpotifyAuthService();
