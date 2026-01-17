import React from 'react';
import './TrustSection.css';

const TrustSection = () => {
  const trustData = [
    {
      id: 1,
      // Icon: Shield
      icon: (
        <svg className="trust-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "100% Account Ownership",
      // Bullet Points
      bullets: [
        "You own the Stripe, PayPal & Bank accounts.",
        "Direct payouts to your bank (we don't touch funds).",
        "Full admin access to your Shopify backend 24/7.",
        "We operate as 'Managers', you remain the 'Owner'."
      ]
    },
    {
      id: 2,
      // Icon: File Text
      icon: (
        <svg className="trust-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Transparent Reporting",
      // Bullet Points
      bullets: [
        "Real-time access to Ad Accounts & Spend.",
        "Detailed monthly P&L (Profit & Loss) sheets.",
        "No hidden 'agency fees' or markups on ads.",
        "Weekly performance updates from your manager."
      ]
    },
    {
      id: 3,
      // Icon: Dollar Sign
      icon: (
        <svg className="trust-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "70/30 Profit Split",
      // Bullet Points
      bullets: [
        "Performance-based model: We win when you win.",
        "You keep 70% of the Net Profit.",
        "We invoice our 30% share only *after* you get paid.",
        "Aligned incentives to scale profitably."
      ]
    }
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        
        <div className="trust-header">
          <h2 className="trust-title">Built on Trust & Transparency</h2>
        </div>

        <div className="trust-grid">
          {trustData.map((item) => (
            <div className="trust-card" key={item.id}>
              
              {/* Icon */}
              <div className="trust-icon-box">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="trust-card-title">{item.title}</h3>
              
              {/* Bullet List */}
              <ul className="trust-list">
                {item.bullets.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;