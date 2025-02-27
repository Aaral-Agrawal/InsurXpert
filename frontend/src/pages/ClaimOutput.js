import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "react-bootstrap";

const ClaimOutput = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const patientDetails = location.state?.patientDetails;

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  if (!patientDetails) {
    return <h2 className="text-center mt-5">No Claim Details Found.</h2>;
  }

  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold text-success" data-aos="fade-up">
        Claim Approved! ✅
      </h2>
      <p className="lead" data-aos="fade-up" data-aos-delay="200">
        Your payout will be processed soon.
      </p>

      <div className="mt-4" data-aos="fade-up" data-aos-delay="400">
        <h4>Patient Details</h4>
        <p><strong>Name:</strong> {patientDetails.name}</p>
        <p><strong>Age:</strong> {patientDetails.age}</p>
        <p><strong>Condition:</strong> {patientDetails.condition}</p>
        <p><strong>Claim Amount:</strong> ${patientDetails.claimAmount}</p>
        <p><strong>Hospital:</strong> {patientDetails.hospital}</p>
        <p><strong>Insurance ID:</strong> {patientDetails.insuranceId}</p>
      </div>

      <div className="mt-4" data-aos="fade-up" data-aos-delay="600">
        <Button variant="danger" onClick={() => navigate("/")}>
          Cancel Claim
        </Button>{" "}
        <Button variant="success" onClick={() => alert("Funds Credited Successfully!")}>
          Proceed with Claim
        </Button>
      </div>
    </div>
  );
};

export default ClaimOutput;
