import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed
import './Agreement.css';

const Agreement = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const sigPad = useRef({});

  // Function to clear signature
  const clearSig = () => {
    sigPad.current.clear();
    setIsSigned(false);
  };

  // Function to detect when drawing ends
  const onSigEnd = () => {
    if (!sigPad.current.isEmpty()) {
      setIsSigned(true);
    }
  };

  const handleConfirm = () => {
    if (isChecked && !sigPad.current.isEmpty()) {
      // Logic for payment or API call goes here
      const signatureImage = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
      console.log("Agreement Signed! Proceeding to Payment...");
      // navigate('/payment'); // Example navigation
    }
  };

  return (
    <div className="agreement-page">
      <div className="agreement-paper">
        
        {/* Header */}
        <div className="agree-header">
          <span className="agree-sub-badge">Partnership Commitment Protocol</span>
          <h1 className="agree-title">Partnership Agreement</h1>
          <p className="agree-intro">
            This Partnership Agreement ("Agreement") is entered into as of the date of signature below between <strong>Together We Grow ("Agency")</strong> and the signatory <strong>("Partner")</strong>.
          </p>
        </div>

        {/* Terms Content */}
        <div className="terms-content">
          
          <div className="term-block">
            <h3 className="term-title">1. Partnership Terms</h3>
            <p className="term-text">The Partner agrees to invest £1,500 for the establishment and initial operation of an e-commerce business. This investment will be allocated as follows:</p>
            <ul className="term-list">
              <li>40% (£600) for advertising and marketing campaigns</li>
              <li>40% (£600) for inventory and product sourcing</li>
              <li>20% (£300) for tools, software, and infrastructure</li>
            </ul>
          </div>

          <div className="term-block">
            <h3 className="term-title">2. Profit Distribution</h3>
            <p className="term-text">Net profits generated from the e-commerce business will be distributed monthly according to the following split:</p>
            <ul className="term-list">
              <li>Partner receives 70% of all net profits</li>
              <li>Agency receives 30% of all net profits</li>
            </ul>
          </div>

          <div className="term-block">
            <h3 className="term-title">3. Account Ownership</h3>
            <p className="term-text">The Partner maintains 100% ownership of the e-commerce account, including all associated assets, customer data, and intellectual property. The Agency acts solely as a service provider and management consultant.</p>
          </div>

          <div className="term-block">
            <h3 className="term-title">4. Transparency & Reporting</h3>
            <p className="term-text">The Agency commits to providing:</p>
            <ul className="term-list">
              <li>Real-time dashboard access to all business metrics</li>
              <li>Monthly detailed financial reports</li>
              <li>Complete transparency on all expenses and revenues</li>
              <li>Regular strategy consultations</li>
            </ul>
          </div>

          <div className="term-block">
            <h3 className="term-title">5. Duration & Termination</h3>
            <p className="term-text">This Agreement shall remain in effect for a minimum period of 90 days from the date of signature. Either party may terminate with 30 days written notice thereafter. Upon termination, the Partner retains full ownership of the business and all assets.</p>
          </div>

          <div className="term-block">
            <h3 className="term-title">6. Responsibilities</h3>
            <p className="term-text"><strong>Agency Responsibilities:</strong> Business setup, marketing management, product sourcing, customer service, and scaling.</p>
            <p className="term-text" style={{marginTop: '5px'}}><strong>Partner Responsibilities:</strong> Provide initial investment, review reports, and maintain communication.</p>
          </div>

          <div className="term-block">
            <h3 className="term-title">7. Risk Acknowledgment</h3>
            <p className="term-text">The Partner acknowledges that e-commerce business involves inherent risks, and profits are not guaranteed. Past performance does not guarantee future results.</p>
          </div>

          <div className="term-block">
            <h3 className="term-title">8. Governing Law</h3>
            <p className="term-text">This Agreement shall be governed by and construed in accordance with the laws of England and Wales.</p>
          </div>

        </div>

        {/* Interaction Area (Checkbox & Signature) */}
        <div className="interaction-area">
          
          <div className="checkbox-group">
            <input 
              type="checkbox" 
              id="agree-check" 
              className="custom-checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="agree-check" className="checkbox-label">
              I have read, understood, and agree to the terms and conditions outlined in this Partnership Agreement. I acknowledge the risks involved and commit to the responsibilities as stated above.
            </label>
          </div>

          <div className="signature-section">
            <label className="sig-label">Draw your signature here:</label>
            <div className="sig-canvas-wrapper">
              <SignatureCanvas 
                ref={sigPad}
                penColor='black'
                canvasProps={{width: 720, height: 200, className: 'sigCanvas'}}
                onEnd={onSigEnd}
              />
              {/* Clear Button (X) */}
              <button className="clear-sig-btn" onClick={clearSig} title="Clear Signature">
                ✕
              </button>
            </div>
            <span className="sig-hint">Sign above using your mouse or touchscreen</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="action-footer">
          <button 
            className="btn-confirm" 
            disabled={!isChecked || !isSigned} // Disable if not checked or not signed
            onClick={handleConfirm}
          >
            Confirm & Proceed to Payment
          </button>
          
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Agreement;