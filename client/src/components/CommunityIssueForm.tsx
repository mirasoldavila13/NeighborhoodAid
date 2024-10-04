import React, { useState } from 'react';
import LocationSelector from './LocationSelector'; // Import the LocationSelector

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

const CommunityIssueForm: React.FC = () => {
  const [issueData, setIssueData] = useState<IssueData>({
    title: '',
    description: '',
    picture: null,
    location: { lat: 0, lon: 0 }, // Default location
    contacted: false,
    username: '',
    phone: '',
    email: '',
    status: 'reported',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
    const file = e.target.files?.[0];
    if (file) {
      setIssueData((prevData) => ({ ...prevData, picture: file }));
    }
  };

  const handleLocationSelect = (lat: number, lon: number) => {
    setIssueData((prevData) => ({ ...prevData, location: { lat, lon } }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      } else {
        setErrorMessage('Failed to report the issue. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during submission.');
    }

    setIsSubmitting(false);
  };

  return (
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

      <div className="mb-4">
        <label htmlFor="location" className="block text-xl font-semibold text-gray-700">
          Select Location on Map:
        </label>
        <LocationSelector onLocationSelect={handleLocationSelect} />
      </div>

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

      {errorMessage && <p className="mt-4 text-red-500 text-lg">{errorMessage}</p>}
      {successMessage && <p className="mt-4 text-green-500 text-lg">{successMessage}</p>}
    </form>
  );
};

export default CommunityIssueForm;


