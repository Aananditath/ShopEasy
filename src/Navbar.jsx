// Navbar.jsx (updated)
import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">ShopEasy</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <button className="dropbtn">Categories ▾</button>
            <div className="dropdown-content">
              <Link to="/products?category=electronics">Electronics</Link>
              <Link to="/products?category=clothing">Clothing</Link>
              <Link to="/products?category=home">Home</Link>
              <Link to="/products?category=books">Books</Link>
            </div>
          </div>
          <Link to="/signin">Sign In</Link>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;