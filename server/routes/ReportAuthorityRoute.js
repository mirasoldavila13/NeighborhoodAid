import express from 'express';
import IssueAuthorityAuthority from '../models/reportAuthority.js';
import authMiddleware from '../middleware/authMiddleware.js';  // Middleware to get user ID from auth

const router = express.Router();

// Create a new report (protected route)
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, location, email, phone, contacted } = req.body;
  const userId = req.user.id;  // Assuming authMiddleware adds the user's ID to req.user

  try {
    // Fetch weather data from the weather route
    const weatherResponse = await axios.get('http://localhost:3001/api/weather', {
      params: { lat: location.lat, lon: location.lon },
    });
    const weatherData = weatherResponse.data;

    // Fetch city and address from Nominatim
    const addressResponse = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
      params: {
        format: "json",
        lat: location.lat,
        lon: location.lon,
      },
    });
    const locationData = addressResponse.data;

    // Create a new report with weather and location data
    const newReport = await ReportAuthority.create({
      title,
      description,
      location: JSON.stringify(location),
      email,
      phone,
      contacted,
      weather: {
        temperature: weatherData.main.temp,
        condition: weatherData.weather[0].description,
        wind: weatherData.wind.speed,
        humidity: weatherData.main.humidity,
      },
      address: locationData.display_name,  // Store full address
      city: locationData.address.city,     // Store city name
      userId,  // Storing the user who created the report
    });

    res.status(201).json(newReport);
  } catch (error) {
    console.error('Error creating report:', error);
    res.status(500).json({ message: 'Failed to create report' });
  }
});

export default router;
