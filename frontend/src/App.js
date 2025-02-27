import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";


// Importing Components
import LiveDemo from "./components/LiveDemo";
import InsuranceDashboard from "./components/InsuranceDashboard";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to InsurXpert</h1>
      <p>Your AI & Blockchain-powered insurance platform</p>
      <LiveDemo />  {/* ✅ Live Demo will always be visible on Home */}
    </div>
  );
};

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/LiveDemo" element={<LiveDemo />} />
        <Route path="/insurance-dashboard" element={<InsuranceDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;



