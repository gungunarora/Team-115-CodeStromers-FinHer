import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    country: "",
    occupation: "",
    amount: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // Hook to redirect after successful sign up

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data:", formData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
      setSuccess("Signup successful! Please log in.");
      // Redirect to login page after successful signup
      setTimeout(() => {
        navigate("/login");
      }, 2000); // 2 seconds delay for the success message
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div class="body-str">
      <Container className="main-container d-flex justify-content-center align-items-center min-vh-98">
        <Row className="w-100 justify-content-center">
          <Col md={6} className="login-container">
            <div className="login-box signup-setting">
              <h2 className="text-center">Sign Up</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="input-container">
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="input-container">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="input-container">
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="input-container">
                  <Form.Control
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="input-container">
                  <Form.Control
                    as="select"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    <option value="India">India</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="input-container">
                  <Form.Control
                    as="select"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your occupation</option>
                    <option value="Homemaker">Homemaker</option>
                    <option value="Working Person">Working Person</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="input-container">
                  <Form.Control
                    type="number"
                    placeholder="Enter the amount you hold (in USD)"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="input-container">
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="input-container">
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="form-check">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the Terms and Conditions"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                {/* <Button type="submit" className="btn color-green">
                Sign Up
              </Button> */}
                <div className="signup-container">
                  <form onSubmit={handleSubmit}>
                    {/* Your form fields here */}
                    <button type="submit">Sign Up</button>
                  </form>
                  {error && <div>{error}</div>}
                  {success && <div>{success}</div>}
                </div>
                <div className="text-center mt-3">
                  <p>
                    Already have an account? <a href="./login">Login</a>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
