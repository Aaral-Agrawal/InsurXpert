import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing Pages and Components
import Home from "./pages/Home";
import PatientDetails from "./pages/PatientDetails";
import LiveDemo from "./components/LiveDemo";
import InsuranceDashboard from "./components/InsuranceDashboard";
import ClaimOutput from "./pages/ClaimOutput";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ViewDetails from "./pages/ViewDetails";
 

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
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view-details" element={<ViewDetails />} />
         
        <Route path="/patient-details" element={<PatientDetails />} />
        <Route path="/LiveDemo" element={<LiveDemo />} />
        <Route path="/insurance-dashboard" element={<InsuranceDashboard />} />
        <Route path="/claim-output" element={<ClaimOutput />} />
      </Routes>
    </Router>
  );
};

export default App;
