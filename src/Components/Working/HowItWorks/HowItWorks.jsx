import React, { useEffect } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  
  const steps = [
    {
      id: 1,
      title: "Onboarding",
      desc: "We start with a comprehensive onboarding process where we understand your goals, set up your e-commerce infrastructure, and align our strategies.",
      points: [
        "Initial consultation call",
        "Account setup and verification",
        "Strategy development",
        "Legal documentation"
      ],
      // Icon: Document
      icon: (
        <svg className="hiw-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Capital Injection",
      desc: "Your investment is strategically allocated to maximize growth potential and minimize risk.",
      points: [
        "40% allocated to targeted ad campaigns",
        "40% invested in quality inventory",
        "20% for essential tools and software",
        "Complete transparency on fund usage"
      ],
      // Icon: Coins
      icon: (
        <svg className="hiw-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Scaling",
      desc: "Our expert team implements proven strategies to rapidly scale your business while you maintain full oversight.",
      points: [
        "Data-driven marketing campaigns",
        "Automated order fulfillment",
        "Customer service management",
        "Continuous optimization"
      ],
      // Icon: Rocket
      icon: (
        <svg className="hiw-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Growth & Profits",
      desc: "Watch your business grow through real-time dashboards as profits are automatically split 70/30 in your favor.",
      points: [
        "Real-time performance tracking",
        "Monthly profit distributions",
        "Transparent reporting",
        "Ongoing strategic support"
      ],
      // Icon: Chart
      icon: (
        <svg className="hiw-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  // Logic for Animation on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const rows = document.querySelectorAll('.hiw-row');
    rows.forEach(row => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hiw-section">
      <div className="hiw-container">
        
        {/* Header */}
        <div className="hiw-header">
          <span className="hiw-badge">How It Works</span>
          <h2 className="hiw-title">
            Our Proven 4-Step Process.
          </h2>
          <p className="hiw-desc">
            Our proven 4-step process transforms your investment into a thriving e-commerce business.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          {steps.map((step) => (
            <div className="hiw-row" key={step.id}>
              
              {/* Content Side */}
              <div className="hiw-card">
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.desc}</p>
                <ul className="hiw-bullets">
                  {step.points.map((point, i) => (
                    <li key={i}>
                      <span className="dot"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Side */}
              <div className="hiw-visual">
                <div className="icon-circle-lg">
                  {step.icon}
                  <div className="step-badge">{step.id}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;