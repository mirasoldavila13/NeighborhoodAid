import Report from '../models/reportAuthority.js'; 

// Create a new report
export const createReport = async (req, res) => {
  const { title, description, location, email, phone, contacted } = req.body;
  const userId = req.user.id;

  try {
    // Fetch weather data
    const weatherResponse = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: location.lat,
        lon: location.lon,
        appid: process.env.WEATHER_API_KEY,
      },
    });

    const weatherData = weatherResponse.data;

    const newReport = await Report.create({
      title,
      description,
      lat: location.lat,
      lon: location.lon,
      email,
      phone,
      contacted,
      weather: {
        temperature: weatherData.main.temp,
        condition: weatherData.weather[0].description,
        wind: weatherData.wind.speed,
        humidity: weatherData.main.humidity,
      },
      userId,
    });

    res.status(201).json(newReport);
  } catch (error) {
    console.error("Error creating report:", error);
    res.status(500).json({ message: "Failed to create report" });
  }
};

// Get all reports for a specific user
export const getReportsByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const reports = await Report.findAll({
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
    const report = await Report.findOne({
      where: { userId, id: reportId },
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

// Update a report
export const updateReport = async (req, res) => {
  const { id } = req.params;
  const { title, description, email, phone, contacted, city, lat, lon } = req.body;

  try {
    const report = await Report.findByPk(id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    report.title = title;
    report.description = description;
    report.email = email;
    report.phone = phone;
    report.contacted = contacted;
    report.city = city;
    report.lat = lat;
    report.lon = lon;

    await report.save();
    res.status(200).json(report);
  } catch (error) {
    console.error("Error updating report:", error);
    res.status(500).json({ message: "Failed to update report" });
  }
};

// Delete a report
export const deleteReport = async (req, res) => {
  const { id } = req.params;

  try {
    const report = await Report.findByPk(id);
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
