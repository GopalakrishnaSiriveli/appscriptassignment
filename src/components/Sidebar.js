// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const dropdownOptions = ['All', 'Men', 'Women', 'Kids'];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      
      <div className="options">
        <h3>Customise</h3>
        <div className="dropdown-container">
          <label>Ideal For:</label>
          <select>
            {dropdownOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="dropdown-container">
          <label>Work:</label>
          <select>
            {dropdownOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="dropdown-container">
          <label>Occasion:</label>
          <select>
            {dropdownOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="dropdown-container">
          <label>Fabric:</label>
          <select>
            {dropdownOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="dropdown-container">
          <label>Segment:</label>
          <select>
            {dropdownOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="dropdown-container">
          <label>Suitable For:</label>
          <select>
            {dropdownOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="dropdown-container">
          <label>Raw Materials:</label>
          <select>
            {dropdownOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="dropdown-container">
          <label>Pattern:</label>
          <select>
            {dropdownOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
