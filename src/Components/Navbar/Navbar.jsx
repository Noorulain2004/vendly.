import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // --- SCROLL DETECTION LOGIC ---
  useEffect(() => {
    const controlNavbar = () => {
      // Current scroll position
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Agar neechy scroll kr rhy hain aur 100px se agay hain -> HIDE
        setIsVisible(false);
      } else {
        // Agar uper scroll kr rhy hain -> SHOW
        setIsVisible(true);
      }

      // Remember current position for next time
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Dynamic Class add ki hai: 'navbar-hidden' agar visible false ho */}
      <nav className={`navbar-wrapper ${isVisible ? '' : 'navbar-hidden'}`}>
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
              <Link to="/faq" className="nav-link" onClick={toggleMenu}>FAQ</Link>
              <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
              <Link to="/agreement" className="btn-partner" onClick={toggleMenu}>Start Partnership</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;