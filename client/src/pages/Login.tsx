import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from '../services/authService'; // Import the auth service
import facebookIcon from "../assets/facebook.png";
import googleIcon from "../assets/google.png";
import backgroundImage from "../assets/login_image.jpeg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalMessage === "Login successful!") {
      const userProfile = authService.getProfile(); // Get the user profile from authService
      if (userProfile) {
        navigate(`/dashboard/${userProfile.id}`); // Navigate to the user's dashboard using their ID
      }
    }
  };

  // Validation and form submission
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate if all fields are filled
    if (!email || !password) {
      setModalMessage("All fields are required!");
      setShowModal(true);
      return;
    }

    // Proceed with login if all validations pass
    try {
      const result = await authService.login(email, password); // Call the login method from authService

      if (result) {
        setModalMessage("Login successful!");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setModalMessage("An error occurred during login.");
      setShowModal(true);
    }
  };
<<<<<<< HEAD
=======

>>>>>>> release/v2.0

  return (
    <div className="flex items-center justify-center min-h-screen bg-eggShell">
      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-purpleLight hover:text-darkViolet transition duration-300 flex items-center space-x-1 md:top-10 md:left-10"
      >
        <span>&larr;</span>
        <span>Back to Home</span>
      </Link>

      {/* Card Container */}
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 max-w-md md:max-w-4xl">
        {/* Left Side */}
        <div className="p-6 md:p-20 flex-grow">
          <h2 className="font-mono mb-5 text-4xl font-bold">Login</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account to report issues and engage with your community.
          </p>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="w-full p-4 mb-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="w-full p-4 mb-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full md:w-auto flex justify-center items-center p-4 font-sans font-bold text-white rounded-md shadow-lg bg-purpleLight hover:bg-opacity-90 hover:shadow-lg transition duration-300"
            >
              <span>Log In</span>
            </button>
          </form>

          {/* Social Logins */}
          <p className="py-4 text-sm font-thin text-center text-gray-400">
            or log in with
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center">
<<<<<<< HEAD
=======

>>>>>>> release/v2.0
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded-md shadow-sm hover:bg-opacity-30 hover:shadow-lg transition duration-150 md:w-1/3">
              <img src={facebookIcon} alt="Facebook" className="w-6" />
              <span className="font-thin">Facebook</span>
            </button>
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded-md shadow-sm hover:bg-opacity-30 hover:shadow-lg transition duration-150 md:w-1/3">
              <img src={googleIcon} alt="Google" className="w-6" />
              <span className="font-thin">Google</span>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="hidden md:block w-[430px] rounded-r-2xl"
        />
      </div>

      {/* Modal for status messages */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Login Status</h3>
            <p>{modalMessage}</p>
            <button
              className="mt-4 text-purpleLight"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
