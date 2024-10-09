import express from 'express';
import spotifyAuthService from '../services/spotifyAuthService'; // Import your SpotifyAuthService

const router = express.Router();

// Route for initiating Spotify login
router.get('/login', (req, res) => {
  spotifyAuthService.authenticate(); // Redirect user to Spotify login
});

// Route for handling the Spotify callback
router.get('/callback', async (req, res) => {
  const { code } = req.query;

  if (code) {
    try {
      const data = await spotifyAuthService.exchangeCodeForToken(code);

      // Store tokens and userId securely
      localStorage.setItem('accessToken', data.access_token);
      localStorage.setItem('refreshToken', data.refresh_token);
      localStorage.setItem('userId', data.userId); // Assuming userId is part of the response

      // Redirect to your frontend dashboard
      res.redirect(`http://localhost:3001/dashboard/${data.userId}`);
    } catch (error) {
      console.error('Error during token exchange:', error);
      res.status(500).send('Error during token exchange');
    }
  } else {
    res.status(400).send('No code found');
  }
});

export default router;
