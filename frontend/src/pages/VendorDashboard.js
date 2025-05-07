import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

function VendorDashboard() {
  return (
    <Container className="mt-5 text-center">
      <h3>Vendor Dashboard</h3>
      <Row className="mt-4">
        <Col><Button variant="info">Profile</Button></Col>
        <Col><Button variant="primary">Generate Bill</Button></Col>
        <Col><Button variant="warning">Manage Products</Button></Col>
        <Col><Button variant="success">View Invoice Status</Button></Col>
      </Row>
    </Container>
  );
}

export default VendorDashboard;
