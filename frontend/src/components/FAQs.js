import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Container } from "react-bootstrap";

const FAQs = () => {
  return (
    <section className="faq-section py-5">
      <Container>
        <h2 className="text-center mb-4">FAQs (Common Questions)</h2>
        <Accordion>
          

          <Accordion.Item eventKey="0">
            <Accordion.Header>How does blockchain secure my data?</Accordion.Header>
            <Accordion.Body>
              Blockchain ensures tamper-proof, encrypted, and decentralized storage of medical records.
              <ul>
                <li> Decentralization prevents hacking & data loss.</li>
                <li> Encryption & Hashing secure all records.</li>
                <li> Immutable Data ensures zero fraud.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

           
          <Accordion.Item eventKey="1">
            <Accordion.Header>How fast are claims processed?</Accordion.Header>
            <Accordion.Body>
              InsurXpert automates claim approvals in minutes using  Smart Contracts.
              <ul>
                <li> AI verifies claims instantly.</li>
                <li> Smart Contracts automate payouts.</li>
                <li> No paperwork, no delays! </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          
          <Accordion.Item eventKey="2">
            <Accordion.Header>Is my data private?</Accordion.Header>
            <Accordion.Body>
              Yes! Only patients control their data:
              <ul>
                <li> End-to-End Encryption protects records.</li>
                <li> HIPAA & GDPR compliant security.</li>
                <li> Only you decide who accesses your data.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

           
          <Accordion.Item eventKey="3">
            <Accordion.Header>What makes InsurXpert different?</Accordion.Header>
            <Accordion.Body>
              InsurXpert combines Blockchain for fast, secure, and fraud-proof insurance.
              <ul>
                <li> Blockchain fraud detection.</li>
                <li> Smart Contracts for instant payouts.</li>
                <li> Transparent, paperless, and fully automated.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQs;
