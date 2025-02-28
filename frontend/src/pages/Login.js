 import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "../pages/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    insuranceId: "",
    gender: "",
    birthDate: "",
    balance: 50000,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container fluid className="login-container d-flex align-items-center">
      <Row className="w-100">
        {/* Left Side - Form */}
        <Col md={6} className="form-section p-5 d-flex flex-column justify-content-center">
          <motion.h2
            className="mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Get an insurance quote to get started!
          </motion.h2>
          
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Insurance ID</Form.Label>
              <Form.Control type="text" name="insuranceId" value={formData.insuranceId} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
            </Form.Group>
             
             {/* Get Claim Button */}
             <div className="text-center">
                <Button variant="primary" size="lg" type="submit" className="d-flex align-items-center justify-content-center gap-2">
                  Get Claim <FaArrowRight />
                </Button>
              </div>

             
          </Form>
        
        </Col>

        <Col md={6} className="image-section d-flex align-items-center justify-content-center">
  <motion.img
  src="/insurance.jpg"
    alt="Insurance Family"
    className="Login-image"
    style={{ maxHeight: "600px", objectFit: "cover" }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: [1, 1.05, 1], // Subtle pulsing effect
      y: [0, -10, 0], // Floating effect
    }}
    transition={{
      duration: 3, // Smooth animation
      ease: "easeInOut",
      repeat: Infinity, // Keep looping
    }}
  />
</Col>

      </Row>
    </Container>
  );
};

export default Login;


 