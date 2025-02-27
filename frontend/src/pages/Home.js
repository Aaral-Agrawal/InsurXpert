import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../components/HeroSection.css";
import "../components/HowItWorks.css";
import "../pages/Home.css";

import InstantAccess from "../components/InstantAccess";  
import LiveDemo from "../components/LiveDemo";  // ✅ Import the LiveDemo component
import Testimonials from "../components/Testimonials";
import TechStack from "../components/TechStack"; 
import FAQs from "../components/FAQs";  // ✅ Import FAQs component
import Footer from "../components/Footer";  // ✅ Import Footer
import { motion } from "framer-motion";
import HowItWorks from "../components/HowItWorks";



const Home = () => {
  
  return (
    <>
       <Container fluid className="home-page">
       <section className="hero-section text-center d-flex align-items-center position-relative">
      {/* ✅ InsurXpert Logo in the Top-Left Corner */}
      <div className="position-absolute top-0 start-0 p-3">
        <h3 className="insurxpert-logo">InsurXpert</h3>
      </div>

      <Container>
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

            <div className="hero-buttons">
              <Button variant="primary" size="lg" className="me-3">Get Started</Button>
              <Button variant="outline-light" size="lg">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

       

       {/* How It Works Section */}
      <HowItWorks />


      {/* Instant Access Section */}
      <InstantAccess />

      {/* ✅ Correct Way: Use LiveDemo Component */}
      <LiveDemo />

         {/* Testimonials Section */}
         <Testimonials />  {/* ✅ Add it here */}
        
  
         <TechStack />

         <FAQs />  {/* ✅ Add FAQs section here */}

         <Footer />  {/* ✅ Add Footer here */}

          </Container>
    </>
  );
};

export default Home; 
