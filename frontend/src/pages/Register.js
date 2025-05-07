import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Alert, Card, Row, Col } from "react-bootstrap";

function Register() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        ...formData,
        role,
      });
      setMessage("✅ Registered successfully! Please log in.");
      setRegistered(true);
    } catch (err) {
      setMessage(err.response?.data?.error || "❌ Registration failed.");
      setRegistered(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow p-4">
            <Card.Body>
              <h3 className="text-center mb-4">Register as <span className="text-capitalize">{role}</span></h3>
              {message && <Alert variant={registered ? "success" : "danger"}>{message}</Alert>}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Choose a secure password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-2">
                  Register
                </Button>
              </Form>

              <div className="text-center mt-4">
                <p>Already have an account?</p>
                <Button variant="outline-secondary" onClick={() => navigate(`/login/${role}`)}>
                  Go to Login
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
