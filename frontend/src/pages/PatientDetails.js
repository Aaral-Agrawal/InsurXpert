import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PatientDetails = () => {
  const navigate = useNavigate();
  console.log("✅ PatientDetails component is rendering!");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    insuranceId: "",
    claimAmount: "",
    medicalHistory: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Details:", formData);
    navigate("/confirmation"); // Redirect to another page after submission
  };

  
  return (
    <Container className="mt-5 p-4 shadow-lg rounded bg-light" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

    <h2 className="text-center mb-4">Enter Patient Details</h2>
    <Form onSubmit={handleSubmit}>
      {/* Full Name */}
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </Form.Group>

      {/* Age */}
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          placeholder="Enter your age"
        />
      </Form.Group>

      {/* Gender */}
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Form.Select>
      </Form.Group>

      {/* Insurance ID */}
      <Form.Group className="mb-3">
        <Form.Label>Insurance ID</Form.Label>
        <Form.Control
          type="text"
          name="insuranceId"
          value={formData.insuranceId}
          onChange={handleChange}
          required
          placeholder="Enter Insurance ID"
        />
      </Form.Group>

      {/* Claim Amount */}
      <Form.Group className="mb-3">
        <Form.Label>Claim Amount</Form.Label>
        <Form.Control
          type="number"
          name="claimAmount"
          value={formData.claimAmount}
          onChange={handleChange}
          required
          placeholder="Enter Claim Amount"
        />
      </Form.Group>

      {/* Medical History */}
      <Form.Group className="mb-3">
        <Form.Label>Medical History</Form.Label>
        <Form.Control
          as="textarea"
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={handleChange}
          rows={3}
          placeholder="Enter any relevant medical history"
        />
      </Form.Group>

      {/* Submit Button */}
      <div className="text-center">
        <Button variant="primary" type="submit" className="me-3">Submit</Button>
        <Button variant="secondary" onClick={() => navigate("/")}>Cancel</Button>
      </div>
    </Form>
  </Container>
  );
};

export default PatientDetails;