import { useState, useEffect } from "react";
import axios from "axios";

interface WeatherData {
  name: string; 
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string; 
  }[];
  wind: {
    speed: number;
  };
}

interface WeatherProps {
  lat?: number;  
  lon?: number; 
}

const Weather: React.FC<WeatherProps> = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch weather data from the backend
  const fetchWeather = async (lat: number, lon: number) => {
    try {
      
      const response = await axios.get("/api/weather", {
        params: { lat, lon },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError("Failed to fetch weather data");
    }
  };

  // Fetch location using OpenWeather's geolocation API as fallback
  const fetchLocationFromOpenWeather = async () => {
    try {
      // Use IP-based geolocation as a fallback
      const response = await axios.get("https://ipapi.co/json"); 
      if (response.data) {
        const { latitude, longitude } = response.data;
        fetchWeather(latitude, longitude); 
      }
    } catch (error) {
      console.error(
        "Failed to retrieve location from OpenWeather Geolocation API:",
        error
      );
      setError("Failed to retrieve location from OpenWeather Geolocation API");
    }
  };

  useEffect(() => {
    
    if (lat && lon) {
      fetchWeather(lat, lon);
    } else {
      
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (_) => {
            console.error(
              "Browser geolocation permission denied, using OpenWeather Geolocation API"
            );
            fetchLocationFromOpenWeather();
          }
        );
      } else {
        console.error(
          "Browser geolocation not supported, using OpenWeather Geolocation API"
        );
        fetchLocationFromOpenWeather(); 
      }
    }
  }, [lat, lon]); 

  return (
    <div className="weather-widget p-4 bg-white shadow-md rounded-lg">
      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
          <h3 className="text-xl font-bold mb-2">{weatherData.name}</h3>
          <p className="text-lg">Temperature: {weatherData.main.temp}°F</p>
          <p className="text-md capitalize">
            Condition: {weatherData.weather[0].description}
          </p>
          <p className="text-md">Wind: {weatherData.wind.speed} mph</p>
          <p className="text-md">Humidity: {weatherData.main.humidity}%</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
