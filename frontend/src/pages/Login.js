 


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../pages/Login.css";
import { Modal } from "react-bootstrap";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    insuranceId: "",
    medicalBill: null,
    prescription: null,
    governmentIdType: "",
    governmentId: null,
    claimAmount: "",
    claimDescription: ""
  });

 
          const [showModal, setShowModal] = useState(false);

          const handleSubmit = () => {
            setShowModal(true);
          };

            const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          };

          const handleFileChange = (e) => {
            const { name, files } = e.target;
            setFormData({ ...formData, [name]: files[0] });
          };
  

   
  

  return (
    <Container fluid className="login-container d-flex align-items-center">
      <Row className="w-100">
        
        <Col md={6} className="form-section p-5 d-flex flex-column justify-content-center">
          <motion.h2
            className="mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
           
          </motion.h2>

          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Insurance ID</Form.Label>
                  <Form.Control type="text" name="insuranceId" value={formData.insuranceId} onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>

            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Medical Bill</Form.Label>
                  <Form.Control type="file" name="medicalBill" onChange={handleFileChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Prescription</Form.Label>
                  <Form.Control type="file" name="prescription" onChange={handleFileChange} required />
                </Form.Group>
              </Col>
            </Row>

            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Government ID</Form.Label>
                  <Form.Select name="governmentIdType" value={formData.governmentIdType} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Aadhar Card">Aadhar Card</option>
                    <option value="PAN Card">PAN Card</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Selected ID</Form.Label>
                  <Form.Control type="file" name="governmentId" onChange={handleFileChange} required />
                </Form.Group>
              </Col>
            </Row>

 
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Claim Amount</Form.Label>
                  <Form.Control type="number" name="claimAmount" value={formData.claimAmount} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Claim Description</Form.Label>
                  <Form.Control as="textarea" name="claimDescription" value={formData.claimDescription} onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>


            <div className="text-center d-flex justify-content-between">
              <Button variant="secondary" size="lg" onClick={() => navigate("/")}>Cancel</Button>
              <Button variant="primary" size="lg" onClick={handleSubmit} className="d-flex align-items-center gap-2">
                Submit Claim <FaArrowRight />
              </Button>
            </div>
          </Form>
        </Col>
             
         


 
        <Col md={6} className="image-section d-flex align-items-center justify-content-center">
          <motion.img
            src="/insurance.jpg"
            alt="Insurance Family"
            className="Login-image"
            style={{ maxHeight: "500px", objectFit: "cover" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [1, 1.05, 1], y: [0, -10, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
        </Col>
            </Row>


             
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center p-4">
          <h4 className="text-success">Claim Submitted Successfully!</h4>
          <p>Your insurance claim request has been recorded.</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button variant="secondary" onClick={() => navigate("/")}>Go to Home</Button>
            <Button variant="primary" onClick={() => navigate("/Dashboard")}>Go to Dashboard</Button>
          </div>
        </Modal.Body>
      </Modal>

    </Container>
  );
};

export default Login;