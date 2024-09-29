import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Pricing from "./components/Pricing";
function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        {/* Route for the sign up page */}
        <Route path="/signup" element={<SignUp />} />
        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />
        {/* Route for Pricing page*/}
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
