import logo from "../assets/neighborhood_logo.svg";

const Header = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="Neighborhood Logo" />
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
          <a
            href="#"
            className="hover:text-purpleLight transition ease-in-out duration-300"
          >
            Login
          </a>
          <a
            href="#"
            className="px-6 py-3 font-bold text-white bg-purpleLight rounded-full hover:bg-darkViolet transition ease-in-out duration-300"
          >
            Sign Up
          </a>
        </div>
        <button
          id="menu-btn"
          className="block hamburger lg:hidden focus:outline-none"
          type="button"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
