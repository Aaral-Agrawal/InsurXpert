import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./InstantAccess.css";

// ✅ Use the new image path
const accessImage = "/instant.jpeg";

const InstantAccess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <Container className="instant-access-section py-5 text-center">
      <Row className="align-items-center">
        {/* Left Side: Image */}
        <Col md={6} data-aos="fade-right">
        <motion.img
            src={accessImage}
            alt="Instant Access"
            className="img-fluid rounded shadow custom-img"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }} // ✅ Add hover effect
            />
        </Col>

        {/* Right Side: Content */}
        <Col md={6} data-aos="fade-left">
          <h2 className="mb-4">Instant Access for Insurers</h2>
          <p className="text-muted">
            Insurance companies instantly access verified records without needing physical paperwork.
          </p>
          <Button variant="primary" className="me-3">Get Started</Button>
          <Button variant="outline-secondary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default InstantAccess;
 