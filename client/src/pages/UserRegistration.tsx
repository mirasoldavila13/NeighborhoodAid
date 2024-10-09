import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from '../services/authService';

const UserRegistration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalMessage === "User registered successfully!") {
<<<<<<< HEAD
      navigate("/dashboard");
    }
  };

  // Validation and form submission
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate if all fields are filled
=======
      const userProfile = authService.getProfile();
      if (userProfile) {
        navigate(`/dashboard/${userProfile.id}`);
      }
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

>>>>>>> f9c102c923a6d9522029760f6c9165e81c7b7598
    if (!name || !email || !password || !confirmPassword) {
      setModalMessage("All fields are required!");
      setShowModal(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setModalMessage("Please enter a valid email address.");
      setShowModal(true);
      return;
    }

    if (password.length < 6) {
      setModalMessage("Password must be at least 6 characters long.");
      setShowModal(true);
      return;
    }

    if (password !== confirmPassword) {
      setModalMessage("Passwords do not match.");
      setShowModal(true);
      return;
    }

    try {
      const result = await authService.register({ name, email, password });

      if (result.token) {
        localStorage.setItem("jwtToken", result.token);
        setModalMessage("User registered successfully!");
        setShowModal(true);
      } else {
        setModalMessage(result.message || "An error occurred during registration.");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setModalMessage("An error occurred during registration.");
      setShowModal(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-eggShell">
      <Link to="/" className="absolute top-6 left-6 text-purpleLight hover:text-darkViolet transition duration-300 flex items-center space-x-1 md:top-10 md:left-10">
        <span>&larr;</span>
        <span>Back to Home</span>
      </Link>

      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 max-w-md md:max-w-4xl">
        <div className="p-6 md:p-20 flex-grow">
          <h2 className="font-mono mb-5 text-4xl font-bold">Sign Up</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Create an account to start reporting issues, track progress, and engage with your community.
          </p>

          <form onSubmit={handleSignup}>
            <input type="text" className="w-full p-4 mb-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" className="w-full p-4 mb-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="w-full p-4 mb-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" className="w-full p-4 mb-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <button type="submit" className="w-full md:w-auto flex justify-center items-center p-4 font-sans font-bold text-white rounded-md shadow-lg bg-purpleLight hover:bg-opacity-90 hover:shadow-lg transition duration-300">
              <span>Sign Up</span>
            </button>
          </form>

          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Registration Status</h3>
                <p>{modalMessage}</p>
                <button className="mt-4 text-purpleLight" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
