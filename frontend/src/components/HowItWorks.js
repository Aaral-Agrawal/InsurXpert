 import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./HowItWorks.css"; // Ensure this file exists for custom styling

export const steps = [
  {
    
      title: "Upload Medical Records",
      description: "Patients securely store their medical documents with end-to-end encryption.",
      icon: <img src="https://thumbs.dreamstime.com/b/medical-record-round-ribbon-isolated-label-sign-sticker-193005526.jpg" 
              alt="Medical Record Icon" width="50" />,
  },
  {
    
      title: "Aptos Blockchain ",
      description: " Aptos Blockchain detects fraud & speeds up claims by analyzing medical records.",
      icon: <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ai-brain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--artificial-intelligence-robotics-chip-mind-pack-science-technology-icons-7718457.png?f=webp" 
              alt="AI Brain Icon" width="50" />,
    
    
  },
  {

      title: "Instant Access for Insurers",
      description: "Insurance companies access verified records instantly, reducing paperwork.",
      icon: <img src="https://cdn-icons-png.flaticon.com/128/2209/2209673.png" alt="Health Insurance Icon" width="50" />,
    },    

  {
    
      title: "Smart Contract Payouts",
      description: "Blockchain smart contracts automate payouts, ensuring zero delays.",
      icon: <img src="https://img.freepik.com/premium-photo/3d-icon-smart-contract-3d-illustration-3d-element-3d-rendering-graphic-elements-design-element_808921-904.jpg" 
              alt="Smart Contract Icon" width="50" />,
    
  },
];

const HowItWorks = () => {
  return (
    <Container className="how-it-works text-center py-5">
      <motion.h2
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }} // Ensures animation happens only once when scrolled into view
      >
        How It Works
      </motion.h2>

      <Row>
        {steps.map((step, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.3, ease: "easeInOut" }}
              viewport={{ once: true }} // Ensures animation triggers only once when in view
            >
              <Card className="h-100 shadow-sm p-3">
                {/* Animated Icon */}
                <motion.div
                  className="step-icon mb-3"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                >
                  {step.icon}
                </motion.div>

                <Card.Body>
                  {/* Animated Title */}
                  <motion.h4
                    className="step-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  >
                    {step.title}
                  </motion.h4>

                  {/* Stylish Font for Description */}
                  <p className="step-description">{step.description}</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HowItWorks;


