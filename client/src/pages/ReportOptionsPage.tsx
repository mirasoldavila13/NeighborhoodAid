import { Link, useParams, Navigate } from "react-router-dom"; // Combine imports for better readability
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import authService from "../services/authService";

const ReportOptionsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // Get userId from URL parameters
  const authLoggedIn = authService.loggedIn();

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto">
              <h1 className="text-3xl font-bold mb-6">Create a Report</h1>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 border rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Report to Authorities</h2>
                  <p className="mb-4">
                    Use this option to report issues directly to local authorities.
                  </p>
                  <Link
                    to={`/dashboard/${userId}/create-report/authorities`}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Report to Authorities
                  </Link>
                </div>
                <div className="p-4 border rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Report to Community</h2>
                  <p className="mb-4">
                    Share issues with the local community for discussion and resolution.
                  </p>
                  <Link
                    to={`/dashboard/${userId}/create-report/community`}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Report to Community
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ReportOptionsPage;
