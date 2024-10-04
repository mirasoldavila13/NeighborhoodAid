import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Features from './pages/Features';
import Pricing from './components/Pricing';
import TestimonialsPage from './pages/Testimonials';
import ReportLocalIssueFeature from './pages/ReportLocalIssueFeature';
import Login from './pages/Login';
import UserRegistration from './pages/UserRegistration';
import Dashboard from './pages/Dashboard';
import ReportPage from './pages/ReportPage';
import ReportOptionsPage from './pages/ReportOptionsPage';
import CommunityReportPage from './pages/CommunityReportPage';
import CommunityIssueForm from './components/CommunityIssueForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />

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

        {/* Route for Report Issue Form Feature */}
        <Route path="/report-issue" element={<CommunityIssueForm />} />

        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the user dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* New route for /dashboard/report */}
        <Route path="/dashboard/report" element={<ReportOptionsPage />} />

        {/* Existing ReportPage for Authorities */}
        <Route path="/dashboard/report/authorities" element={<ReportPage />} />

        {/* Placeholder page for Community Reports */}
        <Route path="/dashboard/report/community" element={<CommunityReportPage />} />

        {/* Catch-all route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
