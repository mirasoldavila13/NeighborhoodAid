import ReportCommunity from '../models/reportCommunity.js';
import axios from 'axios';

// Create a new community report
export const createReport = async (req, res) => {
  const { title, description, location, email, phone } = req.body;
  const userId = req.user.id; 
  const { lat, lon } = location;

  try {
    const weatherApiKey = process.env.WEATHER_API_KEY;
    const geolocationResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse`, {
      params: { lat, lon, appid: weatherApiKey },
    });

    const cityData = geolocationResponse.data;
    const cityName = cityData.length > 0 ? cityData[0].name : 'Unknown City';

    console.log("City Name:", cityName);

    const newReport = await ReportCommunity.create({
      title,
      description,
      location: { lat, lon }, 
      email,
      phone,
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
  const userId = req.params.userId;

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

// Get a single report by userId and reportId
export const getReportById = async (req, res) => {
  const { userId, reportId } = req.params;

  try {
    const report = await ReportCommunity.findOne({
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
};

// Update a community report
export const updateReport = async (req, res) => {
  const { id } = req.params; 
  const userId = req.user.id; 
  const { title, description, email, phone, city, location } = req.body; 

  try {
    const report = await ReportCommunity.findOne({ 
      where: { id, userId } 
    });

    if (!report) {
      return res.status(404).json({ message: "Report not found or user unauthorized" });
    }

    report.title = title;
    report.description = description;
    report.email = email;
    report.phone = phone;
    report.city = city;
    report.location = location; 

    await report.save(); 
    res.status(200).json(report); 
  } catch (error) {
    console.error("Error updating report:", error);
    res.status(500).json({ message: "Failed to update report" });
  }
};

// Delete a community report
export const deleteReport = async (req, res) => {
  const { id } = req.params; 

  try {
    const report = await ReportCommunity.findByPk(id); 
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    await report.destroy(); 
    res.status(204).send(); 
  } catch (error) {
    console.error("Error deleting report:", error);
    res.status(500).json({ message: "Failed to delete report" });
  }
};
