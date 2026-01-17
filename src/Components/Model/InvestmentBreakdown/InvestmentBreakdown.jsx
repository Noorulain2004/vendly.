import React, { useEffect, useRef, useState } from 'react';
import './InvestmentBreakdown.css';

const InvestmentBreakdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section className="investment-section" ref={sectionRef}>
      <div className="investment-container">
        
        <div className="inv-header">
          <h2 className="inv-title">Where Your £1,500 Goes</h2>
          <p className="inv-subtitle">
            Every penny is strategically allocated to maximize your return on investment.
          </p>
        </div>

        <div className="inv-grid">
          
          {/* Pie Chart with Corrected Labels */}
          <div className={`chart-wrapper ${isVisible ? 'animate-chart' : ''}`}>
            <div className="pie-chart">
              <span className="chart-label-overlay lbl-ads">Ads<br/>40%</span>
              <span className="chart-label-overlay lbl-inv">Inventory<br/>40%</span>
              <span className="chart-label-overlay lbl-tools">Tools<br/>20%</span>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="breakdown-list">
            
            {/* Ad Spend */}
            <div className={`breakdown-item ${isVisible ? 'show-item' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="bd-icon icon-green">
                <div className="bd-dot dot-green"></div>
              </div>
              <div className="bd-content">
                <div className="bd-header">
                  <h3 className="bd-title">Ad Spend</h3>
                  <span className="bd-percent pc-green">40%</span>
                </div>
                <p className="bd-desc">
                  £600 invested in targeted advertising campaigns across multiple platforms to drive qualified traffic.
                </p>
              </div>
            </div>

            {/* Inventory */}
            <div className={`breakdown-item ${isVisible ? 'show-item' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="bd-icon icon-orange">
                <div className="bd-dot dot-orange"></div>
              </div>
              <div className="bd-content">
                <div className="bd-header">
                  <h3 className="bd-title">Inventory</h3>
                  <span className="bd-percent pc-orange">40%</span>
                </div>
                <p className="bd-desc">
                  £600 allocated to sourcing high-quality products with proven demand and healthy profit margins.
                </p>
              </div>
            </div>

            {/* Tools */}
            <div className={`breakdown-item ${isVisible ? 'show-item' : ''}`} style={{ transitionDelay: '0.6s' }}>
              <div className="bd-icon icon-dark">
                <div className="bd-dot dot-dark"></div>
              </div>
              <div className="bd-content">
                <div className="bd-header">
                  <h3 className="bd-title">Tools</h3>
                  <span className="bd-percent pc-dark">20%</span>
                </div>
                <p className="bd-desc">
                  £300 for essential software, analytics tools, and backend management systems to streamline operations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InvestmentBreakdown;