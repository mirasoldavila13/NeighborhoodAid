const express = require('express');
const axios = require('axios');
const { Issue } = require('../models/issue');
const router = express.Router();

// Route to handle issue creation
router.post('/api/issues', async (req, res) => {
  const { title, description, location, email, phone, contacted } = req.body;

  try {
    // Fetch weather data from OpenWeather API based on the location
    const weatherApiKey = process.env.WEATHER_API_KEY;
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${weatherApiKey}&units=imperial`
    );

    const weatherData = weatherResponse.data;

    // Create a new issue
    const newIssue = await Issue.create({
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
    });

    // Send the created issue as a response
    res.status(201).json(newIssue);
  } catch (error) {
    console.error('Error creating issue:', error);
    res.status(500).json({ message: 'Failed to create issue' });
  }
});

module.exports = router;
