import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MemberRegistration from "./pages/MemberRegistration";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Keep the full-height layout, no flex issues */}
      <div className="page-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/member-registration" element={<MemberRegistration />} />
            <Route
              path="/check-in-out"
              element={<h2 className="page-placeholder">Check In-Out Page</h2>}
            />
            <Route
              path="/admin-dashboard"
              element={<h2 className="page-placeholder">Admin Dashboard Page</h2>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
