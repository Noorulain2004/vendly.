import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link Import kia
import './Hero.css';

// Importing images from your specific folder structure
import bgLines from '../../../assets/Home/Herosection/background.png';
import logo from '../../../assets/Home/Herosection/logo.png';
import shopify from '../../../assets/Home/Herosection/Shopify.png';
import woo from '../../../assets/Home/Herosection/Woocommernce.png'; 
import ebay from '../../../assets/Home/Herosection/ebay.png';
import meta from '../../../assets/Home/Herosection/Meta.png';
import tiktok from '../../../assets/Home/Herosection/Tiktok.png';
import stripe from '../../../assets/Home/Herosection/Stripe.png';

const Hero = () => {
  return (
    <section className="hero-section">
      
      {/* 1. Text Content */}
      <div className="hero-content">
        <h1 className="hero-title">
        Together We Grow.<br />
        Together We Win.
        </h1>
        <p className="hero-subtitle">
          We build and manage scalable e-commerce businesses while you earn through 
          a transparent, profit-sharing model.
        </p>
        
        <div className="hero-cta-group">
          {/* 2. Button ko Link bana dia ta k Agreement page pr jaye */}
          <Link to="/agreement" className="btn-primary">
            Start Your Journey
          </Link>

          {/* Contact Link (Already correct) */}
          <Link to="/contact" className="link-text">
            Want to talk? Get in touch →
          </Link>
        </div>
      </div>

      {/* 2. Visual Network Area */}
      <div className="network-visual">
        
        {/* The Orange Lines Background */}
        <img src={bgLines} alt="Network lines" className="network-bg" />

        {/* --- Left Side Icons --- */}
        <div className="icon-node pos-ebay">
          <img src={ebay} alt="eBay" />
        </div>
        
        <div className="icon-node pos-woo">
          <img src={woo} alt="WooCommerce" />
        </div>

        <div className="icon-node pos-shop">
          <img src={shopify} alt="Shopify" />
        </div>

        {/* --- Center Logo --- */}
        <div className="icon-node center-logo">
          <img src={logo} alt="Vendly Logo" />
        </div>

        {/* --- Right Side Icons --- */}
        <div className="icon-node pos-tiktok">
          <img src={tiktok} alt="TikTok" />
        </div>

        <div className="icon-node pos-meta">
          <img src={meta} alt="Meta" />
        </div>

        <div className="icon-node pos-stripe">
          <img src={stripe} alt="Stripe" />
        </div>

      </div>
    </section>
  );
};

export default Hero;