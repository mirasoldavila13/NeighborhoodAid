import React, { useState } from 'react';
import MapWithAddress from '../components/MapWithAddress';
import DashboardNav from '../components/DashboardNav'; // Importing DashboardNav
import Footer from '../components/Footer'; // Importing Footer
import Modal from '../components/Modal'; // Import Modal for feedback
import axios from 'axios';

interface IssueData {
  title: string;
  description: string;
  picture: File | null;
  location: { lat: number; lon: number };
  contacted: boolean;
  username?: string;
  phone?: string;
  email?: string;
  status: 'reported' | 'in progress' | 'resolved';
}

const CommunityReport: React.FC = () => {
  const [issueData, setIssueData] = useState<IssueData>({
    title: '',
    description: '',
    picture: null,
    location: { lat: 0, lon: 0 },
    contacted: false,
    username: '',
    phone: '',
    email: '',
    status: 'reported',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  const [locationDetails, setLocationDetails] = useState<{ fullAddress: string; city: string } | null>(null);
  

  

  // Handle location and address details when user selects a location on the map
  const handleLocationSelected = (lat: number, lon: number, addressDetails: { city: string; fullAddress: string }) => {
    setIssueData((prevData) => ({ ...prevData, location: { lat, lon } }));
    setLocationDetails(addressDetails);
   
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setIssueData((prevData) => ({ ...prevData, [name]: target.checked }));
    } else {
      setIssueData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setIssueData((prevData) => ({ ...prevData, picture: file }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('title', issueData.title);
    formData.append('description', issueData.description);
    formData.append('location', JSON.stringify(issueData.location));
    formData.append('contacted', issueData.contacted.toString());
    formData.append('username', issueData.username || '');
    formData.append('phone', issueData.phone || '');
    formData.append('email', issueData.email || '');
    formData.append('status', issueData.status);

    if (issueData.picture) {
      formData.append('picture', issueData.picture);
    }

    try {
      const response = await fetch('/api/community-issues', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage('Issue reported successfully!');
        setErrorMessage(null);

        // Reload the form after 5 seconds of showing success message
        setTimeout(() => {
          window.location.reload();  // Reload the page after successful form submission
        }, 5000);
      } else {
        setErrorMessage('Failed to report the issue. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during submission.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />

      <main className="flex-grow p-6">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Report a Community Issue</h1>
          <form onSubmit={handleSubmit} className="mt-6 p-6 bg-white border rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="title" className="block text-xl font-semibold text-gray-700">
                Issue Title:
              </label>
              <input
                id="title"
                name="title"
                value={issueData.title}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full text-lg rounded-md border border-gray-300"
                placeholder="Enter issue title"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-xl font-semibold text-gray-700">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={issueData.description}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full text-lg rounded-md border border-gray-300"
                placeholder="Describe the issue"
              />
            </div>

            {/* Reusable MapWithAddress Component */}
            <MapWithAddress onLocationChange={handleLocationSelected} />

            {/* Display Location Details */}
            {locationDetails && (
              <div className="mb-4">
                <h3 className="font-bold text-lg">Location Details</h3>
                <p>City: {locationDetails.city}</p>
                <p>Address: {locationDetails.fullAddress}</p>
              </div>
            )}

 

            <div className="mb-4">
              <label htmlFor="status" className="block text-xl font-semibold text-gray-700">
                Status:
              </label>
              <select
                id="status"
                name="status"
                value={issueData.status}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full text-lg rounded-md border border-gray-300"
              >
                <option value="reported">Reported</option>
                <option value="in progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="picture" className="block text-xl font-semibold text-gray-700">
                Picture:
              </label>
              <input
                id="picture"
                name="picture"
                type="file"
                onChange={handleFileChange}
                className="mt-1 p-3 block w-full text-lg rounded-md border border-gray-300"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>

          <Modal
            isOpen={!!successMessage || !!errorMessage}
            onClose={() => {
              setSuccessMessage(null);
              setErrorMessage(null);
            }}
            message={successMessage || errorMessage || ''}
            type={successMessage ? 'success' : 'error'}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityReport;
