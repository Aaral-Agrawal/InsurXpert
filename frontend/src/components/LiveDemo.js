import React, { useState, useEffect } from "react";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const LiveDemo = () => {
  const [showForm, setShowForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [claimStatus, setClaimStatus] = useState("");
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    age: "",
    condition: "",
    claimAmount: "",
    hospital: "",
    insuranceId: ""
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleInputChange = (e) => {
    setPatientDetails({ ...patientDetails, [e.target.name]: e.target.value });
  };

  // ✅ Claim Submission
  const submitClaim = () => {
    setIsProcessing(true);
    setClaimStatus("Processing claim...");

    setTimeout(() => {
      setIsProcessing(false);
      setSubmitted(true);
      setClaimStatus("Claim Approved! ✅ Your payout will be processed soon.");
    }, 3000);
  };

  return (
    <div className="container mt-4 text-center">
      {/* Try Live Demo Button (Centered) */}
      {!showForm && !submitted && (
        <div className="d-flex justify-content-center">
          <Button variant="primary" className="m-3" onClick={() => setShowForm(true)}>
            Try Live Demo
          </Button>
        </div>
      )}

      {/* Form Section */}
      {showForm && !submitted && (
        <div className="mt-5" data-aos="fade-up">
          <h2 className="fw-bold text-primary">Enter Your Details</h2>

          <Form className="d-flex flex-wrap justify-content-center gap-3">
            <Form.Group>
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" name="name" value={patientDetails.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" name="age" value={patientDetails.age} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Medical Condition</Form.Label>
              <Form.Control type="text" name="condition" value={patientDetails.condition} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Claim Amount</Form.Label>
              <Form.Control type="number" name="claimAmount" value={patientDetails.claimAmount} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Hospital Details</Form.Label>
              <Form.Control type="text" name="hospital" value={patientDetails.hospital} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Insurance ID</Form.Label>
              <Form.Control type="text" name="insuranceId" value={patientDetails.insuranceId} onChange={handleInputChange} />
            </Form.Group>
          </Form>

          {/* Submit Claim Button */}
          <div className="d-flex justify-content-center mt-4">
            <Button variant="info" onClick={submitClaim} disabled={isProcessing}>
              {isProcessing ? <Spinner animation="border" size="sm" /> : "Submit Claim"}
            </Button>
          </div>
        </div>
      )}

      {/* ✅ Claim Output Section (After Form Submission) */}
      {submitted && (
        <div className="mt-5" data-aos="fade-up">
          <h2 className="fw-bold text-success">Claim Approved! ✅</h2>
          <p className="lead">Your payout will be processed soon.</p>

          <div className="mt-4">
            <h4>Patient Details</h4>
            <p><strong>Name:</strong> {patientDetails.name}</p>
            <p><strong>Age:</strong> {patientDetails.age}</p>
            <p><strong>Condition:</strong> {patientDetails.condition}</p>
            <p><strong>Claim Amount:</strong> ${patientDetails.claimAmount}</p>
            <p><strong>Hospital:</strong> {patientDetails.hospital}</p>
            <p><strong>Insurance ID:</strong> {patientDetails.insuranceId}</p>
            <p><strong>Policy Status:</strong> ✅ Policy Verified</p>
          </div>

          <div className="mt-4">
            <Button variant="danger" onClick={() => setSubmitted(false)}>
              Cancel Claim
            </Button>{" "}
            <Button variant="success" onClick={() => alert("Funds Credited Successfully!")}> 
              Proceed with Claim
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveDemo;
 