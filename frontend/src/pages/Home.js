import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100 text-center">
        <Col xs={12}>
          <h2 className="mb-5">Welcome to Invoice & Billing System</h2>
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <Card className="p-4 shadow">
            <h4 className="mb-3">Vendor</h4>
            <Button variant="primary" className="w-100" onClick={() => navigate("/register/vendor")}>
              Register as Vendor
            </Button>
            <Button variant="outline-primary" className="w-100 mt-2" onClick={() => navigate("/login/vendor")}>
              Login as Vendor
            </Button>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <Card className="p-4 shadow">
            <h4 className="mb-3">Manager</h4>
            <Button variant="success" className="w-100" onClick={() => navigate("/register/manager")}>
              Register as Manager
            </Button>
            <Button variant="outline-success" className="w-100 mt-2" onClick={() => navigate("/login/manager")}>
              Login as Manager
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
