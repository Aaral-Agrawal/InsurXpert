import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "../components/HeroSection.css";
import "../components/HowItWorks.css";
import "../pages/Home.css";

import InstantAccess from "../components/InstantAccess";  
import LiveDemo from "../components/LiveDemo";  
import Testimonials from "../components/Testimonials";
import TechStack from "../components/TechStack"; 
import FAQs from "../components/FAQs";  
import Footer from "../components/Footer";  
import HowItWorks from "../components/HowItWorks";
import { Navbar, Nav } from "react-bootstrap";


const Home = () => {
  // ✅ State for controlling the modal
  const navigate = useNavigate(); 
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    insuranceId: "",
    claimAmount: "",
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Details:", formData);
    setShowModal(false); // Close modal after submission
  };

  return (
    <>
    <div className="d-flex justify-content-between align-items-center px-4 w-100 position-absolute top-0 start-0 end-0"></div>
      <Container fluid className="home-page">
        <section className="hero-section text-center d-flex align-items-center position-relative">
          {/* ✅ InsurXpert Logo */}
          <div className="position-absolute top-0 start-0 p-3">
            <h3 className="insurxpert-logo">InsurXpert</h3>
          </div>

          {/* ✅ View Details Button in the Top-Right Corner */}
      {/* <div>
      <Button 
        variant="primary" 
        className="position-absolute top-0 end-0 m-3"
        onClick={() => navigate("/view-details")}
      >
        View Details
      </Button>
      </div> */}


      {/* Navigation Bar in the Center */}
     

  {/* <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="position-absolute start-50 translate-middle-x"
  >
    <Navbar bg="transparent">
      <Nav className="mx-auto">
        <Nav.Link href="#contact" className="text-white mx-3">Contact Us</Nav.Link>
        <Nav.Link href="#help" className="text-white mx-3">Help</Nav.Link>
        <Nav.Link href="/login" className="text-white mx-3">Login</Nav.Link>
        <Nav.Link href="#about" className="text-white mx-3">About</Nav.Link>
      </Nav>
    </Navbar>
  </motion.div> */}
    
           
 {/* View Details Button */}
 <div>
<Button 
  variant="primary" 
  className="position-absolute top-0 end-0 m-3"
  onClick={() => window.location.href = "/view-details"}  // Direct open karega
>
  View Details
</Button>
</div>
          <Container className="mt-5 p-4 shadow-lg rounded">
            <Row className="justify-content-center">
              <Col md={8}>
                {/* ✅ Animated Heading */}
                <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Revolutionizing Health Insurance with AI & Blockchain
                </motion.h1>

                {/* ✅ Animated Subtitle */}
                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  Faster Claims. Transparent Process. Zero Fraud.
                </motion.p>

                {/* ✅ Buttons */}
                <div className="hero-buttons">
                <Button variant="primary" size="lg" className="me-3" onClick={() => navigate("/login")}>
                     Get Started
                </Button>

                  <Button variant="outline-light" size="lg">Learn More</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ✅ How It Works Section */}
        <HowItWorks />
        <InstantAccess />
        <LiveDemo />
        <Testimonials />
        <TechStack />
        <FAQs />
        <Footer />
      </Container>

      {/* ✅ Bootstrap Modal for User Input */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Patient Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              />
            </Form.Group>

            {/* ✅ Buttons */}
            <div className="text-center">
              <Button variant="primary" type="submit" className="me-2">
                Submit
              </Button>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
