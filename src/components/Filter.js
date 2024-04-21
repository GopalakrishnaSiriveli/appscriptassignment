// src/components/Filter.js
import React from 'react';
import './Filter.css';

const Filter = () => {
  return (
    <div className="filter">
      <h3>Customise</h3>
      <label>
        <input type="checkbox" /> Men
      </label>
      <label>
        <input type="checkbox" /> Women
      </label>
      <label>
        <input type="checkbox" /> Kids
      </label>
      {/* Add more filter options here */}
    </div>
  );
};

export default Filter;
