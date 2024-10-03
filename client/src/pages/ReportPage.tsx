import { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const customMarkerIcon = new L.Icon({
  iconUrl: "/leaflet-images/marker-icon.png",
  shadowUrl: "/leaflet-images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ReportPage = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchWeather = async (lat: number, lon: number) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
      );
      setWeatherData(response.data);
    } catch (error) {
      setError("Failed to fetch weather data");
      setIsModalOpen(true);
    }
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        fetchWeather(e.latlng.lat, e.latlng.lng);
      },
    });

    return position ? (
      <Marker position={position} icon={customMarkerIcon} />
    ) : null;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <main className="flex-grow p-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            message={error || ""}
            type="error"
          />

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Issue Title
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter issue title"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Describe the issue"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Select Location on Map
              </label>
              <MapContainer
                center={position || [34.0522, -118.2437]} // Default center is Los Angeles
                zoom={13}
                style={{ height: "300px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker />
              </MapContainer>
            </div>

            {weatherData && (
              <div className="mb-4">
                <h3 className="font-bold text-lg">Weather at Location</h3>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Condition: {weatherData.weather[0].description}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  alt={weatherData.weather[0].description}
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Phone
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Have You Contacted Local Authorities?
              </label>
              <input type="checkbox" className="mr-2" />
              <span>Yes</span>
            </div>

            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded"
            >
              Submit Report
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportPage;
