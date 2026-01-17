import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link import kia
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        
        <h2 className="cta-title">
          Ready to Build Your <span className="highlight-text">Passive Income?</span>
        </h2>
        
        <p className="cta-desc">
          Join successful partners who are already earning through our proven system.
        </p>
        
        {/* 2. Button ko Agreement Page sy link kr dia */}
        <Link to="/agreement" className="cta-btn">
          Start Partnership
        </Link>

      </div>
    </section>
  );
};

export default CTASection;