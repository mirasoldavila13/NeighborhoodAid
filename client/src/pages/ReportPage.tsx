import { useState } from "react";
import MapWithAddress from "../components/MapWithAddress";
import axios from "axios";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const ReportPage = () => {
  const [locationDetails, setLocationDetails] = useState<{
    fullAddress: string;
    city: string;
  } | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email: "",
    phone: "",
    contacted: false,
  });

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const response = await axios.get("/api/weather", {
        params: { lat, lon },
      });
      setWeatherData(response.data);
      setError(null); // Clear any previous errors
      setIsModalOpen(false); // Close the modal when data is fetched successfully
    } catch (error) {
      setError("Failed to fetch weather data");
      setIsModalOpen(true);
    }
  };

  const handleLocationSelected = (
    lat: number,
    lon: number,
    addressDetails: any,
  ) => {
    setLocationDetails(addressDetails);
    fetchWeather(lat, lon);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: !formData[name] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reportData = {
      ...formData,
      location: JSON.stringify({
        lat: locationDetails?.lat,
        lon: locationDetails?.lon,
      }),
      weatherData,
    };

    try {
      const response = await axios.post("/api/reportAuthority", reportData);
      // Handle successful submission (show success message, clear form, etc.)
    } catch (error) {
      setError("Failed to report the issue");
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <main className="flex-grow p-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>

          {/* Error Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            message={error || ""}
            type="error"
          />

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Issue Title
              </label>
              <input
                type="text"
                name="title"
                className="w-full p-2 border rounded"
                placeholder="Enter issue title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                name="description"
                className="w-full p-2 border rounded"
                placeholder="Describe the issue"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Reusable Map Component */}
            <MapWithAddress onLocationChange={handleLocationSelected} />

            {/* Display Location Details */}
            {locationDetails && (
              <div className="mb-4">
                <h3 className="font-bold text-lg">Location Details</h3>
                <p>City: {locationDetails.city}</p>
                <p>Address: {locationDetails.fullAddress}</p>
              </div>
            )}

            {/* Display Weather Data */}
            {weatherData && (
              <div className="mb-4">
                <h3 className="font-bold text-lg">
                  {locationDetails?.city} Weather
                </h3>
                <p>Temperature: {weatherData.main.temp}°F</p>
                <p>Condition: {weatherData.weather[0].description}</p>
                <p>Wind Speed: {weatherData.wind.speed} mph</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="w-full p-2 border rounded"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Have You Contacted Local Authorities?
              </label>
              <input
                type="checkbox"
                name="contacted"
                className="mr-2"
                checked={formData.contacted}
                onChange={handleChange}
              />
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
