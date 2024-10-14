import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import authService from "../services/authService";
import ReportMap from "../components/ReportMap";

const ReportDetailPage: React.FC = () => {
  const { userId, reportId } = useParams<{ userId: string; reportId: string }>();
  const [report, setReport] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const authLoggedIn = authService.loggedIn();
  const navigate = useNavigate();

  // Fetch the specific report from the backend
const fetchReport = async () => {
  try {
    const token = authService.getToken(); // Ensure token is retrieved

    // Attempt to fetch the report from the authority reports
    const authorityResponse = await axios.get(
      `/api/reportAuthority/${userId}/reports/${reportId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (authorityResponse.data) {
      setReport({ ...authorityResponse.data, type: "Authority" });
      setError(null);

      // Fetch the weather for this report
      await fetchCurrentWeather(
        authorityResponse.data.lat,
        authorityResponse.data.lon
      );
    }
  } catch (error) {
    console.error("Error fetching authority report:", error);
    setError("Failed to fetch authority report, checking community reports...");

    // If the authority report fetch fails, try fetching from community reports
    try {
      const token = authService.getToken(); // Make sure to retrieve the token again
      const communityResponse = await axios.get(
        `/api/community-issues/${reportId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use the token here
          },
        }
      );

      if (communityResponse.data) {
        setReport({ ...communityResponse.data, type: "Community" });
        setError(null);

        // Fetch weather data using community report coordinates
        await fetchCurrentWeather(
          communityResponse.data.location.lat,
          communityResponse.data.location.lon
        );
      }
    } catch (communityError) {
      console.error("Error fetching community report:", communityError);
      setError("Failed to fetch report from community reports");
    }
  }
};


  // Fetch current weather using lat and lon
  const fetchCurrentWeather = async (lat: number, lon: number) => {
    try {
      const weatherResponse = await axios.get(
        `/api/weather?lat=${lat}&lon=${lon}`
      );
      setWeather(weatherResponse.data);
    } catch (error) {
      console.error("Error fetching current weather:", error);
    }
  };

  useEffect(() => {
    fetchReport();
  }, [userId, reportId]);

  // Function to handle delete report
  const handleDeleteReport = async () => {
    const token = authService.getToken();
    try {
      await axios.delete(`/api/reportAuthority/reports/${reportId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Redirect to reported issues after deletion
      navigate(`/dashboard/${userId}/reported-issues`);
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {error && <p className="text-red-500">{error}</p>}
              {report ? (
                <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                  <h1 className="text-3xl font-bold mb-4 text-center">
                    {report.title}
                  </h1>
                  <p className="text-lg mb-2 text-center">
                    {report.description}
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    Status:
                    {report.status || "Open"}
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    Reporter: {report.email}
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    City: {report.city}
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    Date: {new Date(report.createdAt).toLocaleString()}
                  </p>

                  <h2 className="text-xl font-semibold mt-4 mb-2 text-center">
                    Weather Details:
                  </h2>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      City: {weather?.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      Temperature: {weather?.main?.temp}°F
                    </p>
                    <p className="text-sm text-gray-600">
                      Condition: {weather?.weather[0]?.description}
                    </p>
                    <p className="text-sm text-gray-600">
                      Wind: {weather?.wind?.speed} mph
                    </p>
                    <p className="text-sm text-gray-600">
                      Humidity: {weather?.main?.humidity}%
                    </p>
                  </div>

                  <div className="mt-4">
                    <ReportMap
                      lat={report.lat || report.location.lat}
                      lon={report.lon || report.location.lon}
                      title={report.title}
                      description={report.description}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap justify-center space-x-4">
                    <Link
                      to={`/dashboard/${userId}/reported-issues`}
                      className="mb-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Back to Reported Issues
                    </Link>
                    <Link
                      to={`/dashboard/${userId}/edit-report/${reportId}`}
                      className="mb-2 inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit Report
                    </Link>
                    <button
                      onClick={handleDeleteReport}
                      className="mb-2 inline-block bg-red text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete Report
                    </button>
                  </div>
                </div>
              ) : (
                <p>Loading report...</p>
              )}
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ReportDetailPage;
