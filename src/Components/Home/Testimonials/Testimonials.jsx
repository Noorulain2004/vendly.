import React from 'react';
import './Testimonials.css';

// Importing Images (Note: Folder name matched exactly as per your screenshot)
import sarahImg from '../../../assets/Home/Testominals/Sarah.jpg';
import davidImg from '../../../assets/Home/Testominals/David.jpg';
import michaelImg from '../../../assets/Home/Testominals/Michael.jpg';
import emmaImg from '../../../assets/Home/Testominals/Emma.jpg';
import jamesImg from '../../../assets/Home/Testominals/James.jpg';

const Testimonials = () => {
  // Real E-commerce Service Reviews
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "E-com Brand Owner",
      quote: "I was skeptical about handing over control, but their team proved me wrong in month one. My store's revenue doubled, and I finally have time to focus on product development.",
      image: sarahImg
    },
    {
      id: 2,
      name: "David Chen",
      role: "Dropshipper",
      quote: "The 90-day framework is real. They didn't just run ads; they fixed my entire funnel and supply chain. Profit margins went from 8% to 22% in just 10 weeks.",
      image: davidImg
    },
    {
      id: 3,
      name: "Michael Ross",
      role: "Serial Entrepreneur",
      quote: "Transparency was my biggest concern. Their monthly P&L reports are cleaner than my accountant's. Honest partners who actually know how to scale.",
      image: michaelImg
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Store Owner",
      quote: "Stopped losing money on bad products. Their manual sourcing team found me a winner that’s currently doing $2k/day consistently. Highly recommended.",
      image: emmaImg
    },
    {
      id: 5,
      name: "James Carter",
      role: "Investor",
      quote: "I treat this as an investment portfolio. They manage the operations, I provide the capital. The 70/30 split is fair considering the amount of work they put in.",
      image: jamesImg
    }
  ];

  return (
    <section className="testimonials-section">
      
      {/* Header */}
      <div className="testi-header">
        <span className="testi-label">Success Stories</span>
        <h2 className="testi-title">Trusted by 500+ Store Owners</h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          
          {/* Loop 1: Original Data */}
          {reviews.map((review) => (
            <div className="testi-card" key={`a-${review.id}`}>
              <div className="star-rating">★★★★★</div>
              <p className="testi-quote">"{review.quote}"</p>
              
              <div className="testi-user">
                {/* Changed from div to img */}
                <img src={review.image} alt={review.name} className="user-avatar" />
                <div className="user-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Loop 2: Duplicate Data (For seamless scrolling) */}
          {reviews.map((review) => (
            <div className="testi-card" key={`b-${review.id}`}>
              <div className="star-rating">★★★★★</div>
              <p className="testi-quote">"{review.quote}"</p>
              
              <div className="testi-user">
                 {/* Changed from div to img */}
                 <img src={review.image} alt={review.name} className="user-avatar" />
                <div className="user-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Testimonials;