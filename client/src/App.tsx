import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Features from "./pages/Features";
import Pricing from "./components/Pricing";
import TestimonialsPage from "./pages/Testimonials";
import ReportLocalIssueFeature from "./pages/ReportLocalIssueFeature";
import Login from "./pages/Login";
import UserRegistration from "./pages/UserRegistration";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        {/* Route for the features page */}
        <Route path="/features" element={<Features />} />
        {/* Route for Pricing page*/}
        <Route path="/pricing" element={<Pricing />} />
        {/* Route for Testimonials Page */}
        <Route path="/testimonials" element={<TestimonialsPage />} />
        {/* Route for Report Local Issue Feature */}
        <Route
          path="/report-local-issue"
          element={<ReportLocalIssueFeature />}
        />
        {/* Route for the sign up page */}
        <Route path="/register" element={<UserRegistration />} />
        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
