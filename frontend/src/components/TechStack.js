import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const TechStack = () => {
  return (
    <Container className="text-center py-5">
      <h2>Supported By / Tech Stack</h2>
      <p>Powered by AI, Blockchain, and Web3 technology.</p>
      <Row>
        <Col><Card className="p-3">🔥 Firebase</Card></Col>
        <Col><Card className="p-3">🟢 Aptos</Card></Col>
        <Col><Card className="p-3">🤖 AI Models</Card></Col>
      </Row>
    </Container>
  );
};

export default TechStack;
