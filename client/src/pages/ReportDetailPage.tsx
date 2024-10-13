import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Navigate } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import authService from "../services/authService";
import ReportMap from "../components/ReportMap"; 

const ReportDetailPage: React.FC = () => {
  const { userId, reportId } = useParams<{ userId: string; reportId: string }>();
  const [report, setReport] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const authLoggedIn = authService.loggedIn();

  // Fetch the specific report from the backend
  const fetchReport = async () => {
    try {
      const token = authService.getToken();
      const response = await axios.get(`/api/reportAuthority/${userId}/reports/${reportId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setReport(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching report:", error);
      setError("Failed to fetch report");
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
                  
                  {}
                  {report.weather && (
                    <div className="my-4">
                      <h2 className="text-lg font-bold">Weather Information</h2>
                      <p>Condition: {report.weather.condition}</p>
                      <p>Temperature: {(report.weather.temperature - 273.15).toFixed(2)} °C</p>
                      <p>Humidity: {report.weather.humidity} %</p>
                      <p>Wind Speed: {report.weather.wind} m/s</p>
                    </div>
                  )}
                  
                  {/* Pass lat and lon to the ReportMap */}
                  <ReportMap lat={report.lat} lon={report.lon} title={report.title} description={report.description} />
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
