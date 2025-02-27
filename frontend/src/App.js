import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import PatientDetails from "./pages/PatientDetails";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="container text-center mt-3">
        <h1 data-aos="fade-down">Welcome to InsurXpert</h1>
        <p data-aos="fade-up">Your AI & Blockchain-powered insurance platform</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient-details" element={<PatientDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
