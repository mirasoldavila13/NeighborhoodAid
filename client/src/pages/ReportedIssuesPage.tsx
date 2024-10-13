import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, Navigate } from "react-router-dom";
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
  status: string; // 'Open', 'In Progress', or 'Resolved'
  city: string;
}

const ReportedIssuesPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const authLoggedIn = authService.loggedIn();
  const [reports, setReports] = useState<Report[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");

  // Fetch reports from the backend
  const fetchReports = async () => {
    try {
      const token = authService.getToken();
      const response = await axios.get(`/api/reportAuthority/${userId}/reports`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if reports were returned
      if (response.data && response.data.length > 0) {
        setReports(response.data);
        setError(null);
      } else {
        setReports([]);
        setError("No reports available yet.");
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
      setError("Failed to fetch reports");
    }
  };

  useEffect(() => {
    fetchReports();
  }, [userId]);

  // Filter reports based on the selected status
  const filteredReports = reports.filter(report => {
    if (filter === "All") return true;
    return report.status === filter;
  });

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto">
              <h1 className="text-3xl font-bold mb-6">Reported Issues</h1>

              {/* Filter Dropdown */}
              <div className="mb-4">
                <label htmlFor="filter" className="mr-2">Filter by Status:</label>
                <select
                  id="filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border p-2 rounded"
                >
                  <option value="All">All</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>

              {/* Reports Feed */}
              <div className="mt-12">
                {error && <p className="text-red-500">{error}</p>}
                <div className="grid grid-cols-1 gap-4">
                  {filteredReports.length > 0 ? (
                    filteredReports.map((report) => (
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

export default ReportedIssuesPage;
