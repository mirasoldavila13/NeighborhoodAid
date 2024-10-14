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
  const [filter, setFilter] = useState<string>("All");

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
    if (filter === "All") return true;
    return report.status.toLowerCase() === filter.toLowerCase();
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
              <h1 className="text-4xl font-bold mb-6 text-gray-800">
                Reported Issues
              </h1>

              {/* Filter Dropdown */}
              <div className="mb-4">
                <label htmlFor="filter" className="mr-2 text-lg">
                  Filter by Status:
                </label>
                <select
                  id="filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border p-2 rounded bg-white shadow-md"
                >
                  <option value="All">All</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Reported">Reported</option>
                </select>
              </div>

              {/* Reports Feed */}
              <div className="mt-12">
                {error && <p className="text-red-500">{error}</p>}
                <div className="grid grid-cols-1 gap-4">
                  {filteredReports.length > 0 ? (
                    filteredReports.map((report) => (
                      <div
                        key={report.id}
                        className="p-4 border rounded-lg shadow bg-white hover:shadow-xl transition-shadow duration-300"
                      >
                        {/* Flex container to align circle and title */}
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
                        {/* Rest of the content */}
                        <p className="text-gray-700 mt-2">{report.description}</p>
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
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ReportedIssuesPage;
