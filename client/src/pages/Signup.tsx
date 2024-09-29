import { Link } from "react-router-dom";
import facebookIcon from "../assets/facebook.png";
import googleIcon from "../assets/google.png";
import backgroundImage from "../assets/login_image.jpeg";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-eggShell">
      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-purpleLight hover:text-darkViolet transition duration-300 flex items-center space-x-1"
      >
        <span>&larr;</span>
        <span>Back to Home</span>
      </Link>

      {/* Card Container */}
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* Left Side */}
        <div className="p-6 md:p-20">
          <h2 className="font-mono mb-5 text-4xl font-bold">Sign Up</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Create an account to start reporting issues, track progress, and
            engage with your community.
          </p>

          {/* Email Input */}
          <input
            type="email"
            className="w-full p-6 mb-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your email address"
          />

          {/* Password Input */}
          <input
            type="password"
            className="w-full p-6 mb-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your password"
          />

          {/* Confirm Password Input */}
          <input
            type="password"
            className="w-full p-6 mb-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Confirm your password"
          />

          {/* Sign Up Button */}
          <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-purpleLight hover:bg-opacity-90 hover:shadow-lg transition duration-300">
            <span>Sign Up</span>
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

          {/* Social Sign Ups */}
          <p className="py-6 text-sm font-thin text-center text-gray-400">
            or sign up with
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
    </div>
  );
};

export default SignUp;
