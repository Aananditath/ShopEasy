import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-fullscreen">
      <div className="signin-container">
        <h1 className="signin-logo">ShopEasy</h1>
        
        <div className="signin-card">
          <h2>Sign In</h2>
          <form className="signin-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="signin-btn">Sign In</button>
          </form>
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;