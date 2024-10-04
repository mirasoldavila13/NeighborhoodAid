import React, { useState } from "react";

interface IssueData {
  title: string;
  description: string;
  picture: File | null;
  location: string;
  contacted: boolean;
  username: string;
  phone: string;
  email: string;
  status: "reported" | "in progress" | "resolved";
}

const IssueForm: React.FC = () => {
  const [issueData, setIssueData] = useState<IssueData>({
    title: "",
    description: "",
    picture: null,
    location: "",
    contacted: false,
    username: "",
    phone: "",
    email: "",
    status: "reported",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", issueData.title);
    formData.append("description", issueData.description);
    formData.append("location", issueData.location);
    formData.append("contacted", issueData.contacted.toString());
    formData.append("username", issueData.username);
    formData.append("phone", issueData.phone);
    formData.append("email", issueData.email);
    formData.append("status", issueData.status);

    //Picture Submission
    if (issueData.picture) {
      formData.append("picture", issueData.picture); // File upload
    }

    try {
      const response = await fetch("/api/issues", {
        method: "POST",
        body: formData, // Using FormData to handle file uploads
      });

      if (response.ok) {
        setSuccessMessage("Issue reported successfully!");
        setErrorMessage(null);
      } else {
        setErrorMessage("Failed to report the issue. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during submission.");
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title:
        </label>
        <input
          id="title"
          name="title"
          value={issueData.title}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={issueData.description}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location:
        </label>
        <input
          id="location"
          name="location"
          value={issueData.location}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="picture"
          className="block text-sm font-medium text-gray-700"
        >
          Picture:
        </label>
        <input
          id="picture"
          name="picture"
          type="file"
          onChange={handleFileChange}
          className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="contacted"
          className="block text-sm font-medium text-gray-700"
        >
          Contacted Authorities:
        </label>
        <input
          id="contacted"
          name="contacted"
          type="checkbox"
          checked={issueData.contacted}
          onChange={() =>
            setIssueData((prevData) => ({
              ...prevData,
              contacted: !prevData.contacted,
            }))
          }
          className="mt-1 focus:ring-purpleLight focus:border-purpleStrong"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username:
        </label>
        <input
          id="username"
          name="username"
          value={issueData.username}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone:
        </label>
        <input
          id="phone"
          name="phone"
          value={issueData.phone}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email:
        </label>
        <input
          id="email"
          name="email"
          value={issueData.email}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 bg-purpleStrong text-white rounded-md shadow-md hover:bg-purpleLight transition duration-300"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      {successMessage && (
        <p className="mt-4 text-green-500">{successMessage}</p>
      )}
    </form>
  );
};

export default IssueForm;
