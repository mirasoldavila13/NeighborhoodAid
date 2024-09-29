import { useState } from "react";
import logo from "../assets/neighborhood_logo.svg";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="Logo" />
          <div className="hidden space-x-8 font-bold lg:flex">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Testimonials
            </a>
          </div>
        </div>
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <a href="#" className="hover:text-purpleLight">
            Login
          </a>
          <a
            href="#"
            className="px-6 py-3 font-bold text-white bg-purpleLight rounded-full hover:bg-darkViolet"
          >
            Sign Up
          </a>
        </div>
        <button
          id="menu-btn"
          className={`hamburger lg:hidden ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {menuOpen && (
        <div
          id="menu"
          className="absolute p-6 bg-zinc-800 left-6 right-6 top-20"
        >
          <div className="flex flex-col items-center space-y-6 text-white">
            <a href="#" className="hover:text-purpleLight">
              Features
            </a>
            <a href="#" className="hover:text-purpleLight">
              Pricing
            </a>
            <a href="#" className="hover:text-purpleLight">
              Testimonials
            </a>
            <a
              href="#"
              className="pt-6 border-t border-gray-400 hover:text-purpleLight"
            >
              Login
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-purpleLight rounded-full hover:bg-purpleLighter"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
