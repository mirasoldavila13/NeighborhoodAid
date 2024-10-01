import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import EmpowerCommunityImage from "../assets/report_local_issue_1.svg";
import CollaborativeSolutionImage from "../assets/report_local_issue_2.svg";
import TrasparencyImage from "../assets/report_local_issue_3.svg";

const ReportLocalIssueFeature = () => {
  return (
    <>
      {/* Navigation */}
      <Nav />

      <div className="bg-gray-50 min-h-screen py-16">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Report Local Issues with NeighborhoodAid
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Make your voice heard by reporting community issues and help build a
            stronger neighborhood.
          </p>
        </header>

        {/* Why Report Local Issues Section */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Report Local Issues?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our local issue reporting feature empowers you to take charge of the
            problems in your neighborhood, whether it's a pothole, broken
            streetlights, or vandalism. By reporting these issues, you
            contribute to making your community a better, safer place to live.
          </p>
          <ul className="space-y-4 text-gray-600">
            <li>Easy to use: Submit reports with just a few clicks.</li>
            <li>Real-time tracking: Stay updated on issue resolution.</li>
            <li>
              Collaborative community: Help neighborhoods tackle larger
              projects.
            </li>
          </ul>
        </section>

        {/* Call to Action (CTA) Section */}
        <div className="flex flex-col items-center justify-center mt-16 mb-12 text-center bg-gray-100 py-16 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">
            Ready to Join Neighborhood Aid?
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Select a plan that suits your needs and start reporting local
            issues, tracking progress, and engaging with your community.
          </p>
          <div className="mt-6">
            <Link
              to="/register"
              className="inline-block bg-purpleLight text-white px-6 py-3 rounded-lg text-lg hover:bg-purpleStrong transition duration-300"
            >
              Get Started Today{" "}
            </Link>
          </div>
        </div>

        {/* Collaborative and Impact Section */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Make a Lasting Impact in Your Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Empower Your Community Card with Icon */}
            <div className="p-6 bg-white shadow-sm rounded-lg hover:bg-purpleLight hover:text-white transition-colors">
              <img
                src={EmpowerCommunityImage}
                alt="Empower Your Community Icon"
                className="mx-auto w-16 h-16 mb-4"
              />
              <h3 className="text-2xl font-bold">Empower Your Community</h3>
              <p className="mt-4 text-gray-600">
                Small problems can grow if left unresolved. By reporting them,
                you're helping to keep your neighborhood safe and clean.
              </p>
            </div>

            {/* Collaborative Solutions Card with Icon */}
            <div className="p-6 bg-white shadow-sm rounded-lg hover:bg-purpleLight hover:text-white transition-colors">
              <img
                src={CollaborativeSolutionImage}
                alt="Collaborative Solutions Icon"
                className="mx-auto w-16 h-16 mb-4"
              />
              <h3 className="text-2xl font-bold">Collaborative Solutions</h3>
              <p className="mt-4 text-gray-600">
                Join forces with your neighbors to tackle large projects and
                make a lasting impact.
              </p>
            </div>

            {/* Transparency and Accountability Card with Icon */}
            <div className="p-6 bg-white shadow-sm rounded-lg hover:bg-purpleLight hover:text-white transition-colors">
              <img
                src={TrasparencyImage}
                alt="Transparency and Accountability Icon"
                className="mx-auto w-16 h-16 mb-4"
              />
              <h3 className="text-2xl font-bold">
                Transparency and Accountability
              </h3>
              <p className="mt-4 text-gray-600">
                Stay informed with real-time updates and track the progress of
                your report every step of the way.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ReportLocalIssueFeature;
