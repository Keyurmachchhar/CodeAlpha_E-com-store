// src/components/Contact.js
import React, { useState } from 'react';
import './CSS/Contact.css';
import logo from '../Components/Assets/logo.png';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/contact_us', formData)
      .then(response => {
        alert(response.data.message);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <div className="contact-body">
      <div className="contact-container">
        <div className="contact-left">
          <div className="company-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="company-details">
            <h3>E-com store</h3>
            <p>1234 Street Name, City, State, 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@company.com</p>
          </div>
        </div>
        <div className="contact-right">
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
