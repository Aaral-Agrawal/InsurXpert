import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

const LiveDemo = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  // Handle file upload
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setIsProcessing(true);

      // Simulate AI processing
      setTimeout(() => {
        setIsProcessing(false);
        setIsApproved(true);
      }, 3000); // Simulate a 3-second delay
    }
  };

  return (
    <Container className="text-center py-5">
      <h2 className="mb-4">🎯 Try Live Demo</h2>
      <p className="text-muted">
        Upload a sample medical document and watch AI process it instantly!
      </p>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow">
            {/* File Upload Input */}
            <input
              type="file"
              className="form-control mb-3"
              accept=".pdf,.jpg,.png"
              onChange={handleFileUpload}
            />

            {/* Show File Name */}
            {file && (
              <p className="text-success">
                📄 {file.name} uploaded successfully!
              </p>
            )}

            {/* AI Processing Animation */}
            {isProcessing && (
              <div className="text-center">
                <Spinner animation="border" variant="primary" />
                <p className="mt-2">AI is processing the document...</p>
              </div>
            )}

            {/* AI Approval Message */}
            {isApproved && (
              <div className="text-success">
                ✅ AI has verified the document successfully!
              </div>
            )}

            {/* Try Again Button */}
            {(file || isApproved) && (
              <Button
                variant="secondary"
                className="mt-3"
                onClick={() => {
                  setFile(null);
                  setIsProcessing(false);
                  setIsApproved(false);
                }}
              >
                Upload Another Document
              </Button>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LiveDemo; // ✅ Make sure to export it!

