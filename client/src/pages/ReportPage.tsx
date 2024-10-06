import { useState } from "react";
import MapWithAddress from "../components/MapWithAddress"; // Uses OpenStreetMap API for the map
import axios from "axios";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const ReportPage = () => {
  // State to store location details including lat and lon
  const [locationDetails, setLocationDetails] = useState<{
    fullAddress: string; // Full address obtained from Nominatim
    city: string;        // City name obtained from Nominatim
    lat: number;        // Latitude for weather API
    lon: number;        // Longitude for weather API
  } | null>(null);
  
  const [weatherData, setWeatherData] = useState<any>(null); // State to hold weather data from OpenWeather API
  const [error, setError] = useState<string | null>(null); // State to hold error messages
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage submission status

  // Fetch weather data from the backend using OpenWeather API
  const fetchWeather = async (lat: number, lon: number) => {
    try {
      // Send request to backend with lat and lon to get weather data from OpenWeather API
      const response = await axios.get("/api/weather", {
        params: { lat, lon }, // Pass lat and lon as query parameters
      });
      setWeatherData(response.data); // Store fetched weather data
      setError(null); // Clear any previous errors
      setIsModalOpen(false); // Close the modal when data is fetched successfully
    } catch (error) {
      setError("Failed to fetch weather data"); // Handle error
      setIsModalOpen(true); // Open modal to show error
    }
  };

  // Handle location selected from the map
  const handleLocationSelected = (
    lat: number,
    lon: number,
    addressDetails: any, // Address details obtained from Nominatim
  ) => {
    setLocationDetails({ ...addressDetails, lat, lon }); // Update location details
    fetchWeather(lat, lon); // Fetch weather for the selected location using OpenWeather API
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submission state to true

    // Collect report data
    const reportData = {
      // Collect your report data here
      title: "Sample Title", // replace with actual input values
      description: "Sample description", // replace with actual input values
      email: "example@example.com", // replace with actual input values
      phone: "123-456-7890", // replace with actual input values
      contacted: false, // replace with actual checkbox value
      location: JSON.stringify({ lat: locationDetails?.lat, lon: locationDetails?.lon }),
    };

    try {
      // Send report data to the server
      const response = await axios.post("/api/reportAuthority", reportData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token
        },
      });
      console.log("Report submitted successfully:", response.data);
      // Handle successful submission (show success message, clear form, etc.)
    } catch (error) {
      setError("Failed to report the issue"); // Handle error
      setIsModalOpen(true); // Open modal to show error
    } finally {
      setIsSubmitting(false); // Reset submission state
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
                className="w-full p-2 border rounded"
                placeholder="Enter issue title"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Describe the issue"
                required
              />
            </div>

            {/* Reusable Map Component */}
            <MapWithAddress onLocationChange={handleLocationSelected} /> {/* Uses OpenStreetMap API for displaying the map and Nominatim for reverse geocoding */}

            {/* Display Location Details */}
            {locationDetails && (
              <div className="mb-4">
                <h3 className="font-bold text-lg">Location Details</h3>
                <p>City: {locationDetails.city}</p> {/* City from Nominatim */}
                <p>Address: {locationDetails.fullAddress}</p> {/* Full address from Nominatim */}
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
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                required
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
                required
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
              className={`p-2 bg-blue-500 text-white rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} // Disable button when submitting
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportPage;
