<<<<<<< HEAD
import { JwtPayload, jwtDecode } from "jwt-decode";
import axios from 'axios';
=======
import {JwtPayload, jwtDecode} from "jwt-decode";
>>>>>>> release/v2.0

// Extend the JwtPayload interface to include custom fields like `id` and `name`.
interface CustomJwtPayload extends JwtPayload {
  id: number;
  email: string;
  name?: string; // Optional name property
}

interface UserData {
  name: string;
  email: string;
  password: string;
}

interface UserData {
  name: string;
  email: string;
  password: string;
}

class AuthService {

  /**
   * Handles user registration by sending a POST request to the /api/register endpoint.
   * @param {UserData} userData - An object containing the user's registration information.
   * @returns {Promise<{ token: string; message?: string }>} A promise that resolves to the response object containing 
   * the JWT token and possibly user profile information if the registration is successful.
   * @throws {Error} An error if registration fails, with a message indicating the reason for the failure.
   */
  async register(userData: UserData): Promise<{ token: string; message?: string }> {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Registration failed");
    }

    this.setToken(result.token); // Store the JWT token in local storage
    return result; // Return the result for further use
  }

  /**
<<<<<<< HEAD
=======
   * Handles user registration by sending a POST request to the /api/register endpoint.
   * @param {UserData} userData - An object containing the user's registration information.
   * @returns {Promise<{ token: string; message?: string }>} A promise that resolves to the response object containing 
   * the JWT token and possibly user profile information if the registration is successful.
   * @throws {Error} An error if registration fails, with a message indicating the reason for the failure.
   */
  async register(userData: UserData): Promise<{ token: string; message?: string }> {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Registration failed");
    }

    this.setToken(result.token); // Store the JWT token in local storage
    return result; // Return the result for further use
  }

  /**
>>>>>>> release/v2.0
   * Handles user login by sending a POST request to the /api/login endpoint.
   * @param {string} email - User's email address.
   * @param {string} password - User's password.
   * @returns {Promise<string>} A promise that resolves to a string token if the login is successful.
   * @throws {Error} An error if login fails.
   **/
  async login(email: string, password: string): Promise<string> {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Login failed");
    }

    this.setToken(result.token); // Store the token in local storage
    return result.token; // Return the token for further use
  }

<<<<<<< HEAD
  // New method to set the token
=======
  // Method to set the token
>>>>>>> release/v2.0
  setToken(token: string) {
    localStorage.setItem("jwtToken", token); // Store the token in local storage
  }

  // Method to handle logout
  logout() {
    localStorage.removeItem("jwtToken"); // Clear the token from local storage
  }

<<<<<<< HEAD
  getProfile(): JwtPayload | null {
    const token = this.getToken(); // Get the token
    if (token) {
      return jwtDecode<JwtPayload>(token); // Decode the token to get user profile
=======
  getProfile(): CustomJwtPayload | null {
    const token = this.getToken(); // Get the token
    if (token) {
      return jwtDecode<CustomJwtPayload>(token); // Decode the token to get user profile
>>>>>>> release/v2.0
    }
    return null; // Return null if no token
  }

  loggedIn(): boolean {
    const token = this.getToken(); // Check if the user is logged in
    return !!token && !this.isTokenExpired(token); // Return true if the token is valid
  }

  isTokenExpired(token: string): boolean {
    if (!token || token.split(".").length !== 3) {
      console.log("Invalid token format");
      return true; // Return true if token format is invalid
    }

    try {
<<<<<<< HEAD
      const decoded: JwtPayload = jwtDecode<JwtPayload>(token); // Decode the token
=======
      const decoded: CustomJwtPayload = jwtDecode<CustomJwtPayload>(token); // Decode the token
>>>>>>> release/v2.0
      let expirationTime = 0;

      if (decoded.exp) {
        expirationTime = decoded.exp * 1000; // Convert expiration time to milliseconds
      }
      return Date.now() >= expirationTime; // Check if the token is expired
    } catch (err) {
      console.log(err);
      return true; // Return true if an error occurs
    }
  }

  getToken(): string | null {
    return localStorage.getItem("jwtToken") || null; // Return the token from local storage
<<<<<<< HEAD
=======
  }

  getUserId(): number | null {
    const profile = this.getProfile(); // Get user profile
    return profile ? profile.id : null; // Return user ID or null if not found
>>>>>>> release/v2.0
  }

  // New method to get Spotify access token
  async getSpotifyAccessToken(): Promise<string> {
    if (this.accessToken && this.tokenExpirationTime && Date.now() < this.tokenExpirationTime) {
      return this.accessToken; // Return existing token if valid
    }
  
    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: this.spotifyClientId,
        client_secret: this.spotifyClientSecret,
      }).toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      this.accessToken = response.data.access_token; // Store the access token
      this.tokenExpirationTime = Date.now() + response.data.expires_in * 1000; // Set expiration time
  
      if (!this.accessToken) {
        throw new Error('Failed to retrieve access token');
      }
  
      return this.accessToken; // Return the new access token
    } catch (error) {
      // Check if error is an Axios error and has a response
      if (axios.isAxiosError(error)) {
        console.error('Error fetching Spotify access token:', error.response?.data || error);
      } else {
        console.error('Error fetching Spotify access token:', error);
      }
      throw new Error('Failed to fetch Spotify access token');
    }
  }
  
  

  // New method to fetch user playlists from Spotify
  async fetchUserPlaylists(): Promise<any> {
    const token = await this.getSpotifyAccessToken(); // Get the access token
  
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; // Return user playlists
    } catch (error) {
      // Use type assertion to specify the error type
      if (axios.isAxiosError(error) && error.response) {
        console.error('Error fetching playlists:', error.response.data);
      } else {
        console.error('Error fetching playlists:', error);
      }
      throw new Error('Failed to fetch playlists');
    }
  }
  
}

export default new AuthService();
