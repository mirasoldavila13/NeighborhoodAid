import { JwtPayload, jwtDecode } from "jwt-decode";

declare module "jwt-decode" {
  export interface JwtPayload {
    id: number;
    email: string;
  }
}

class AuthService {
  /**
   * Handles user login by sending a POST request to the /api/login endpoint.
   * @param email User's email address.
   * @param password User's password.
   * @returns A promise that resolves to a string token if the login is successful.
   * @throws An error if login fails.
   *
   **/

  async login(email: string, password: string): Promise<string> {
    // Send a POST request to the login endpoint with the user's email and password
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

    // Use setToken to store the token in local storage
    this.setToken(result.token); // Call the setToken method
    return result.token; // Return the token for further use
  }

  //new method to set the token
  setToken(token: string) {
    // Store the token in local storage
    localStorage.setItem("jwtToken", token);
  }

  // New method to handle logout
  logout() {
    // Clear the token from local storage
    localStorage.removeItem("jwtToken");
  }
  
  getProfile(): JwtPayload | null {
    // Return the decoded token
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return null;
  }

  loggedIn(): boolean {
    // Return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    // Return a value that indicates if the token is expired
    if (!token || token.split(".").length !== 3) {
      console.log("Invalid token format");
      return true;
    }

    try {
      const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
      let expirationTime = 0;

      if (decoded.exp) {
        expirationTime = decoded.exp * 1000;
      }
      return Date.now() >= expirationTime;
    } catch (err) {
      console.log(err);
      return true;
    }
  }

  getToken(): string | null {
    // Return the token
    const loggedUser = localStorage.getItem("jwtToken") || "";
    return loggedUser;
  }
}

export default new AuthService();
