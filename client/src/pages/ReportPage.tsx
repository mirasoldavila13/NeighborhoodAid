import { useState } from "react";
import axios from "axios";
import { useParams, Navigate } from "react-router-dom";
import authService from "../services/authService";

const ReportPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const authLoggedIn = authService.loggedIn();
  const [issueTitle, setIssueTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [hasContactedAuthorities, setHasContactedAuthorities] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueTitle || !description || !location || !contactEmail) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const token = localStorage.getItem("jwtToken");
      await axios.post("/api/report", {
        userId,
        issueTitle,
        description,
        location,
        contactEmail,
        contactPhone,
        hasContactedAuthorities,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Redirect or show success message here
    } catch (err) {
      console.error("Error reporting issue:", err);
      setError("Error reporting issue. Please try again later.");
    }
  };

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Report an Issue</h1>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Issue Title</label>
              <input
                type="text"
                value={issueTitle}
                onChange={(e) => setIssueTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Your Email</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="text"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <div>
              <label>
                Have You Contacted Local Authorities?
                <input
                  type="checkbox"
                  checked={hasContactedAuthorities}
                  onChange={() => setHasContactedAuthorities(!hasContactedAuthorities)}
                />
              </label>
            </div>
            <button type="submit">Submit Report</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ReportPage;
