import React, { useState } from 'react';
import MapWithAddress from '../components/MapWithAddress';
import DashboardNav from '../components/DashboardNav';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import authService from '../services/authService';
import { Navigate, useNavigate } from 'react-router-dom';

const CommunityReport: React.FC = () => {
  const authLoggedIn = authService.loggedIn();
  const navigate = useNavigate();

  const [issueData, setIssueData] = useState({
    title: '',
    description: '',
    location: { lat: 0, lon: 0 },
    phone: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [locationDetails, setLocationDetails] = useState<{ fullAddress: string; city: string } | null>(null);

  const handleLocationSelected = (lat: number, lon: number, addressDetails: { city: string; fullAddress: string }) => {
    setIssueData((prevData) => ({ ...prevData, location: { lat, lon } }));
    setLocationDetails(addressDetails);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setIssueData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userProfile = authService.getProfile(); // Get the user profile

    try {
      const response = await fetch('/api/community-issues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authService.getToken()}`,
        },
        body: JSON.stringify({
          ...issueData,
          userId: userProfile?.id, // Ensure userProfile is not null
          cityName: locationDetails?.city,
          fullAddress: locationDetails?.fullAddress,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Issue reported successfully!');
        setErrorMessage(null);
        navigate(`/dashboard/${userProfile?.id}/reported-issues`); // Navigate to reported issues
      } else {
        setErrorMessage('Failed to report the issue. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto p-6 border rounded-lg shadow-lg bg-white">
              <h1 className="text-3xl font-bold mb-6 text-center">Report a Community Issue</h1>
              <Modal
                isOpen={!!errorMessage || !!successMessage}
                onClose={() => {
                  setSuccessMessage(null);
                  setErrorMessage(null);
                }}
                message={successMessage || errorMessage || ''}
                type={successMessage ? 'success' : 'error'}
              />
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-xl font-semibold text-gray-700">Issue Title:</label>
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
                  <label htmlFor="description" className="block text-xl font-semibold text-gray-700">Description:</label>
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

                <MapWithAddress onLocationChange={handleLocationSelected} />

                {locationDetails && (
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">Location Details</h3>
                    <p>City: {locationDetails.city}</p>
                    <p>Address: {locationDetails.fullAddress}</p>
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-lg font-semibold text-gray-700">Your Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={issueData.email}
                    onChange={handleChange}
                    className="mt-1 p-3 block w-full text-lg rounded-md border border-gray-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg font-semibold text-gray-700">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={issueData.phone}
                    onChange={handleChange}
                    className="mt-1 p-3 block w-full text-lg rounded-md border border-gray-300"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`p-2 bg-blue-500 text-white rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Report"}
                </button>
              </form>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default CommunityReport;
