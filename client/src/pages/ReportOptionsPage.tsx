import { Link, useParams, Navigate } from "react-router-dom"; 
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import authService from "../services/authService";

const ReportOptionsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); 
  const authLoggedIn = authService.loggedIn();

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6 mt-12 overflow-y-auto flex items-center">
            <div className="container mx-auto flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
