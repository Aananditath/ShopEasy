import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-fullscreen">
      <div className="checkout-header">
        <h1>ShopEasy</h1>
        <div className="checkout-nav">
          <span>Categories</span>
          <span>Sign In</span>
          <span>Cart (1)</span>
        </div>
      </div>

      <div className="checkout-container">
        <h2>Checkout</h2>
        
        <div className="checkout-content">
          <div className="checkout-form-section">
            <h3>Shipping Information</h3>
            <form className="checkout-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" placeholder="Enter your address" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" placeholder="Enter your city" />
                </div>
                <div className="form-group">
                  <label>Postal Code</label>
                  <input type="text" placeholder="Enter postal code" />
                </div>
              </div>
            </form>
          </div>

          <div className="checkout-summary">
            <h3>Order Summary</h3>
            <div className="order-items">
              <div className="order-item">
                <span>Cotton T-Shirt</span>
                <span>$199.00</span>
              </div>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>$199.00</span>
            </div>
          </div>
        </div>

        <div className="checkout-actions">
          <Link to="/cart" className="back-btn">Back to Cart</Link>
          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;