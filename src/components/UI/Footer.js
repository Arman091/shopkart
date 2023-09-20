

import React, { useState } from "react";
import "./Footer.css";
import ellipse from "../../assets/Ellipse 1.png";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation: Required field
    if (!name) {
      newErrors.name = "Name is required";
    }

    // Email validation: Required and valid email format
    if (!email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      newErrors.email = "Invalid email format";
    }

    // Message validation: Required field
    if (!message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const formIsValid = validateForm();

    if (formIsValid) {
     
      
      setSubmitted(true); //after submitting form to backend
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-left">
            <h3>News Letter</h3>
            <p>Get news about articles and updates in your inbox.</p>
          </div>
          <form className="footer-right">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <div className="error-message">{errors.message}</div>
            )}
           
          </form>
        </div>
        <h1>GET IN TOUCH</h1>
        <div className="ellipse" onClick={handleSubmit}>
          <img src={ellipse} alt="ellipese" />

          <p>{submitted ? "Message Sent!" : "SEND"}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2022 All Right Reserved By SG</p>
      </div>
    </div>
  );
}

export default Footer;
