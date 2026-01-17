import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar-wrapper">
        <div className="navbar-container">
          
          {/* Logo */}
          <Link to="/" className="logo">
            Vendly 
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/how-it-works" className="nav-link">How It Works</Link>
            <Link to="/our-model" className="nav-link">Our Model</Link>
            <Link to="/faq" className="nav-link">FAQ</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </div>

          {/* Right Side */}
          <div className="navbar-actions">
            {/* LINKED TO AGREEMENT PAGE */}
            <Link to="/agreement" className="btn-partner desktop-only">
              Start Partnership
            </Link>

            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mobile-menu">
              <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
              <Link to="/how-it-works" className="nav-link" onClick={toggleMenu}>How It Works</Link>
              <Link to="/our-model" className="nav-link" onClick={toggleMenu}>Our Model</Link>
              
              {/* FIXED: All links are now <Link> components */}
              <Link to="/faq" className="nav-link" onClick={toggleMenu}>FAQ</Link>
              <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
              
              {/* FIXED: Start Partnership now goes to Agreement */}
              <Link to="/agreement" className="btn-partner" onClick={toggleMenu}>Start Partnership</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;