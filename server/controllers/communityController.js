import ReportCommunity from '../models/reportCommunity.js';
import axios from 'axios';

// Create a new community report
export const createReport = async (req, res) => {
  const { title, description, location, email, phone, contacted } = req.body;
  const userId = req.user.id; 
  
  const { lat, lon } = location;

  try {
    // Fetch city name from OpenWeather Geolocation API
    const weatherApiKey = process.env.WEATHER_API_KEY;
    const geolocationResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`);

    // Extract city name from the response
    const cityData = geolocationResponse.data;
    const cityName = cityData.length > 0 ? cityData[0].name : 'Unknown City';

    // Log the city name for debugging
    console.log("City Name:", cityName);

    // Create a new report in the database
    const newReport = await ReportCommunity.create({
      title,
      description,
      location: { lat, lon }, 
      email,
      phone,
      contacted,
      city: cityName, 
      userId, 
    });

    res.status(201).json(newReport);
  } catch (error) {
    console.error("Error creating report:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to create report" }); 
  }
};

// Get all reports for a specific user
export const getReportsByUserId = async (req, res) => {
  const userId = req.user.id; 

  try {
    const reports = await ReportCommunity.findAll({
      where: { userId },
    });
    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Failed to fetch reports" });
  }
};
