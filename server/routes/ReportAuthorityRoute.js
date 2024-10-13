import express from 'express';
import reportAuthority from '../models/reportAuthority.js';
import authMiddleware from '../middleware/authMiddleware.js';
import axios from 'axios';

const router = express.Router();

//POST route for creating a report
router.post("/", authMiddleware, async (req, res) => {
  // Capture relevant data from the request body
  const { title, description, location, email, phone, contacted, cityName, fullAddress } = req.body;
  const userId = req.user.id; // Get the user ID from the authenticated user

  try {
    // Log the incoming request body for debugging
    console.log("Request body:", req.body);

    // Validate the incoming location data
    if (!location || !location.lat || !location.lon) {
      return res.status(400).json({ message: "Latitude and longitude are required" });
    }

    // Fetch weather data using OpenWeather API
    const weatherResponse = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: location.lat,
        lon: location.lon,
        appid: process.env.WEATHER_API_KEY, // Use your actual API key
      },
    });

    const weatherData = weatherResponse.data;

    // Create a new report using the data from the request body
    const newReport = await reportAuthority.create({
      title,
      description,
      lat: location.lat, // Store latitude directly
      lon: location.lon, // Store longitude directly
      email,
      phone,
      contacted,
      weather: {
        temperature: weatherData.main.temp,
        condition: weatherData.weather[0].description,
        wind: weatherData.wind.speed,
        humidity: weatherData.main.humidity,
      },
      address: fullAddress, // Use the full address from the request body
      city: cityName || 'Unknown City', // Use city name from the request body or default to 'Unknown City'
      userId, // Store the user ID who created the report
    });

    res.status(201).json(newReport); // Respond with the created report
  } catch (error) {
    // Log any error that occurs
    console.error("Error creating report:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to create report" }); // Respond with an error message
  }
});

// New route for fetching reports by user ID
router.get("/:userId/reports", authMiddleware, async (req, res) => {
  const userId = req.params.userId; // Get the user ID from the route parameters

  try {
    const reports = await reportAuthority.findAll({
      where: { userId }, // Query the ReportAuthorities table for reports belonging to the user
    });
    res.status(200).json(reports); // Respond with the reports
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Failed to fetch reports" });
  }
});


// New route for updating a report
router.put("/reports/:id", authMiddleware, async (req, res) => {
  const { id } = req.params; // Get report ID from route parameters
  const { title, description, email, phone, contacted, city, lat, lon } = req.body; // Get updated data from request body

  try {
    const report = await reportAuthority.findByPk(id); // Find the report by ID
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    // Update report details
    report.title = title;
    report.description = description;
    report.email = email;
    report.phone = phone;
    report.contacted = contacted;
    report.city = city;
    report.lat = lat;
    report.lon = lon;

    await report.save(); // Save changes to the database
    res.status(200).json(report); // Respond with the updated report
  } catch (error) {
    console.error("Error updating report:", error);
    res.status(500).json({ message: "Failed to update report" });
  }
});

// New route for deleting a report
router.delete("/reports/:id", authMiddleware, async (req, res) => {
  const { id } = req.params; // Get report ID from route parameters

  try {
    const report = await reportAuthority.findByPk(id); // Find the report by ID
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    await report.destroy(); // Delete the report
    res.status(204).send(); // Respond with no content
  } catch (error) {
    console.error("Error deleting report:", error);
    res.status(500).json({ message: "Failed to delete report" });
  }
});

// Get a single report by userId and reportId
router.get("/:userId/reports/:reportId", authMiddleware, async (req, res) => {
  const { userId, reportId } = req.params;

  try {
    const report = await reportAuthority.findOne({
      where: {
        userId,
        id: reportId,
      },
    });

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json(report);
  } catch (error) {
    console.error("Error fetching report:", error);
    res.status(500).json({ message: "Failed to fetch report" });
  }
});



// Export the router
export default router;
