import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Brand Info */}
          <div className="footer-brand">
            {/* Updated Name */}
            <h2 className="footer-logo">
              Vendly<span>.</span>
            </h2>
            <p className="footer-desc">
              Building scalable e-commerce businesses through transparent profit-sharing partnerships. Your growth is our priority.
            </p>
          </div>

          {/* Legal Links */}
          <div className="footer-col">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Model</a></li>
              <li><a href="#">Success Stories</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-col">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {/* LinkedIn Icon */}
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Instagram Icon */}
              <a href="#" className="social-link" aria-label="Instagram">
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
            © 2026 Vendly. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;