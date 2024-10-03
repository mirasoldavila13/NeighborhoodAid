import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string; // City name
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch weather data from OpenWeatherMap API
  const fetchWeather = async () => {
    const apiKey = ''; //add api key
    const city = 'Los Angeles'; // Default city

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError('Failed to fetch weather data');
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="weather-widget p-4 bg-white shadow-md rounded-lg">
      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
          <h3 className="text-xl font-bold mb-2">{weatherData.name} Weather</h3>
          <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
          <p className="text-md capitalize">
            Condition: {weatherData.weather[0].description}
          </p>
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
