import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./loginform.css"; // Import the CSS file
import logo from "../assets/logo.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data); // Handle success response
      // Optionally, you can store the token in local storage or cookies
      // and redirect the user to another page (e.g., dashboard)
      navigate("/dashboard"); // Redirect to the dashboard page
    } catch (error) {
      console.error(error); // Handle error response
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src={logo} alt="Logo" className="logo" />
        <h2>AI Based Legal Chatbot</h2>
      </div>
      <div className="login-form">
        <h3>Login</h3>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className={loading ? "login-button loading" : "login-button"}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p>
          Already have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
