import React, { useEffect, useRef, useState } from 'react';
import './ProfitSplit.css';

const ProfitSplit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

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
            A partnership built on fairness. We align our incentives with your success.
          </p>
        </div>

        {/* --- SECTION 1: The Chart --- */}
        <div className="ps-main-grid">
          
          {/* Left: Bar Chart */}
          <div className="chart-container">
            
            {/* Bar 1: Your Share (Orange) */}
            <div className="bar-group">
              <div className="y-label">Your<br/>Share</div>
              <div className="bar-track">
                <div 
                  className={`bar-fill fill-orange ${isVisible ? 'filled' : ''}`} 
                  style={{ width: isVisible ? '70%' : '0%' }}
                >
                  <span className="bar-text-overlay">70%</span>
                </div>
              </div>
            </div>

            {/* Bar 2: Our Share (Dark) */}
            <div className="bar-group">
              <div className="y-label">Our<br/>Share</div>
              <div className="bar-track">
                <div 
                  className={`bar-fill fill-dark ${isVisible ? 'filled' : ''}`}
                  style={{ width: isVisible ? '30%' : '0%' }}
                >
                  <span className="bar-text-overlay">30%</span>
                </div>
              </div>
            </div>

            <div className="x-axis-labels">
              <span>0</span><span>20</span><span>40</span><span>60</span><span>80</span><span>100</span>
            </div>
          </div>

          {/* Right: Explanation */}
          <div className="info-column">
            <div className="split-card">
              <div className="sc-header">
                <div className="percent-badge">70%</div>
                <h3 className="sc-title">Your Net Profit</h3>
              </div>
              <p className="sc-desc">
                You keep the lion's share. 70% of all net profits are distributed directly to you every month. You own the assets, the data, and the revenue.
              </p>
              <div className="quote-highlight">
                "We don't get paid unless you are profitable."
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: Feature Cards (No Hidden Costs, etc) --- */}
        <div className="benefits-grid">
          
          {/* Card 1: No Hidden Costs */}
          <div className="benefit-card">
            <div className="icon-box">
              {/* Wallet/Money Icon */}
              <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="benefit-title">No Hidden Costs</h3>
            <p className="benefit-desc">
              The £1,500 investment is your only upfront cost. No monthly management fees, no surprise charges, no setup fees.
            </p>
          </div>

          {/* Card 2: Risk Aligned */}
          <div className="benefit-card">
            <div className="icon-box">
              {/* Handshake/Shield Icon */}
              <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="benefit-title">Risk Aligned</h3>
            <p className="benefit-desc">
              We share the risk with you. Our income depends entirely on your business's success, forcing us to perform at our best.
            </p>
          </div>

          {/* Card 3: Full Transparency */}
          <div className="benefit-card">
            <div className="icon-box">
              {/* Eye/Search Icon */}
              <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="benefit-title">Full Transparency</h3>
            <p className="benefit-desc">
              Real-time access to all metrics, ad spend, revenue, and profit calculations. Nothing is hidden from you.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfitSplit;