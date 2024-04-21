import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import './App.css';

const App = () => {
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

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <h1>Discover our products</h1>
        <p>Lorem ipsum dorol amet consectutor. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.  </p>
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
      <footer className="black-bg">
        {/* Contact Us section */}
        <section>Contact Us</section>
        {/* Follow Us section */}
        <section>Follow Us</section>
        {/* Quick Links section */}
        <section>Quick Links</section>
        {/* Subscribe section */}
        <section>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </section>
      </footer>
    </div>
  );
};

export default App;
