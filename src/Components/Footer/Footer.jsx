import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link import kia
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Auto update year

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <h2 className="footer-logo">
                Vendly<span>.</span>
              </h2>
            </Link>
            <p className="footer-desc">
              Building scalable e-commerce businesses through transparent profit-sharing partnerships. Your growth is our priority.
            </p>
          </div>

          {/* Column 1: Company Links */}
          <div className="footer-col">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/our-model">Our Model</Link></li>
            </ul>
          </div>

          {/* Column 2: Support & Legal */}
          <div className="footer-col">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/agreement">Start Partnership</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {/* LinkedIn (External Link) */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Instagram (External Link) */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Vendly. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;