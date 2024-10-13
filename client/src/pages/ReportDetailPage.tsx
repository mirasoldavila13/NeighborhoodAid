import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Navigate, Link } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import authService from "../services/authService";
import ReportMap from "../components/ReportMap";
import Weather from "../components/Weather"; // Import the Weather component

const ReportDetailPage: React.FC = () => {
  const { userId, reportId } = useParams<{ userId: string; reportId: string }>();
  const [report, setReport] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const authLoggedIn = authService.loggedIn();

  // Fetch the specific report from the backend
  const fetchReport = async () => {
    try {
      const token = authService.getToken();
      
      // Attempt to fetch the report from the authority reports
      const authorityResponse = await axios.get(`/api/reportAuthority/${userId}/reports/${reportId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (authorityResponse.data) {
        setReport(authorityResponse.data);
        setError(null);
        
        // Fetch the weather only if this is an authority report
        await fetchCurrentWeather(authorityResponse.data.lat, authorityResponse.data.lon);
      }
    } catch (error) {
      console.error("Error fetching authority report:", error);
      setError("Failed to fetch authority report, checking community reports...");

      // If the authority report fetch fails, try fetching from community reports
      try {
        const communityResponse = await axios.get(`/api/community-issues/${reportId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (communityResponse.data) {
          setReport(communityResponse.data);
          setError(null);
          
          // Fetch weather data using community report coordinates
          await fetchCurrentWeather(communityResponse.data.location.lat, communityResponse.data.location.lon);
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
      const weatherResponse = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);
      setCurrentWeather(weatherResponse.data);
    } catch (error) {
      console.error("Error fetching current weather:", error);
    }
  };

  useEffect(() => {
    fetchReport();
  }, [userId, reportId]);

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto">
              {error && <p className="text-red-500">{error}</p>}
              {report ? (
                <div className="p-4 border rounded shadow">
                  <h1 className="text-2xl font-bold mb-4">{report.title}</h1>
                  <p>{report.description}</p>
                  <p className="text-sm text-gray-600">Status: {report.status || 'Open'}</p>
                  <p className="text-sm text-gray-600">Reporter: {report.email}</p>
                  <p className="text-sm text-gray-600">City: {report.city}</p>
                  <p className="text-sm text-gray-600">Date: {new Date(report.createdAt).toLocaleString()}</p>

                  {/* Use the Weather component and pass the lat and lon */}
                  <Weather lat={report.lat || report.location.lat} lon={report.lon || report.location.lon} />

                  <ReportMap lat={report.lat || report.location.lat} lon={report.lon || report.location.lon} title={report.title} description={report.description} />

                  <Link to={`/dashboard/${userId}/reported-issues`} className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                    Back to Reported Issues
                  </Link>
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
