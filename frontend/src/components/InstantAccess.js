import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Temporary placeholder image
const accessImage = "https://via.placeholder.com/500";

const InstantAccess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <Container className="instant-access-section py-5 text-center">
      <Row className="align-items-center">
        {/* Left Side: Image */}
        <Col md={6} data-aos="fade-right">
          <img src={accessImage} alt="Instant Access" className="img-fluid rounded shadow" />
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

