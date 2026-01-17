import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to start your partnership? Have questions? We're here to help you every step of the way.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left: Info & Strategy Call */}
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-desc">
              Reach out to us through any of these channels, or fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="info-list">
              {/* Email */}
              <div className="info-item">
                <div className="info-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>hello@vendly.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="info-item">
                <div className="info-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+44 20 1234 5678</p>
                </div>
              </div>

              {/* Office */}
              <div className="info-item">
                <div className="info-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="info-text">
                  <h4>Office</h4>
                  <p>London, United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Strategy Box */}
            <div className="strategy-box">
              <div className="sb-header">
                <svg className="sb-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <h4 className="sb-title">Book a Strategy Call</h4>
              </div>
              <p className="sb-desc">
                Schedule a free 30-minute consultation with our team to discuss your goals and see if we're the right fit.
              </p>
              <button className="btn-strategy">Book Your Call</button>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="form-title">Send Us a Message</h3>
            
            <form>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-input" placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label className="form-label">Investment Budget</label>
                <select className="form-select">
                  <option>£1,500 (Standard Partnership)</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell us about your goals..."></textarea>
              </div>

              <button type="submit" className="btn-submit">Send Message</button>
              <span className="privacy-note">We respect your privacy and will never share your information.</span>
            </form>
          </div>

        </div>

        {/* Bottom Features */}
        <div className="contact-features">
          <div className="feature-card">
            <h4 className="fc-title">Fast Response</h4>
            <p className="fc-desc">We typically respond to all inquiries within 24 hours.</p>
          </div>
          <div className="feature-card">
            <h4 className="fc-title">No Pressure</h4>
            <p className="fc-desc">Take your time to make the right decision for you.</p>
          </div>
          <div className="feature-card">
            <h4 className="fc-title">Expert Guidance</h4>
            <p className="fc-desc">Our team is here to answer all your questions honestly.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;