import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Features from "./pages/Features";
import Pricing from "./components/Pricing";
import TestimonialsPage from "./pages/Testimonials";
import ReportLocalIssueFeature from "./pages/ReportLocalIssueFeature";
import Login from "./pages/Login";
import UserRegistration from "./pages/UserRegistration";
import Dashboard from "./pages/Dashboard";
import ReportPage from "./pages/ReportPage";
import ReportOptionsPage from "./pages/ReportOptionsPage";
import CommunityReportPage from "./pages/CommunityReportPage";
import ReportDetailPage from './pages/ReportDetailPage';
import ReportedIssuesPage from './pages/ReportedIssuesPage'; // Import the ReportedIssuesPage component
import NotFoundPage from "./components/404Page";
import ConstructionPage from "./pages/ConstructionPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/under-construction" element={<ConstructionPage />} />

        {/* Route for the features page */}
        <Route path="/features" element={<Features />} />

        {/* Route for Pricing page */}
        <Route path="/pricing" element={<Pricing />} />

        {/* Route for Testimonials Page */}
        <Route path="/testimonials" element={<TestimonialsPage />} />

        {/* Route for Report Local Issue Feature */}
        <Route path="/report-local-issue" element={<ReportLocalIssueFeature />} />

        {/* Route for the sign-up page */}
        <Route path="/register" element={<UserRegistration />} />

        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard/:userId" element={<Dashboard />} />

        {/* New route for /dashboard/create-report */}
        <Route path="/dashboard/:userId/create-report" element={<ReportOptionsPage />} />

        {/* Existing ReportPage for Authorities */}
        <Route path="/dashboard/:userId/create-report/authorities" element={<ReportPage />} />

        {/* Placeholder page for Community Reports */}
        <Route path="/dashboard/:userId/create-report/community" element={<CommunityReportPage />} />

        {/* Route for Reported Issues */}
        <Route path="/dashboard/:userId/reported-issues" element={<ReportedIssuesPage />} /> {/* New route */}

        <Route path="/dashboard/:userId/report/:reportId" element={<ReportDetailPage />} /> 

        {/* Catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
