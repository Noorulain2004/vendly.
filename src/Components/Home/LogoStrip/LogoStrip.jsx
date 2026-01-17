import React from 'react';
import './LogoStrip.css';

// Importing Images
import amazon from '../../../assets/Home/Borderline/amazon.png';
import bigcommerce from '../../../assets/Home/Borderline/bigcommerce.png';
import ebay from '../../../assets/Home/Borderline/ebay.png';
import etsy from '../../../assets/Home/Borderline/etsy.png';
import shopify from '../../../assets/Home/Borderline/shopify.png';
import woocommerce from '../../../assets/Home/Borderline/woocommerce.png';

const LogoStrip = () => {
  const logos = [
    // Standard Size (Jo pehly sy theek hain)
    { id: 1, src: amazon, alt: 'Amazon', className: 'brand-logo' },
    { id: 2, src: ebay, alt: 'eBay', className: 'brand-logo' },
    { id: 3, src: etsy, alt: 'Etsy', className: 'brand-logo' },

    // Bigger Size (Jo choty lag rhy thy)
    { id: 4, src: shopify, alt: 'Shopify', className: 'brand-logo logo-tall' },
    { id: 5, src: woocommerce, alt: 'WooCommerce', className: 'brand-logo logo-tall' },
    { id: 6, src: bigcommerce, alt: 'BigCommerce', className: 'brand-logo logo-tall' },
    
  ];

  return (
    <section className="logo-section">
      <div className="logo-container">
        {logos.map((logo) => (
          <img 
            key={logo.id} 
            src={logo.src} 
            alt={logo.alt} 
            // Ab hum specific class use kr rhy hain
            className={logo.className} 
          />
        ))}
      </div>
    </section>
  );
};

export default LogoStrip;