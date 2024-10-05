import { JwtPayload, jwtDecode } from 'jwt-decode';

declare module "jwt-decode" {
  export interface JwtPayload {
      id: number,
      email: string;
  }
}

class AuthService {
  getProfile(): JwtPayload | null {
    // TODO: return the decoded token
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return null;
  }

  loggedIn(): boolean {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    // TODO: return a value that indicates if the token is expired
    if (!token || token.split('.').length !== 3) {
      console.log('Invalid token format');
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
    // TODO: return the token
    const loggedUser = localStorage.getItem('jwtToken') || '';
    return loggedUser;
  }
}

export default new AuthService();
