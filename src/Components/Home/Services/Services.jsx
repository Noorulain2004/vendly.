import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link import kia
import './Services.css';

// Import Images 
import shopifyImg from '../../../assets/Home/services/Shopify store.png';
import researchImg from '../../../assets/Home/services/Product research system.png';
import sourcingImg from '../../../assets/Home/services/Product sourcing.png';
import importsImg from '../../../assets/Home/services/Product imports.png';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      label: "Account Management",
      title: "Complete Store Management",
      desc: "We don't just build stores; we run them. Our dedicated team handles A-Z management of your e-commerce account, from daily operations to technical health, so you can enjoy passive income.",
      image: shopifyImg,
      linkText: "Start Partnership",
      path: "/agreement" // 2. Yahan Link Add kia (Agreement Page)
    },
    {
      id: 2,
      label: "Expert Hunting",
      title: "Winning Product Research",
      desc: "No bots, just experts. Our team manually analyzes market trends, competitor data, and profit margins to find high-converting products that are proven to sell in the current market.",
      image: researchImg,
      linkText: "See Our Strategy",
      path: "/how-it-works" // 2. Link Add kia (How It Works Page)
    },
    {
      id: 3,
      label: "Logistics",
      title: "Sourcing & Fulfillment",
      desc: "We handle the headache of logistics. We negotiate directly with suppliers to get the best rates, manage inventory, and ensure your customers receive their orders on time with custom branding.",
      image: sourcingImg,
      linkText: "Check Quote",
      path: "/contact" // 2. Link Add kia (Contact Page)
    },
    {
      id: 4,
      label: "Growth & Scaling",
      title: "Sales & Marketing",
      desc: "Scaling requires strategy, not just luck. We manage your ad campaigns, optimize conversion rates, and implement growth strategies to take your business to the next level.",
      image: importsImg,
      linkText: "Scale With Us",
      path: "/our-model" // 2. Link Add kia (Our Model Page)
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div 
            key={service.id} 
            className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            {/* Text Side */}
            <div className="service-content">
              <span className="service-label">{service.label}</span>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.desc}</p>
              
              {/* 3. <a> tag ko <Link> se replace kia */}
              <Link to={service.path} className="service-link">
                {service.linkText}
                <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Image Side */}
            <div className="service-image-box">
              <img src={service.image} alt={service.title} className="service-img" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;