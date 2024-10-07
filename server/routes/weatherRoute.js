import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/api/weather", async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res
      .status(400)
      .json({ message: "Latitude and longitude are required" });
  }

  try {
    const weatherApiKey = process.env.WEATHER_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch weather data" });
  }
});

export default router;
