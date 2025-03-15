 


import React, { useState, useEffect } from "react";
import { Button, Form, Spinner, Modal } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const LiveDemo = () => {
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [claimApproved, setClaimApproved] = useState(false); 
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0, visible: false });
  const navigate = useNavigate();

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

  const autoFillDetails = () => {
    setShowModal(true);
    const details = {
      name: "John Doe",
      age: "32",
      condition: "Fractured Leg",
      claimAmount: "5000",
      hospital: "City Hospital",
      insuranceId: "INS12345"
    };
    
    const fields = Object.keys(details);
    fields.forEach((field, index) => {
      setTimeout(() => {
        setPatientDetails((prev) => ({ ...prev, [field]: details[field] }));
      }, index * 500);
    });
    
    setTimeout(() => moveCursorToSubmit(), fields.length * 500 + 1000);
  };

  const moveCursorToSubmit = () => {
    setCursorPosition({ top: 400, left: 200, visible: true });
    setTimeout(() => submitClaim(), 1000);
  };

  const submitClaim = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSubmitted(true);
      setClaimApproved(true);
      setTimeout(() => autoProceedWithClaim(), 2000);
    }, 3000);
  };

  const autoProceedWithClaim = () => {
    setCursorPosition({ top: 500, left: 250, visible: true });
    setTimeout(() => {
      setShowSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="container mt-4 text-center">
      {!showModal && (
        <Button variant="primary" onClick={autoFillDetails}>How It Works</Button>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Patient Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!submitted ? (
            <Form>
              {Object.keys(patientDetails).map((key) => (
                <Form.Group key={key} className="mb-3">
                  <Form.Label>{key.replace(/([A-Z])/g, " $1").trim()}</Form.Label>
                  <Form.Control type="text" value={patientDetails[key]} readOnly />
                </Form.Group>
              ))}
              <div className="text-center">
                <Button variant="primary" disabled>
                  {isProcessing ? <Spinner animation="border" size="sm" /> : "Submit"}
                </Button>
              </div>
            </Form>
          ) : (
            <div className="text-center">
              <h4 className="text-success">Claim Approved! ✅</h4>
              <p>Your payout will be processed soon.</p>
              <h5>Patient Details</h5>
              {Object.keys(patientDetails).map((key) => (
                <p key={key}><strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong> {patientDetails[key]}</p>
              ))}
              <p><strong>Policy Status:</strong> ✅ Policy Verified</p>
              <div className="mt-3">
                <Button variant="danger">Cancel Claim</Button>{" "}
                <Button variant="success" disabled>Proceed with Claim</Button>
              </div>
              {showSuccess && (
                <div className="mt-4 text-success fw-bold" data-aos="fade-up">
                  ✅ Funds Credited Successfully!
                </div>
              )}
            </div>
          )}
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default LiveDemo;
