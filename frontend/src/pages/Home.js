import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./HeroSection.css"; // Custom CSS for styling
import "./HowItWorks.css";
import InstantAccess from "../components/InstantAccess";  
import LiveDemo from "../components/LiveDemo";  // ✅ Import the LiveDemo component
import Testimonials from "../components/Testimonials";
import TechStack from "../components/TechStack"; 

const Home = () => {
  const steps = [
    {
      title: "Upload Medical Records",
      description: "Patients securely store their medical documents with end-to-end encryption.",
      icon: "📤",
    },
    {
      title: "AI-Powered Verification",
      description: "AI detects fraud & speeds up claims by analyzing medical records.",
      icon: "🤖",
    },
    {
      title: "Instant Access for Insurers",
      description: "Insurance companies access verified records instantly, reducing paperwork.",
      icon: "⏳",
    },
    {
      title: "Smart Contract Payouts",
      description: "Blockchain smart contracts automate payouts, ensuring zero delays.",
      icon: "⚡",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="hero-title">Revolutionizing Health Insurance with AI & Blockchain</h1>
              <p className="hero-subtitle">
                Faster Claims. Transparent Process. Zero Fraud.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className="me-3">Get Started</Button>
                <Button variant="outline-light" size="lg">Learn More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <Container className="how-it-works text-center py-5">
        <h2 className="mb-4">How It Works</h2>
        <Row>
          {steps.map((step, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 shadow-sm p-3">
                <div className="step-icon mb-3">{step.icon}</div>
                <Card.Body>
                  <Card.Title>{step.title}</Card.Title>
                  <Card.Text>{step.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Instant Access Section */}
      <InstantAccess />

      {/* ✅ Correct Way: Use LiveDemo Component */}
      <LiveDemo />

         {/* Testimonials Section */}
         <Testimonials />  {/* ✅ Add it here */}
        
  
         <TechStack />


    </>
  );
};

export default Home; 
