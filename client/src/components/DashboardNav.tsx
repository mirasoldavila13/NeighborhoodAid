import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import logo from "../assets/dashbord_logo.png";

const DashboardNav = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const userProfile = authService.getProfile();
  const userId = userProfile ? userProfile.id : null;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    authService.logout();
    navigate("/");
    setMenuOpen(false); // Close menu on logout
  };

  return (
    <div className="relative">
      <Link to={`/dashboard/${userId}`} className="absolute top-0 left-0 mt-4 ml-4 z-50">
        <img src={logo} alt="Neighborhood Aid Logo" className="h-9" />
      </Link>

      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-40 h-16">
        <div className="container mx-auto flex items-center justify-between h-full px-4">
          <ul className="hidden space-x-6 ml-auto lg:flex"> {/* Desktop menu hidden on mobile */}
            <li>
              <Link to={`/dashboard/${userId}`} className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to={`/dashboard/${userId}/create-report`} className="hover:text-gray-300">
                Create Report
              </Link>
            </li>
            <li>
              <Link to={`/dashboard/${userId}/reported-issues`} className="hover:text-gray-300">
                Manage Reports
              </Link>
            </li>
            <li>
              <button onClick={logout} className="hover:text-gray-300">
                Logout
              </button>
            </li>
          </ul>

          {/* Hamburger button for mobile */}
          <button
            id="menu-btn"
            className={`hamburger lg:hidden ${menuOpen ? "open" : ""} ml-auto`} // Aligns hamburger menu to the right
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="menu"
            className="absolute p-6 bg-white left-0 right-0 top-16 z-50 lg:hidden shadow-md"
          >
            <div className="flex flex-col items-center space-y-6 text-black">
              <Link to={`/dashboard/${userId}`} className="hover:text-gray-300" onClick={toggleMenu}>
                Home
              </Link>
              <Link to={`/dashboard/${userId}/create-report`} className="hover:text-gray-300" onClick={toggleMenu}>
                Create Report
              </Link>
              <Link to={`/dashboard/${userId}/reported-issues`} className="hover:text-gray-300" onClick={toggleMenu}>
                Manage Reports
              </Link>
              <button onClick={logout} className="hover:text-gray-300">
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default DashboardNav;
