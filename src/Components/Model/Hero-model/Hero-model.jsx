import React from 'react';
import './Hero-model.css';

// Placeholder for a "Business Strategy/Growth" image
const modelImageSrc = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop";

const HeroModel = () => {
  return (
    <section className="hero-model-section">
      <div className="hero-model-overlay"></div>

      <div className="hero-model-container">
        
        {/* Left Side: Content */}
        <div className="hero-model-content">
          <span className="model-badge">Partnership First</span>
          
          <h1 className="hero-model-title">
            Our Model: <br />
            <span>Shared Success.</span>
          </h1>
          
          <p className="hero-model-desc">
            Complete transparency in how we invest and share profits with you. 
            We only win when you win aligning our incentives for maximum growth.
          </p>
          
          {/* Key Features List */}
          <div className="model-features">
            <div className="model-feature-item">
              <div className="check-circle">✓</div>
              No hidden management fees.
            </div>
            <div className="model-feature-item">
              <div className="check-circle">✓</div>
              You own 100% of the assets.
            </div>
            <div className="model-feature-item">
              <div className="check-circle">✓</div>
              Real-time financial reporting.
            </div>
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="hero-model-visual">
          <div className="model-image-wrapper">
            <img 
              src={modelImageSrc} 
              alt="Growth Chart Visualization" 
              className="main-model-image"
            />
            
            {/* Floating 70% Badge */}
            <div className="floating-badge fb-top">
              <span className="fb-number fb-highlight">70%</span>
              <span className="fb-label">Your Share</span>
            </div>

            {/* Floating 30% Badge */}
            <div className="floating-badge fb-bottom">
              <span className="fb-number">30%</span>
              <span className="fb-label">Our Fee</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroModel;