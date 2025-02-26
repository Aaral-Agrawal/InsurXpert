import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to InsurXpert</h1>
      <p>Your AI & Blockchain-powered insurance platform</p>
    </div>
  );
}

export default App; // ✅ This should appear only ONCE

