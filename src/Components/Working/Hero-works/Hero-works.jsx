import React from 'react';
import './Hero-works.css';

// Placeholder image (You can change this to your own image)
const heroImageSrc = "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HeroWork = () => {
  return (
    <section className="hero-work-section">
      {/* Background Overlay */}
      <div className="hero-work-overlay"></div>
      
      <div className="hero-work-container">
        
        {/* Left Side: Content */}
        <div className="hero-work-content">
          <span className="work-badge">Our Methodology</span>
          
          <h1 className="hero-work-title">
            Transparency at <br />
            <span className="highlight-text">Every Step.</span>
          </h1>
          
          <p className="hero-work-description">
            We believe in complete visibility. From capital injection to profit realization, 
            our data-driven process ensures your investment works as hard as you do.
          </p>
          
          {/* Stats instead of Buttons */}
          <div className="hero-work-stats">
            <div className="work-stat-item">
              <span className="work-stat-number">100%</span>
              <span className="work-stat-label">Ownership</span>
            </div>
            <div className="work-stat-item">
              <span className="work-stat-number">24/7</span>
              <span className="work-stat-label">Monitoring</span>
            </div>
            <div className="work-stat-item">
              <span className="work-stat-number">90</span>
              <span className="work-stat-label">Day Sprint</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hero-work-visual">
          <div className="work-image-glow">
            <img 
              src={heroImageSrc} 
              alt="Vendly Process Visualization" 
              className="main-work-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroWork;