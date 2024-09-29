import React from "react";

const FAQ = () => {
  return (
    <section id="faq" className="container mx-auto">
      <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="max-w-lg px-6 mx-auto text-center text-grayishBlue">
        Here are some of our FAQs. If you have any other questions you'd like
        answered, please feel free to email us.
      </p>

      <div className="max-w-2xl m-8 mx-auto overflow-hidden">
        <div className="py-1 border-b outline-none group" tabIndex={1}>
          <div className="flex items-center justify-between py-3 text-gray-500 cursor-pointer group ease">
            <div className="transition group-hover:text-red-500">
              What is Neighborhood Aid?
            </div>
            <div className="transition group-focus:-rotate-180 group-focus:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </div>
          </div>
          <div className="overflow-hidden group-focus:max-h-screen max-h-0 transition ease">
            <p className="py-2 text-justify text-gray-400">
              Neighborhood Aid is a platform designed to help communities report
              local issues, track the progress of those reports, and engage with
              their neighbors to create safer and stronger communities.
            </p>
          </div>
        </div>

        {/* Repeat for other FAQ questions */}
      </div>
    </section>
  );
};

export default FAQ;
