// src/components/Product.js
import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <span role="img" aria-label="Like">❤️</span>
    </div>
  );
};

export default Product;
