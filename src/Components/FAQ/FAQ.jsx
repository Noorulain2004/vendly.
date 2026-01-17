import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 0 means first is open by default

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is the £1,500 a fee?",
      answer: "No, the £1,500 is not a fee to us. It is your investment capital that goes directly into building and scaling your e-commerce business. 40% is allocated to advertising, 40% to inventory, and 20% to essential tools and software. This is your money working for you, not a payment to us. We only earn when you earn through the 70/30 profit split."
    },
    {
      question: "How long until I see profits?",
      answer: "Typically, our partners start seeing initial traction within the first 30-45 days as we test products. Sustainable, scalable profits usually begin to materialize around the 60-90 day mark once winning products are identified and scaled."
    },
    {
      question: "Do I really own the account 100%?",
      answer: "Yes, absolutely. You retain 100% ownership of the ad accounts, store assets, and customer data. We act as strategic operating partners, but the asset belongs entirely to you."
    },
    {
      question: "What happens if the business doesn't make money?",
      answer: "Our incentives are aligned. If you don't profit, we don't get paid our 30% share. We have strict risk management protocols (stopping ads that don't convert) to protect your capital."
    },
    {
      question: "Can I be involved in business decisions?",
      answer: "While we handle the day-to-day operations to make this passive for you, we value transparency. You have access to dashboards and can be involved in high-level strategy discussions if you choose, but it is not required."
    },
    {
      question: "How do I receive my profits?",
      answer: "Profits are calculated monthly. After deducting ad spend and COGS (Cost of Goods Sold), the net profit is split. Your 70% share is transferred directly to your designated bank account."
    },
    {
      question: "Do I need any e-commerce experience?",
      answer: "Not at all. This model is designed for investors who want exposure to e-commerce without needing to learn the technical skills. Our team handles everything from product sourcing to ad buying."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        
        {/* Header */}
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know about our partnership model</p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                <span className="q-text">{item.question}</span>
                <span className="toggle-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className="faq-answer"
                style={{ 
                  maxHeight: activeIndex === index ? '300px' : '0px'
                }}
              >
                <p className="a-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="faq-cta-box">
          <h3 className="cta-title">Still Have Questions?</h3>
          <p className="cta-desc">Our team is here to help. Book a free consultation or send us a message.</p>
          <div className="cta-buttons">
            <button className="btn-faq-primary">Contact Us</button>
            <button className="btn-faq-secondary">Book a Call</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;