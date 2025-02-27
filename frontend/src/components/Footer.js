import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light py-4">
      <Container>
        <Row className="text-center">
          {/* Quick Links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About</a></li>
              <li><a href="/privacy-policy" className="text-light">Privacy Policy</a></li>
              <li><a href="/contact" className="text-light">Contact Us</a></li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-light">Twitter</a></li>
              <li><a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="text-light">LinkedIn</a></li>
              <li><a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer" className="text-light">GitHub</a></li>
            </ul>
          </Col>

          {/* Hackathon Link */}
          <Col md={4}>
            <h5>Built for Hackathon</h5>
            <p><a href="https://hackathonwebsite.com" target="_blank" rel="noopener noreferrer" className="text-light">Check our Hackathon Submission</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
