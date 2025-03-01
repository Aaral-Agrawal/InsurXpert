import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col} from "react-bootstrap";
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
          <h2 className="mb-4">With InsurXpert,no more hassles & no more worries </h2>
          <h6 style={{color:"white", fontWeight:"bold"}}>
          InsurXpert is an blockchain-powered platform that makes health insurance claims faster and fraud-proof.

          Patients securely upload medical records to a tamper-proof blockchain, allowing instant access for insurers.  verification ensures authenticity, reducing fraud and delays.

          Smart contracts automate claim approvals and payouts, creating a paperless, secure, and efficient insurance system.
          </h6>
           
        </Col>
      </Row>
    </Container>
  );
};

export default InstantAccess;
 