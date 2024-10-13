import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/neighborhood_logo.svg";
import authService from "../services/authService";

const DashboardNav = () => {
  const navigate = useNavigate();
  const userProfile = authService.getProfile(); // Fetch user profile from authService
  const userId = userProfile ? userProfile.id : null; // Get user ID from the profile

  const logout = () => {
    // Use authService to handle logout
    authService.logout();
    navigate("/");
  };

  return (
    <nav className="bg-white p-4 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={`/dashboard/${userId}`}>
          <img src={logo} alt="Logo" />
        </Link>
        <Link to={`/dashboard/${userId}`} className="text-2xl font-bold">
          Neighborhood Aid Dashboard
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              to={`/dashboard/${userId}/create-report`} 
              className="hover:text-gray-300"
            >
              Create Report
            </Link>
          </li>
          <li>
            <Link
              to={`/dashboard/${userId}/reported-issues`} 
              className="hover:text-gray-300"
            >
              Reported Issues
            </Link>
          </li>
          <li>
            <Link
              to={`/dashboard/${userId}/playlists`}
              className="hover:text-gray-300"
            >
              Playlists
            </Link>
          </li>
          <li>
            <Link
              to={`/dashboard/${userId}/profile`}
              className="hover:text-gray-300"
            >
              Profile
            </Link>
          </li>
          <li>
            <button onClick={logout} className="hover:text-gray-300">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNav;
