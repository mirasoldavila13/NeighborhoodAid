import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container mx-auto">
        {/* FAQ Heading */}
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-lg px-6 mx-auto text-center text-grayishBlue">
          Here are some of our FAQs. If you have any other questions you'd like
          answered, please feel free to email us.
        </p>
      </div>

      {/* FAQ Accordion */}
      <section id="faq-accordion">
        {/* Main Container */}
        <div className="container mx-auto px-6 mb-32">
          {/* Accordion Container */}
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {/* Tab 1 */}
            <div
              className="py-1 border-b outline-none group"
              tabIndex={1}
              onClick={() => toggleFAQ(1)}
            >
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer ease">
                <div
                  className={`transition duration-500 ease ${activeIndex === 1 ? "text-red-500" : ""}`}
                >
                  What is Neighborhood Aid?
                </div>
                <div
                  className={`transition duration-500 ease ${activeIndex === 1 ? "-rotate-180 text-red-500" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition duration-500 ${activeIndex === 1 ? "max-h-screen" : "max-h-0"}`}
              >
                <p className="py-2 text-justify text-gray-400">
                  Neighborhood Aid is a platform designed to help communities
                  report local issues, track the progress of those reports, and
                  engage with their neighbors to create safer and stronger
                  communities.
                </p>
              </div>
            </div>

            {/* Tab 2 */}
            <div
              className="py-1 border-b outline-none group"
              tabIndex={2}
              onClick={() => toggleFAQ(2)}
            >
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer ease">
                <div
                  className={`transition duration-500 ease ${activeIndex === 2 ? "text-red-500" : ""}`}
                >
                  How can I submit a suggestion?
                </div>
                <div
                  className={`transition duration-500 ease ${activeIndex === 2 ? "-rotate-180 text-red-500" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition duration-500 ${activeIndex === 2 ? "max-h-screen" : "max-h-0"}`}
              >
                <p className="py-2 text-justify text-gray-400">
                  Submitting a suggestion is easy! Simply navigate to the
                  'Submit a Suggestion' section of the platform. Fill out the
                  form with your idea or feedback, and our team will review it.
                </p>
              </div>
            </div>

            {/* Tab 3 */}
            <div
              className="py-1 border-b outline-none group"
              tabIndex={3}
              onClick={() => toggleFAQ(3)}
            >
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer ease">
                <div
                  className={`transition duration-500 ease ${activeIndex === 3 ? "text-red-500" : ""}`}
                >
                  Is a membership required?
                </div>
                <div
                  className={`transition duration-500 ease ${activeIndex === 3 ? "-rotate-180 text-red-500" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition duration-500 ${activeIndex === 3 ? "max-h-screen" : "max-h-0"}`}
              >
                <p className="py-2 text-justify text-gray-400">
                  Signing up to Neighborhood Aid is completely free. However,
                  access to certain premium features may require a paid
                  membership.
                </p>
              </div>
            </div>

            {/* Tab 4 */}
            <div
              className="py-1 border-b outline-none group"
              tabIndex={4}
              onClick={() => toggleFAQ(4)}
            >
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer ease">
                <div
                  className={`transition duration-500 ease ${activeIndex === 4 ? "text-red-500" : ""}`}
                >
                  Who can I contact?
                </div>
                <div
                  className={`transition duration-500 ease ${activeIndex === 4 ? "-rotate-180 text-red-500" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition duration-500 ${activeIndex === 4 ? "max-h-screen" : "max-h-0"}`}
              >
                <p className="py-2 text-justify text-gray-400">
                  If you need assistance or have any questions, you can reach
                  out to our support team via the 'Contact Us' section of the
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FAQ;
