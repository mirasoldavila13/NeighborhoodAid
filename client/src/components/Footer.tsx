// Importing all social media icons
import logoFooter from "../assets/neighborhood_logo_footer.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import instagramIcon from "../assets/icon-instagram.svg";

const Footer = () => (
  <footer className="py-16 bg-veryDarkViolet">
    <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0">
      {/* Logo */}
      <img src={logoFooter} alt="Neighborhood Aid Logo" />

      {/* Menus */}
      <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
        {/* Features Menu */}
        <div className="flex flex-col items-center w-full md:items-start">
          <div className="mb-5 font-bold text-white capitalize">Features</div>
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Report Local Issues
            </a>
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Track Issue Progress
            </a>
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Create and Share Playlists
            </a>
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Check the Weather
            </a>
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Join the Conversation
            </a>
          </div>
        </div>

        {/* Resources Menu */}
        <div className="flex flex-col items-center w-full md:items-start">
          <div className="mb-5 font-bold text-white capitalize">Resources</div>
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Blog
            </a>
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Developers
            </a>
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Support
            </a>
          </div>
        </div>

        {/* Company Menu */}
        <div className="flex flex-col items-center w-full md:items-start">
          <div className="mb-5 font-bold text-white capitalize">Company</div>
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              About
            </a>
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Our Team
            </a>
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Careers
            </a>
            <a
              href="/under-construction"
              className="capitalize text-grayishViolet hover:text-purpleLight"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6">
        <a href="/under-construction">
          <img src={facebookIcon} alt="Facebook" className="ficon" />
        </a>
        <a href="/under-construction">
          <img src={twitterIcon} alt="Twitter" className="ficon" />
        </a>
        <a href="/under-construction">
          <img src={pinterestIcon} alt="Pinterest" className="ficon" />
        </a>
        <a href="/under-construction">
          <img src={instagramIcon} alt="Instagram" className="ficon" />
        </a>
      </div>
    </div>

    {/* Copyright */}
    <div className="pt-8 mt-8 border-t border-gray-600">
      <p className="text-center text-grayishViolet">
        © 2024 Neighborhood Aid. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
