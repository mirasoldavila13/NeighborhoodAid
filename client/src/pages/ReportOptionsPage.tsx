import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, Navigate } from "react-router-dom"; // Combine imports for better readability
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import authService from "../services/authService";

interface Report {
  id: number;
  title: string;
  description: string;
  lat: number;
  lon: number;
  email: string;
  phone: string;
  contacted: boolean;
  createdAt: string;
  status: string; // 'Open' or 'Resolved'
  city: string;
}

const ReportOptionsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // Get userId from URL parameters
  const authLoggedIn = authService.loggedIn();
  const [reports, setReports] = useState<Report[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch reports from the backend
  const fetchReports = async () => {
    try {
      console.log("Fetching reports for user ID:", userId); // Log the user ID
      const token = authService.getToken(); // Get the JWT token

      const response = await axios.get(`/api/reportAuthority/${userId}/reports`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the request header
        },
      });

      console.log("Reports fetched:", response.data); // Log the response data

      // Check if reports were returned
      if (response.data && response.data.length > 0) {
        setReports(response.data);
        setError(null); // Clear any previous error
      } else {
        setReports([]); // Set reports to an empty array if no reports are found
        setError("No reports available yet."); // Provide a message for clarity
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
      setError("Failed to fetch reports"); // Display this message only if an error occurs
    }
  };

  useEffect(() => {
    fetchReports();
  }, [userId]); // Depend on userId to refetch if it changes

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto">
              <h1 className="text-3xl font-bold mb-6">Create a Report</h1>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 border rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Report to Authorities</h2>
                  <p className="mb-4">
                    Use this option to report issues directly to local authorities.
                  </p>
                  <Link
                    to={`/dashboard/${userId}/report/authorities`}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Report to Authorities
                  </Link>
                </div>
                <div className="p-4 border rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Report to Community</h2>
                  <p className="mb-4">
                    Share issues with the local community for discussion and resolution.
                  </p>
                  <Link
                    to={`/dashboard/${userId}/report/community`}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Report to Community
                  </Link>
                </div>
              </div>

              {/* Reports Feed */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Reported Issues</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="grid grid-cols-1 gap-4">
                  {reports.length > 0 ? (
                    reports.map((report) => (
                      <div key={report.id} className="p-4 border rounded shadow">
                        <Link to={`/dashboard/${userId}/report/${report.id}`} className="text-xl font-semibold mb-2">
                          {report.title}
                        </Link>
                        <p>{report.description}</p>
                        <p className="text-sm text-gray-600">Status: {report.status}</p>
                        <p className="text-sm text-gray-600">Reporter: {report.email}</p>
                        <p className="text-sm text-gray-600">City: {report.city}</p>
                        <p className="text-sm text-gray-600">
                          Date: {new Date(report.createdAt).toLocaleString()}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No reports available yet.</p>
                  )}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ReportOptionsPage;
