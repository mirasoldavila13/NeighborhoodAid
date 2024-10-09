import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import spotifyAuthService from '../services/spotifyAuthService';

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ code: string }>();
  const { code } = params;

  useEffect(() => {
    if (code) {
      spotifyAuthService.exchangeCodeForToken(code)
        .then((data) => {
          localStorage.setItem('accessToken', data.access_token);
          localStorage.setItem('refreshToken', data.refresh_token);
          localStorage.setItem('userId', data.userId); // Assuming userId is part of the response
          navigate(`/dashboard/${data.userId}`); // Redirect to the dashboard with userId
        })
        .catch((error) => {
          console.error("Error during token exchange:", error);
        });
    }
  }, [code, navigate]);

  return null; // Or a loading indicator
};

export default AuthCallback;
