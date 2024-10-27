import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/tips" className="nav-link">Tips & Tricks</Link>
      <Link to="/shop" className="nav-link">Shop</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  );
};

export default Navigation;
