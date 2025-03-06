import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import axios from "axios";
import feedback from "../assets/feedback.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // To navigate after login

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit =  async (e) => {
    e.preventDefault();
    // console.log("Email:", email, "Password:", password);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token); // Save token
      alert("Login successful!");
      navigate("/"); // Redirect to dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials. Try again.");
    }
  };

  return (
    <div className="main-container body-str login-setup">
      {/* Left Side for Form */}
      <div className="login-container">
        <div className="login-box">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
            <div className="text-center mt-3">
              <p>
                Don't have an account? <a href="/signup">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side for Image */}
      <div className="image-container">
        <img
          src={feedback}
          alt="Login Visual"
        />
      </div>
    </div>
  );
};

export default Login;
