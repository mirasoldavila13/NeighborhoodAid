import { useState } from "react";
import MapWithAddress from "../components/MapWithAddress";
import axios from "axios";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import authService from "../services/authService";
import { Navigate, useNavigate } from "react-router-dom";

const ReportPage = () => {
  const authLoggedIn = authService.loggedIn();
  const navigate = useNavigate();

  const [locationDetails, setLocationDetails] = useState<{
    fullAddress: string;
    city: string;
    lat: number;
    lon: number;
  } | null>(null);

  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportData, setReportData] = useState({
    title: '',
    description: '',
    email: '',
    phone: '',
    contacted: false,
  });

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const response = await axios.get("/api/weather", {
        params: { lat, lon },
      });
      setWeatherData(response.data);
      setError(null);
      setIsModalOpen(false);
    } catch (error) {
      setError("Failed to fetch weather data");
      setIsModalOpen(true);
    }
  };

  const handleLocationSelected = async (lat: number, lon: number, addressDetails: any) => {
    setLocationDetails({ ...addressDetails, lat, lon });
    await fetchWeather(lat, lon);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/reportAuthority", {
        ...reportData,
        location: {
          lat: locationDetails?.lat,
          lon: locationDetails?.lon,
        },
        cityName: locationDetails?.city,
        fullAddress: locationDetails?.fullAddress,
      }, {
        headers: {
          Authorization: `Bearer ${authService.getToken()}`,
        },
      });
      console.log("Report submitted successfully:", response.data);
      
      const userProfile = authService.getProfile();
      if (userProfile) {
        navigate(`/dashboard/${userProfile.id}/reported-issues`);
      }
    } catch (error) {
      setError("Failed to report the issue");
      setIsModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReportData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto border p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Report an Issue</h2>

              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                message={error || ""}
                type="error"
              />

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Issue Title</label>
                  <input
                    type="text"
                    name="title"
                    value={reportData.title}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter issue title"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Description</label>
                  <textarea
                    name="description"
                    value={reportData.description}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Describe the issue"
                    required
                  />
                </div>

                <MapWithAddress onLocationChange={handleLocationSelected} />

                {locationDetails && (
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">Location Details</h3>
                    <p>City: {locationDetails.city}</p>
                    <p>Address: {locationDetails.fullAddress}</p>
                  </div>
                )}

                {weatherData && (
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">{locationDetails?.city} Weather</h3>
                    <p>Temperature: {weatherData.main.temp}°F</p>
                    <p>Condition: {weatherData.weather[0].description}</p>
                    <p>Wind Speed: {weatherData.wind.speed} mph</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={reportData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={reportData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Have You Contacted Local Authorities?</label>
                  <input
                    type="checkbox"
                    name="contacted"
                    checked={reportData.contacted}
                    onChange={e => setReportData({ ...reportData, contacted: e.target.checked })}
                    className="mr-2"
                  />
                  <span>Yes</span>
                </div>

                <button
                  type="submit"
                  className={`p-2 bg-blue-500 text-white rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Report"}
                </button>
              </form>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ReportPage;
