import React, { useState } from "react";
import "./contact.css";
import Button from "../../theme/button/Button";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Divider } from "@mui/material";
const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Message:", message);
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container contact-section">
      <h2>Contact us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <div className="contact">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                placeholder="Your name"
                type="text"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                placeholder="Your email address"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                placeholder="Type your message..."
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <Button type={"submit"} link="/" text="Submit"></Button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Availble also on :</h2>
          <div className="contact-item">
            <EmailIcon sx={{marginRight:"15px"}} />
            <div >
              <h4>Email</h4>
              <p>Healthy 24.@Email.com</p>
            </div>
          </div>
          <Divider sx={{margin:"20px 0"}} />

          <div className="contact-item">
            <LocationOnIcon sx={{marginRight:"15px"}} />
            <div>
              <h4>Address</h4>
              <p>Lorem ipsum dolor sit amet, consectetur 33</p>
              
            </div>

          </div>
          <Divider sx={{margin:"20px 0"}} />

          <div className="contact-item">
            <LocalPhoneIcon sx={{marginRight:"15px"}} />
            <div>
              <h4>Phone Number</h4>
              <p>+1 (555) 000-0000</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
