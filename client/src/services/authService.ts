// authService.ts
import { JwtPayload, jwtDecode } from "jwt-decode";

// Extend JwtPayload to include custom fields
interface CustomJwtPayload extends JwtPayload {
  id: number;
  email: string;
  name?: string; // Optional name property
}

class AuthService {
  async register(userData: { name: string; email: string; password: string }): Promise<{ token: string; message?: string }> {
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

    this.setToken(result.token);
    return result;
  }

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

    this.setToken(result.token);
    return result.token;
  }

  setToken(token: string) {
    localStorage.setItem("jwtToken", token);
  }

  logout() {
    localStorage.removeItem("jwtToken");
  }

  getProfile(): CustomJwtPayload | null {
    const token = this.getToken();
    if (token) {
      return jwtDecode<CustomJwtPayload>(token);
    }
    return null;
  }

  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
      return decoded.exp ? Date.now() >= decoded.exp * 1000 : true;
    } catch {
      return true;
    }
  }

  getToken(): string | null {
    return localStorage.getItem("jwtToken") || null;
  }
}

export default new AuthService();
