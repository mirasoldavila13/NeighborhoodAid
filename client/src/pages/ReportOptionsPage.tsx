import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DashboardNav from '../components/DashboardNav';
import Footer from '../components/Footer';
import CommunityIssueForm from '../components/CommunityIssueForm'; // Import the form here

interface Report {
  id: number;
  type: string; // 'Authorities' or 'Community'
  description: string;
  createdAt: string;
  status: string; // 'Open' or 'Resolved'
  reporterEmail: string;
}

const ReportOptionsPage = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showCommunityForm, setShowCommunityForm] = useState<boolean>(false); // Add state for form visibility

  // Fetch reports from backend
  const fetchReports = async () => {
    try {
      const response = await axios.get('/api/reports');
      setReports(response.data);
    } catch (error) {
      setError('Failed to fetch reports');
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleShowCommunityForm = () => {
    setShowCommunityForm(true); // Appears under the two Report links 
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <main className="flex-grow p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Create a Report</h1>
          <div className="grid grid-cols-2 gap-6">
            {/* Authorities Card */}
            <div className="p-6 bg-white border rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Report to Authorities</h2>
              <p className="mb-4">Use this option to report issues directly to local authorities.</p>
              <Link
                to="/dashboard/report/authorities"
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Report to Authorities
              </Link>
            </div>

            {/* Community Card */}
            <div className="p-6 bg-white border rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Report to Community</h2>
              <p className="mb-4">Share issues with the local community for discussion and resolution.</p>
              <Link
                to="#"
                onClick={handleShowCommunityForm} // Same event handler as before
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Report to Community
              </Link>
            </div>
          </div>

          
          {showCommunityForm && (
            <div className="mt-6 p-6 bg-white border rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Report Community Issue</h2>
              <CommunityIssueForm /> {/* Render the CommunityIssueForm component */}
            </div>
          )}

          {/* Reports Feed */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Reported Issues</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 gap-4">
              {reports.length > 0 ? (
                reports.map((report) => (
                  <div key={report.id} className="p-4 bg-white border rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">
                      {report.type === 'Authorities' ? 'Reported to Authorities' : 'Reported to Community'}
                    </h3>
                    <p>{report.description}</p>
                    <p className="text-sm text-gray-600">Status: {report.status}</p>
                    <p className="text-sm text-gray-600">Reporter: {report.reporterEmail}</p>
                    <p className="text-sm text-gray-600">Date: {new Date(report.createdAt).toLocaleString()}</p>
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
  );
};

export default ReportOptionsPage;


