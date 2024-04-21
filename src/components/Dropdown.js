// src/components/Dropdown.js
import React from 'react';

const Dropdown = ({ options }) => {
  return (
    <div className="dropdown">
      <select>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
