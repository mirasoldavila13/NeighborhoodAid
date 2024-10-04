import { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
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
  name: string; // City name
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch weather data from OpenWeatherMap API in Fahrenheit
  const fetchWeather = async (lat: number, lon: number) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    if (!apiKey) {
      setError('API Key not found');
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError('Failed to fetch weather data');
    }
  };

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        () => {
          setError('Failed to retrieve location');
        }
      );
    } else {
      setError('Geolocation not supported by this browser');
    }
  }, []);

  return (
    <div className="weather-widget p-4 bg-white shadow-md rounded-lg">
      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
          <h3 className="text-xl font-bold mb-2">{weatherData.name} Weather</h3>
          <p className="text-lg">Temperature: {weatherData.main.temp}°F</p>
          <p className="text-md capitalize">Condition: {weatherData.weather[0].description}</p>
          <p className="text-md">Wind: {weatherData.wind.speed} m/s</p>
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
