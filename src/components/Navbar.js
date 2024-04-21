// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#shop">Shop</a></li>
        <li className="navbar-item"><a href="#skills">Skills</a></li>
        <li className="navbar-item"><a href="#stories">Stories</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#contactus">Contact Us</a></li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
