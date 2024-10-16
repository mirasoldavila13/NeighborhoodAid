import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, Navigate } from "react-router-dom";
import DashboardNav from "../components/DashboardNav"; 
import Footer from "../components/Footer";
import authService from "../services/authService";

interface Report {
  id: string;
  originalId: number;
  title: string;
  description: string;
  lat: number;
  lon: number;
  email: string;
  phone?: string;
  contacted: boolean;
  createdAt: string;
  status: string;
  weather?: {
    condition?: string;
    temperature?: number;
    humidity?: number;
    wind?: number;
  };
  type: string;
}

const ReportedIssuesPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const authLoggedIn = authService.loggedIn();
  const [reports, setReports] = useState<Report[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");

  const fetchReports = async () => {
    try {
      const token = authService.getToken();

      const authorityResponse = await axios.get(
        `/api/reportAuthority/${userId}/reports`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const communityResponse = await axios.get(
        `/api/community-issues/${userId}/reports`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const combinedReports = [
        ...authorityResponse.data.map((report: Report) => ({
          ...report,
          id: `authority-${report.id}`,
          originalId: report.id,
          type: "Authority",
        })),
        ...communityResponse.data.map((report: Report) => ({
          ...report,
          id: `community-${report.id}`,
          originalId: report.id,
          type: "Community",
        })),
      ];

      if (combinedReports.length > 0) {
        setReports(combinedReports);
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

  const filteredReports = reports.filter((report) => {
    const statusMatch =
      statusFilter === "All" || report.status.toLowerCase() === statusFilter.toLowerCase();
    const typeMatch = typeFilter === "All" || report.type.toLowerCase() === typeFilter.toLowerCase();
    return statusMatch && typeMatch;
  });

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen bg-white">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
                Reported Issues
              </h1>

              {/* Main Flex Container */}
              <div className="flex flex-col md:flex-row">
                {/* Left Sidebar */}
                <div className="w-full md:w-1/4 md:pr-4 mb-6 md:mb-0">
                  {/* Filter Section */}
                  <div className="bg-white p-4 rounded-lg shadow-md transition-shadow duration-500 hover:shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Filters</h2>
                    <label htmlFor="statusFilter" className="block mb-2 text-lg">
                      Filter by Status:
                    </label>
                    <select
                      id="statusFilter"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="border p-2 rounded bg-white shadow-md w-full">
                      <option value="All">All</option>
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Reported">Reported</option>
                    </select>
                    <label htmlFor="typeFilter" className="block mb-2 mt-4 text-lg">
                      Filter by Type:
                    </label>
                    <select
                      id="typeFilter"
                      value={typeFilter}
                      onChange={(e) => setTypeFilter(e.target.value)}
                      className="border p-2 rounded bg-white shadow-md w-full">
                      <option value="All">All</option>
                      <option value="Authority">Authority Reports</option>
                      <option value="Community">Community Reports</option>
                    </select>
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="w-full md:w-3/4">
                  {error && <p className="text-red-500">{error}</p>}
                  <div className="grid grid-cols-1 gap-4">
                    {filteredReports.length > 0 ? (
                      filteredReports.map((report) => (
                        <div
                          key={report.id}
                          className="p-4 border rounded-lg shadow bg-white hover:shadow-xl transition-shadow duration-300"
                        >
                          {/* Flex container to align circle and title */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {/* Smaller Colored Circle for Report Type */}
                              <span
                                className={`inline-block w-2 h-2 rounded-full mr-2 ${
                                  report.type === "Community"
                                    ? "bg-green-500"
                                    : "bg-blue-500"
                                }`}
                              />
                              <Link
                                to={`/dashboard/${userId}/report/${report.originalId}`}
                                className="text-xl font-semibold text-gray-900"
                              >
                                {report.title}
                              </Link>
                            </div>
                            <div className="flex space-x-2">
                              <Link
                                to={`/dashboard/${userId}/report/${report.originalId}`}
                                className="text-sm text-blue-500 hover:underline"
                              >
                                View
                              </Link>
                            </div>
                          </div>
                          <p className="text-gray-700 mt-2">
                            {report.description}
                          </p>
                          <p className="text-sm text-gray-600">
                            {report.type === "Community"
                              ? "Community Status:"
                              : "Authority Status:"}{" "}
                            {report.status}
                          </p>
                          <p className="text-sm text-gray-600">
                            Reporter: {report.email}
                          </p>
                          <p className="text-sm text-gray-600">
                            Date: {new Date(report.createdAt).toLocaleString()}
                          </p>
                          {report.weather && report.weather.condition && (
                            <p className="text-sm text-gray-600">
                              Weather Condition: {report.weather.condition}
                            </p>
                          )}
                        </div>
                      ))
                    ) : (
                      <p>No reports available yet.</p>
                    )}
                  </div>
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