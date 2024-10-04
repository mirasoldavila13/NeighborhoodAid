import { Link } from "react-router-dom";
import logo from "../assets/neighborhood_logo.svg";


const DashboardNav = () => {
  return (
    <nav className="bg-white p-4 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard">
        <img src={logo} alt="Logo" />
        </Link>
        <Link to="/dashboard" className="text-2xl font-bold">
          Neighborhood Aid Dashboard
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/dashboard/report" className="hover:text-gray-300">
              Reports
            </Link>
          </li>
          <li>
            <Link to="/dashboard/playlists" className="hover:text-gray-300">
              Playlists
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-300">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNav;
