import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    country: "",
    occupation: "",
    amount: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setFormData(response.data);
      } catch (err) {
        setError("Failed to load profile data.");
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/api/auth/update-profile", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setSuccess("Profile updated successfully!");
      setTimeout(() => navigate("/profile"), 1500);
    } catch (err) {
      setError("Update failed. Try again.");
    }
  };

  return (
    <Container className="main-container d-flex justify-content-center align-items-center min-vh-98">
      <Form onSubmit={handleSubmit} className="w-50">
        <h2 className="text-center">Edit Profile</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}

        <Form.Group>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Control as="select" name="country" value={formData.country} onChange={handleChange} required>
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control as="select" name="occupation" value={formData.occupation} onChange={handleChange} required>
            <option value="">Select your occupation</option>
            <option value="Homemaker">Homemaker</option>
            <option value="Working Person">Working Person</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" name="amount" value={formData.amount} onChange={handleChange} min="0" required />
        </Form.Group>
        <Button type="submit" className="btn color-green">Update Profile</Button>
      </Form>
    </Container>
  );
};

export default EditProfile;
