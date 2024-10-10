import React from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ConstructionPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Nav />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">🚧 Under Construction 🚧</h1>
          <p className="text-lg text-gray-600 mb-8">
            This page is currently being built. Please check back later!
          </p>
          <div className="animate-bounce mb-4">
            <svg
              className="w-12 h-12 text-yellow-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m4 4h.01M12 9v2m-6 6h12l-3-9H9l-3 9z"
              ></path>
            </svg>
          </div>
          <a
            href="/"
            className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Go Back Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConstructionPage;
