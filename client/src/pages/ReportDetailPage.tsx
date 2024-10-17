import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import authService from "../services/authService";
import ReportMap from "../components/ReportMap";
import Modal from 'react-modal';
import { LatLng } from 'leaflet'; 

// Set the app element for the modal to help with accessibility
Modal.setAppElement('#root');

const ReportDetailPage: React.FC = () => {
  const { userId, reportId } = useParams<{ userId: string; reportId: string }>();
  const [report, setReport] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmDeleteIsOpen, setConfirmDeleteIsOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [markerPosition, setMarkerPosition] = useState<LatLng | null>(null); // State to handle marker position in edit mode
  const authLoggedIn = authService.loggedIn();
  const navigate = useNavigate();
  const [reportType, setReportType] = useState<string | null>(null); // To keep track of report type

  // Fetch the specific report from the backend
  const fetchReport = async () => {
    try {
      const token = authService.getToken();
      
      // First try to fetch from authority reports
      const authorityResponse = await axios.get(`/api/reportAuthority/${userId}/reports/${reportId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (authorityResponse.data) {
        setReport({ ...authorityResponse.data, type: "Authority" });
        setReportType("Authority");
        setUpdatedTitle(authorityResponse.data.title);
        setUpdatedDescription(authorityResponse.data.description);
        setMarkerPosition(new LatLng(authorityResponse.data.lat, authorityResponse.data.lon)); // Set initial marker position
        setError(null);
        await fetchCurrentWeather(authorityResponse.data.lat, authorityResponse.data.lon);
      }
    } catch (error) {
      console.error("Error fetching authority report:", error);
      setError("Failed to fetch authority report, checking community reports...");
      
      // If the authority report fetch fails, try fetching from community reports
      try {
        const token = authService.getToken();
        const communityResponse = await axios.get(`/api/community-issues/${reportId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (communityResponse.data) {
          setReport({ ...communityResponse.data, type: "Community" });
          setReportType("Community");
          setUpdatedTitle(communityResponse.data.title);
          setUpdatedDescription(communityResponse.data.description);
          setMarkerPosition(new LatLng(communityResponse.data.location.lat, communityResponse.data.location.lon)); // Set initial marker position
          setError(null);
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
      if (reportType === "Authority") {
        await axios.delete(`/api/reportAuthority/reports/${reportId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else if (reportType === "Community") {
        await axios.delete(`/api/community-issues/reports/${reportId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      navigate(`/dashboard/${userId}/reported-issues`);
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };

  // Function to handle updating the report
  const handleUpdateReport = async () => {
    const token = authService.getToken();
    try {
      const updatedReport = {
        ...report,
        title: updatedTitle,
        description: updatedDescription,
        lat: markerPosition?.lat || report.lat, // Use new latitude
        lon: markerPosition?.lng || report.lon, // Use new longitude
      };
      if (reportType === "Authority") {
        await axios.put(`/api/reportAuthority/reports/${reportId}`, updatedReport, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else if (reportType === "Community") {
        await axios.put(`/api/community-issues/${reportId}`, updatedReport, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setReport(updatedReport); // Update local state with the new report
      setModalIsOpen(false);
    } catch (error) {
      console.error("Error updating report:", error);
    }
  };

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6 mt-16 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {error && <p className="text-red-500">{error}</p>}
              {report ? (
                <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                  <h1 className="text-3xl font-bold mb-4 text-center">{report.title}</h1>
                  <p className="text-lg mb-2 text-center">{report.description}</p>
                  <p className="text-sm text-gray-600 text-center">Status: {report.status || "Open"}</p>
                  <p className="text-sm text-gray-600 text-center">Reporter: {report.email}</p>
                  <p className="text-sm text-gray-600 text-center">City: {report.city}</p>
                  <p className="text-sm text-gray-600 text-center">Date: {new Date(report.createdAt).toLocaleString()}</p>

                  <h2 className="text-xl font-semibold mt-4 mb-2 text-center">Weather Details:</h2>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">City: {weather?.name}</p>
                    <p className="text-sm text-gray-600">Temperature: {weather?.main?.temp}°F</p>
                    <p className="text-sm text-gray-600">Condition: {weather?.weather[0]?.description}</p>
                    <p className="text-sm text-gray-600">Wind: {weather?.wind?.speed} mph</p>
                    <p className="text-sm text-gray-600">Humidity: {weather?.main?.humidity}%</p>
                  </div>

                  <div className="mt-4">
                    <ReportMap
                      lat={report.lat}
                      lon={report.lon}
                      title={report.title}
                      description={report.description}
                      draggable={false} 
                    />
                  </div>

                  {/* Display Updated Latitude and Longitude */}
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">Latitude: {report.lat}</p>
                    <p className="text-sm text-gray-600">Longitude: {report.lon}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap justify-center space-x-4">
                    <Link to={`/dashboard/${userId}/reported-issues`} className="mb-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Back to Reported Issues
                    </Link>
                    <button
                      onClick={() => {
                        setUpdatedTitle(report.title);
                        setUpdatedDescription(report.description);
                        setMarkerPosition(new LatLng(report.lat, report.lon)); // Set initial marker position
                        setModalIsOpen(true);
                      }}
                      className="mb-2 inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit Report
                    </button>
                    <button
                      onClick={() => {
                        setConfirmDeleteIsOpen(true);
                      }}
                      className="mb-2 inline-block bg-rose-700 text-white px-4 py-2 rounded hover:bg-rose-900"
                    >
                      Delete Report
                    </button>
                  </div>

                  {/* Edit Modal */}
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    contentLabel="Edit Report"
                    className="modal bg-gray-50 border border-gray-300 rounded-lg shadow-2xl p-6 max-w-md mx-auto mt-20"
                    overlayClassName="fixed inset-0 z-40 bg-black bg-opacity-50"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-center">Edit Report</h2>
                    <label className="block mb-2">
                      Title:
                      <input
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                      />
                    </label>
                    <label className="block mb-2">
                      Description:
                      <textarea
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                      />
                    </label>
                    {/* Map in Modal */}
                    <div className="mt-4">
                      <ReportMap
                        lat={markerPosition?.lat || report.lat} // Use the markerPosition lat or the report's lat
                        lon={markerPosition?.lng || report.lon} // Use the markerPosition lng or the report's lon
                        title={updatedTitle}
                        description={updatedDescription}
                        draggable={true} // Marker is draggable in edit modal
                        onMarkerPositionChange={setMarkerPosition} // Update marker position
                      />
                    </div>
                    <div className="flex justify-end space-x-4 mt-4">
                      <button
                        onClick={handleUpdateReport}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setModalIsOpen(false)}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  </Modal>

                  {/* Delete Confirmation Modal */}
                  <Modal
                    isOpen={confirmDeleteIsOpen}
                    onRequestClose={() => setConfirmDeleteIsOpen(false)}
                    contentLabel="Confirm Delete"
                    className="modal bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-20"
                    overlayClassName="fixed inset-0 z-40 bg-black bg-opacity-50"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-center">Confirm Delete</h2>
                    <p className="mb-4 text-center">Are you sure you want to delete this report?</p>
                    <div className="flex justify-end space-x-4">
                      <button
                        onClick={() => {
                          handleDeleteReport();
                          setConfirmDeleteIsOpen(false); // Close modal after deletion
                        }}
                        className="bg-rose-700 text-white px-4 py-2 rounded hover:bg-rose-900"
                      >
                        Yes, Delete
                      </button>
                      <button
                        onClick={() => setConfirmDeleteIsOpen(false)}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  </Modal>
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
