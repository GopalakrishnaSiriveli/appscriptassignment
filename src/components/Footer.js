// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="follow-us">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          {/* Add more social media icons as needed */}
        </div>
      </section>
      <section className="contact-us">
        <h3>Contact Us</h3>
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
        {/* Add more contact details as needed */}
      </section>
      <section className="subscribe">
        <h3>Subscribe</h3>
        <div className="subscription-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
