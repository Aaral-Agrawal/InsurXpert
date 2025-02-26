import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const Testimonials = () => {
  const feedbacks = [
    { name: "John Doe", text: "My claim was approved in minutes! This is the future of insurance!" },
    { name: "Sarah Lee", text: "InsurXpert saved me from fraud! Best decision ever." },
    { name: "Michael Chan", text: "A seamless process. No paperwork, no hassle, just fast payouts!" },
  ];

  return (
    <Container className="testimonials-section text-center py-5">
      <h2 className="mb-4">What Our Users Say</h2>
      <Row>
        {feedbacks.map((feedback, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-sm p-3">
              <Card.Body>
                <Card.Text>"{feedback.text}"</Card.Text>
                <h5 className="mt-3">- {feedback.name}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
