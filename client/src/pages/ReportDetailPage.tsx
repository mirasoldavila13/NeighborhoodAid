import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import authService from "../services/authService";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";

const ReportDetailPage: React.FC = () => {
  const { reportId } = useParams<{ reportId: string }>();
  const [report, setReport] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch the report details by ID
  const fetchReport = async () => {
    const token = authService.getToken(); // Get the JWT token

    try {
      const response = await axios.get(`/api/reportAuthority/report/${reportId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReport(response.data);
    } catch (error) {
      console.error("Error fetching report:", error);
      setError("Failed to fetch report");
    }
  };

  useEffect(() => {
    fetchReport();
  }, [reportId]);

  const handleDelete = async () => {
    const token = authService.getToken(); // Get the JWT token

    try {
      await axios.delete(`/api/reportAuthority/report/${reportId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/dashboard"); // Navigate back to the dashboard after deletion
    } catch (error) {
      console.error("Error deleting report:", error);
      setError("Failed to delete report");
    }
  };

  // Check if the user is logged in
  if (!authService.loggedIn()) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <main className="flex-grow p-6">
        <div className="container mx-auto">
          {error && <p className="text-red-500">{error}</p>}
          {report ? (
            <div className="p-4 border rounded shadow">
              <h2 className="text-2xl font-semibold mb-2">{report.title}</h2>
              <p>{report.description}</p>
              <p>Status: {report.status}</p>
              <p>Reporter: {report.email}</p>
              <p>City: {report.city}</p>
              <p>Date: {new Date(report.createdAt).toLocaleString()}</p>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              >
                Delete Report
              </button>
              {/* Add an Edit button that navigates to the Edit Report page if needed */}
            </div>
          ) : (
            <p>Loading report...</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportDetailPage;
