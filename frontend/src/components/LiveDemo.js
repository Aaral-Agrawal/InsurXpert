import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Form, Spinner, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AOS from "aos";
import "aos/dist/aos.css";

const LiveDemo = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [file, setFile] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [claimStatus, setClaimStatus] = useState("");
  const [progress, setProgress] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [claimId] = useState(uuidv4());
  const demoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [patientDetails, setPatientDetails] = useState({
    name: "",
    age: "",
    condition: "",
    claimAmount: "",
    hospital: "",
    insuranceId: ""
  });

  const handleInputChange = (e) => {
    setPatientDetails({ ...patientDetails, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
    setVerificationStatus("");
    setIsVerified(false);
    setClaimStatus("");
  };

  const startVerification = () => {
    if (!file) {
      alert("Please upload a medical record first.");
      return;
    }
    setIsVerifying(true);
    setVerificationStatus("AI is analyzing the document for fraud detection...");
    setProgress(10);

    setTimeout(() => setProgress(40), 1000);
    setTimeout(() => setProgress(70), 2000);
    setTimeout(() => {
      setProgress(100);
      setVerificationStatus("✅ Verification Successful! No fraud detected.");
      setIsVerifying(false);
      setIsVerified(true);
    }, 3000);
  };

  const submitClaim = () => {
    if (!isVerified) {
      alert("AI verification must be completed before submitting a claim.");
      return;
    }
    setIsProcessing(true);
    setClaimStatus("Processing claim...");

    const fileURL = file ? URL.createObjectURL(file) : null;

    const claimData = {
        name: patientDetails.name,
        age: patientDetails.age,
        medicalCondition: patientDetails.condition,
        claimAmount: patientDetails.claimAmount,
        hospital: patientDetails.hospital,
        insuranceId: patientDetails.insuranceId,
        claimId,
        fileURL,
      };

      localStorage.setItem("claimData", JSON.stringify(claimData));
    setTimeout(() => {
      setIsProcessing(false);
      setClaimStatus("✅ Claim Approved! Your insurance payout has been processed successfully.");
      navigate("/insurance-dashboard", { state: { ...patientDetails,claimData, claimId ,fileURL} });
    }, 3000);
  };

  return (
    <div className="container mt-5 text-center">
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Try Live Demo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Experience how our AI & Blockchain-powered insurance claim system works!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={() => { setShowModal(false); demoRef.current?.scrollIntoView({ behavior: "smooth" }); }}>Proceed</Button>
        </Modal.Footer>
      </Modal>

      <div ref={demoRef} className="mt-5" data-aos="fade-up">
        <h2 className="fw-bold" style={{ fontSize: "28px", fontFamily: "Poppins, sans-serif", color: "#007bff" }}>
          Enter Your Details
        </h2>

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

        <Form.Group controlId="fileUpload" className="mt-4">
          <Form.Label>Upload Medical Record</Form.Label>
          <Form.Control type="file" onChange={handleFileUpload} />
        </Form.Group>

        <div className="d-flex justify-content-center gap-3 mt-3">
          <Button variant="info" onClick={startVerification} disabled={isVerifying || isVerified}>
            {isVerifying ? <Spinner animation="border" size="sm" /> : "Start AI Verification"}
          </Button>
          <Button variant="primary" onClick={submitClaim} disabled={!isVerified || isProcessing}>
            {isProcessing ? <Spinner animation="border" size="sm" /> : "Submit Claim"}
          </Button>
        </div>

        {isVerifying && <ProgressBar animated now={progress} label={`${progress}%`} className="mt-3" />}
        {verificationStatus && <p className="mt-3">{verificationStatus}</p>}
        {claimStatus && <p className="mt-3 alert alert-success">{claimStatus}</p>}
      </div>
    </div>
  );
};

export default LiveDemo;

