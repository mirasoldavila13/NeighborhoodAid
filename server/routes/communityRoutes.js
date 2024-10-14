import express from 'express';
import ReportCommunity from '../models/reportCommunity.js'; 
import authMiddleware from '../middleware/authMiddleware.js';
import axios from 'axios';

const router = express.Router();

// POST route for creating a community report
router.post("/", authMiddleware, async (req, res) => {
  
  const { title, description, location, email, phone, contacted } = req.body; 
  const userId = req.user.id; 

  try {
    // Log the incoming request body for debugging
    console.log("Request body:", req.body);

    // Validate the incoming location data
    if (!location || !location.lat || !location.lon) {
      return res.status(400).json({ message: "Latitude and longitude are required" });
    }

    
    const weatherApiKey = process.env.WEATHER_API_KEY; 
    const geolocationResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lon}&appid=${weatherApiKey}`);

    
    const cityData = geolocationResponse.data;
    const cityNameFromApi = cityData.length > 0 ? cityData[0].name : 'Unknown City';

    // Create a new report in the database
    const newReport = await ReportCommunity.create({
      title,
      description,
      location: { lat: location.lat, lon: location.lon }, 
      email,
      phone,
      contacted,
      city: cityNameFromApi, 
      userId, 
      status: 'reported' 
    });

    res.status(201).json(newReport); 
  } catch (error) {
  
    console.error("Error creating report:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to create report" }); 
  }
});

// GET route for fetching reports by user ID and status
router.get("/:userId/reports", authMiddleware, async (req, res) => {
  const userId = req.params.userId;
  const { status } = req.query; 

  try {
    const whereClause = { userId }; 
    if (status) {
      whereClause.status = status; 
    }

    const reports = await ReportCommunity.findAll({
      where: whereClause,
    });
    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Failed to fetch reports" });
  }
});


export default router;
