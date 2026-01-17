import React from 'react';
import './GrowthProcess.css';

const GrowthProcess = () => {
  return (
    <section className="growth-section">
      <div className="growth-container">
        
        {/* Header */}
        <div className="growth-header">
          <span className="growth-badge">OUR PROVEN FRAMEWORK</span>
          <h2 className="growth-title">
            The 90-Day <span>Traction Strategy.</span>
          </h2>
          <p className="growth-desc">
            Real e-commerce growth takes time. We require a 3-month commitment to test, optimize, and scale effectively.
          </p>
        </div>

        {/* The Grid */}
        <div className="process-grid">
          
          {/* MONTH 1 - Foundation (Shield Icon) */}
          <div className="process-card">
            <div className="icon-circle">
              {/* Shield Icon */}
              <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <span className="card-meta">Month 1</span>
            <h3 className="card-title">Foundation & Validation</h3>
            
            <ul className="card-list">
              <li>Complete store audit & setup overhaul.</li>
              <li>Rigorous product & competitor research.</li>
              <li>Initial ad testing to gather data.</li>
              <li>Setting up tracking pixels correctly.</li>
            </ul>
          </div>

          {/* MONTH 2 - Optimization (Chart Icon) */}
          <div className="process-card">
            <div className="icon-circle">
              {/* Trending Up Chart Icon */}
              <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>

            <span className="card-meta">Month 2</span>
            <h3 className="card-title">Optimization & Profit</h3>
            
            <ul className="card-list">
              <li>Doubling down on winning products.</li>
              <li>Creative testing (new angles, hooks).</li>
              <li>Improving Average Order Value (AOV).</li>
              <li>Shifting focus to net profitability.</li>
            </ul>
          </div>

          {/* MONTH 3 - Passive Income (Dollar/Scale Icon) */}
          <div className="process-card">
            <div className="icon-circle">
              {/* Dollar/Currency Icon */}
              <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <span className="card-meta">Month 3</span>
            <h3 className="card-title">Scaling & Systems</h3>
            
            <ul className="card-list">
              <li>Aggressively scaling winning budgets.</li>
              <li>Implementing email/SMS backend flows.</li>
              <li>Exploring secondary traffic channels.</li>
              <li>Establishing consistent revenue.</li>
            </ul>
          </div>

        </div>

        <a href="#contact" className="growth-cta-btn">
          Start Your 90-Day Sprint
        </a>

      </div>
    </section>
  );
};

export default GrowthProcess;