import React, { useEffect, useRef, useState } from 'react';
import './ProfitSplit.css';

const ProfitSplit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger Animation on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="profit-section" ref={sectionRef}>
      <div className="profit-container">
        
        {/* Header */}
        <div className="ps-header">
          <h2 className="ps-title">The Profit Split</h2>
          <p className="ps-subtitle">
            We only win when you win – our success is directly tied to yours
          </p>
        </div>

        <div className="ps-grid">
          
          {/* Left: Bar Chart */}
          <div className="chart-container">
            
            {/* Bar 1: Your Share */}
            <div className="bar-group">
              <div className="y-label">Your<br/>Share</div>
              <div className="bar-track">
                <div 
                  className="bar-fill fill-green" 
                  style={{ width: isVisible ? '70%' : '0%' }} // Animate to 70%
                ></div>
              </div>
            </div>

            {/* Bar 2: Our Share */}
            <div className="bar-group">
              <div className="y-label">Our<br/>Share</div>
              <div className="bar-track">
                <div 
                  className="bar-fill fill-dark" 
                  style={{ width: isVisible ? '30%' : '0%' }} // Animate to 30%
                ></div>
              </div>
            </div>

            {/* X-Axis Numbers */}
            <div className="x-axis-labels">
              <span>0</span>
              <span>20</span>
              <span>40</span>
              <span>60</span>
              <span>80</span>
            </div>

          </div>

          {/* Right: Info Cards */}
          <div className="info-column">
            
            {/* Card 70% */}
            <div className="info-card">
              <div className="card-header">
                <div className="percent-circle circle-green">70%</div>
                <h3 className="card-title">Your Share</h3>
              </div>
              <p className="card-desc">
                You receive 70% of all net profits, distributed monthly directly to your account. Full transparency with detailed breakdowns.
              </p>
            </div>

            {/* Card 30% */}
            <div className="info-card">
              <div className="card-header">
                <div className="percent-circle circle-dark">30%</div>
                <h3 className="card-title">Our Share</h3>
              </div>
              <p className="card-desc">
                We take 30% only from profits, covering our expertise, management, and ongoing optimization. No hidden fees or charges.
              </p>
            </div>

            {/* Quote Box */}
            <div className="quote-box">
              "We only win when you win."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfitSplit;