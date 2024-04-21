// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';
import Dropdown from '../components/Dropdown'; // Import Dropdown component
import axios from 'axios';
import '../App.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Fetch product data from Fake Store API
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const dropdownOptions = [
    { label: 'Recommended', value: 'recommended' },
    { label: 'Newest', value: 'newest' },
    { label: 'Price High to Low', value: 'price_high_to_low' },
    { label: 'Price Low to High', value: 'price_low_to_high' },
    { label: 'Popular', value: 'popular' }
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <h1>Discover our products</h1>
        <Dropdown options={dropdownOptions} />
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="sidebar-toggle">
          {sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>
        <div className="product-list">
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
    </div>
  );
};

export default Home;
