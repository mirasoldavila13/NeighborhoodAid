import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebookIcon from "../assets/facebook.png";
import googleIcon from "../assets/google.png";
import backgroundImage from "../assets/login_image.jpeg";
import authService from "../services/authService"; // Ensure authService is imported

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // To manage button state during submission

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalMessage === "Login successful!") {
      const userProfile = authService.getProfile(); // Fetch user profile
      if (userProfile) {
        navigate(`/dashboard/${userProfile.id}`); // Navigate to the dashboard with user ID
      } else {
        navigate("/dashboard"); // Fallback if userProfile is not available
      }
    }
  };
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button when submission starts
  
    try {
      await authService.login(email, password); // Use authService to login
      // The token is now handled in authService, so no need to capture it here
  
      // Show success message in modal
      setModalMessage("Login successful!");
      setShowModal(true);
    } catch (error: any) { 
      setModalMessage(error.message || "An error occurred during login.");
      setShowModal(true);
    } finally {
      setIsSubmitting(false); // Re-enable button after the process is done
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f5f0]">
      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-8 left-8 text-purpleLight hover:text-darkViolet transition duration-300 flex items-center space-x-1"
      >
        <span>&larr;</span>
        <span>Back to Home</span>
      </Link>

      {/* Card Container */}
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        <div className="p-6 md:p-20">
          <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account to report local issues, track progress, and engage with your community.
          </p>

          {/* Form */}
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <input
              type="email"
              className="w-full p-6 mb-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password Input */}
            <input
              type="password"
              className="w-full p-6 mb-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Login Button */}
            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
              <button
                type="submit"
                className={`w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-purpleStrong hover:bg-purpleLighter hover:bg-opacity-90 hover:shadow-lg transition duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting} // Disable the button when submitting
              >
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          </form>

          {/* Social Logins */}
          <p className="py-6 text-sm font-thin text-center text-gray-400">
            or log in with
          </p>
          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg transition duration-150 md:w-1/2">
              <img src={facebookIcon} alt="Facebook" className="w-9" />
              <span className="font-thin">Facebook</span>
            </button>
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg transition duration-150 md:w-1/2">
              <img src={googleIcon} alt="Google" className="w-9" />
              <span className="font-thin">Google</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <img
          src={backgroundImage}
          alt="Background"
          className="w-[430px] hidden md:block"
        />
      </div>

      {/* Modal for status messages */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Login Status</h3>
            <p>{modalMessage}</p>
            <button className="mt-4 text-purpleLight" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
