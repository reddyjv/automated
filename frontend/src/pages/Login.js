import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Alert, Card, Row, Col } from "react-bootstrap";

function Login() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        ...formData,
        role,
      });

      // Save user to localStorage (you can store token if you implement it)
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setMessage("✅ Logged in successfully!");
      setLoggedIn(true);

      // Navigate to appropriate dashboard
      setTimeout(() => {
        navigate(`/${role}/dashboard`);
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.error || "❌ Login failed.");
      setLoggedIn(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow p-4">
            <Card.Body>
              <h3 className="text-center mb-4">Login as <span className="text-capitalize">{role}</span></h3>
              {message && <Alert variant={loggedIn ? "success" : "danger"}>{message}</Alert>}
              
              <Form onSubmit={handleSubmit}>
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
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 mt-2">
                  Login
                </Button>
              </Form>

              <div className="text-center mt-4">
                <p>Don't have an account?</p>
                <Button variant="outline-primary" onClick={() => navigate(`/register/${role}`)}>
                  Register Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
