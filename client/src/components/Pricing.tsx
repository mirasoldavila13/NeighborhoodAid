import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      {/* Navigation bar */}
      <Nav />

      {/* Pricing plans */}
      <div className="flex flex-col items-center justify-center bg-slate-800 py-12">
        <h1 className="text-4xl font-bold text-white mb-12">
          Choose Your Plan
        </h1>

        {/* Pricing cards container */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6">
          {/* Basic plan */}
          <div className="bg-slate-700 rounded-xl text-white">
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Basic</div>
              <h2 className="mt-10 font-serif text-5xl text-center">Free</h2>
              <h3 className="mt-2 text-center">$0/Month</h3>
              <div className="flex justify-center">
                <Link
                  to="/signup"
                  className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center">
                  <span className="text-sm ml-1">Report Local Issues</span>
                </div>
                <div className="flex justify-center">
                  <span className="text-sm ml-1">Track Progress</span>
                </div>
                <div className="flex justify-center">
                  <span className="text-sm ml-1">Check the Weather</span>
                </div>
              </div>
            </div>
          </div>

          {/* Standard plan */}
          <div className="bg-violet-600 rounded-xl text-white">
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Standard</div>
              <h2 className="mt-10 font-serif text-5xl text-center">$3.99</h2>
              <h3 className="mt-2 text-center">Per Month</h3>
              <div className="flex justify-center">
                <button className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 bg-violet-600 hover:bg-violet-800 hover:border-violet-800">
                  Purchase
                </button>
              </div>
            </div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center">
                  <span className="text-sm ml-1">Create and Share</span>
                </div>
                <div className="flex justify-center">
                  <span className="text-sm ml-1">Join the Conversation</span>
                </div>
                <div className="flex justify-center">
                  <span className="text-sm ml-1">Share Playlists</span>
                </div>
              </div>
            </div>
          </div>

          {/* Premium plan */}
          <div className="bg-slate-700 rounded-xl text-white">
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Premium</div>
              <h2 className="mt-10 font-serif text-5xl text-center">$8.99</h2>
              <h3 className="mt-2 text-center">Per Month</h3>
              <div className="flex justify-center">
                <button className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800">
                  Purchase
                </button>
              </div>
            </div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center">
                  <span className="text-sm ml-1">Priority Reporting</span>
                </div>
                <div className="flex justify-center">
                  <span className="text-sm ml-1">Government Engagement</span>
                </div>
                <div className="flex justify-center">
                  <span className="text-sm ml-1">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action (CTA) section */}
      <div className="flex flex-col items-center justify-center my-12 space-y-6 text-center bg-slate-800 text-white py-16">
        <h3 className="text-3xl font-bold">Ready to Join Neighborhood Aid?</h3>
        <p className="mt-4 text-lg text-gray-400">
          Select a plan that suits your needs and start reporting local issues,
          tracking progress, and engaging with your community.
        </p>
        <div className="mt-8">
          <Link
            to="/signup"
            className="inline-block bg-purpleLight text-white px-8 py-4 rounded-lg text-lg hover:bg-purpleStrong transition duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;
