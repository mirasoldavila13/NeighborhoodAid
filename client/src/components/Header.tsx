import logo from "../assets/neighborhood_logo.svg";

const Header = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="Neighborhood Logo" />
          <div className="hidden space-x-8 font-bold lg:flex">
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">Features</a>
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">Pricing </a>
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">Testimonials</a>
          </div>
        </div>
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <a href="#" className="hover:text-purpleLight transition ease-in-out duration-300">Login</a>
          <a href="#" className="px-6 py-3 font-bold text-white bg-purpleLight rounded-full hover:bg-darkViolet transition ease-in-out duration-300">Sign Up</a>
        </div>
        <button id="menu-btn" className="block hamburger lg:hidden focus:outline-none" type="button">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div id="menu" className="absolute hidden p-6 rounded-lg bg-zinc-800 left-6 right-6 top-20 z-100 lg:hidden">
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="#" className="w-full text-center hover:text-purpleLight">Features
          </a>
          <a href="#" className="w-full text-center hover:text-purpleLight">Pricing
          </a>
          <a href="#" className="w-full text-center hover:text-purpleLight">Testimonials
          </a>
          <a href="#" className="w-full pt-6 border-t border-gray-400 text-center hover:text-purpleLight transition ease-in-out duration-300">Login
          </a>
          <a href="#" className="px-6 py-3 font-bold text-white bg-purpleLight rounded-full hover:bg-purpleLighter transition ease-in-out duration-300">Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
