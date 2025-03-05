import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../pages/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    country: '',
    occupation: '',
    amount: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Container className="main-container d-flex justify-content-center align-items-center min-vh-98">
      <Row className="w-100">
        <Col md={6} className="login-container">
          <div className="login-box">
            <h2 className="text-center">Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="input-container">
                <Form.Control type="text" placeholder="Enter your full name" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Control type="tel" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Control as="select" name="country" value={formData.country} onChange={handleChange} required>
                  <option value="">Select your country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  <option value="India">India</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Control as="select" name="occupation" value={formData.occupation} onChange={handleChange} required>
                  <option value="">Select your occupation</option>
                  <option value="Homemaker">Homemaker</option>
                  <option value="Working Person">Working Person</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Control type="number" placeholder="Enter the amount you hold (in USD)" name="amount" value={formData.amount} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Control type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Control type="password" placeholder="Confirm your password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="form-check">
                <Form.Check type="checkbox" label="I agree to the Terms and Conditions" name="terms" checked={formData.terms} onChange={handleChange} required />
              </Form.Group>
              <Button type="submit" className="btn btn-primary w-100">Sign Up</Button>
              <div className="text-center mt-3">
                <p>Already have an account? <a href="./login.html">Login</a></p>
              </div>
            </Form>
          </div>
        </Col>
        <Col md={6} className="image-container">
          <img src="https://img.freepik.com/premium-photo/businessman-draw-finance-allusive-graph-chart-showing-business-profit-growth_31965-39504.jpg" alt="Finance" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
