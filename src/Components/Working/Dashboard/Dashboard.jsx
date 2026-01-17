import React, { useEffect, useState, useRef } from 'react';
import './Dashboard.css';

// Helper Component for Counting Numbers
const CountUp = ({ end, duration = 2000, prefix = "", suffix = "", startAnim }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnim) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      // Calculate current number
      if (progress < duration) {
        const nextCount = Math.min(Math.floor((progress / duration) * end), end);
        setCount(nextCount);
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it ends exactly on the number
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, startAnim]);

  // Format number with commas
  const formatted = new Intl.NumberFormat('en-US').format(count);
  return <>{prefix}{formatted}{suffix}</>;
};


const Dashboard = () => {
  const [startAnim, setStartAnim] = useState(false);
  const sectionRef = useRef(null);

  // Data for the Graph (7 Months)
  const chartData = [
    { label: 'Jan', value: 20 },
    { label: 'Feb', value: 35 },
    { label: 'Mar', value: 25 },
    { label: 'Apr', value: 55 },
    { label: 'May', value: 45 },
    { label: 'Jun', value: 80 },
    { label: 'Jul', value: 65 },
  ];

  // Trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStartAnim(true);
        observer.disconnect(); // Run only once
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dashboard-section" ref={sectionRef}>
      <div className="dashboard-container">
        
        {/* Header */}
        <div className="dash-header">
          <h2 className="dash-title">Real-Time Performance Tracking</h2>
          <p className="dash-desc">
            Track your business performance with our comprehensive dashboard that updates in real-time.
          </p>
        </div>

        <div className="dashboard-grid">
          
          {/* LEFT: Stats Column */}
          <div className="stats-column">
            
            {/* Card 1: Revenue */}
            <div className="stat-card">
              <div className="stat-label">Total Revenue</div>
              <div className="stat-value">
                <CountUp end={12450} prefix="£" startAnim={startAnim} />
              </div>
              <div className="stat-growth">
                +23% this month
              </div>
            </div>

            {/* Card 2: Orders */}
            <div className="stat-card">
              <div className="stat-label">Total Orders</div>
              <div className="stat-value">
                <CountUp end={847} startAnim={startAnim} />
              </div>
              <div className="stat-growth">
                +18% this month
              </div>
            </div>

            {/* Card 3: Profit */}
            <div className="stat-card">
              <div className="stat-label">Your Profit (70%)</div>
              <div className="stat-value" style={{ color: '#FF9500' }}> {/* Orange for Profit */}
                <CountUp end={6125} prefix="£" startAnim={startAnim} />
              </div>
              <div className="stat-growth">
                +23% this month
              </div>
            </div>

          </div>

          {/* RIGHT: Graph Column */}
          <div className="graph-column">
            
            {/* Background Lines for visual reference */}
            <div className="graph-background">
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
            </div>

            {/* Bars */}
            <div className="bars-container">
              {chartData.map((item, index) => (
                <div className="bar-wrapper" key={index}>
                  
                  {/* Tooltip */}
                  <div className="bar-tooltip">£{item.value}k</div>
                  
                  {/* The Animated Bar */}
                  <div 
                    className="bar" 
                    style={{ 
                      height: startAnim ? `${item.value}%` : '0%', // Animate height
                      transitionDelay: `${index * 0.1}s` // Stagger animation
                    }}
                  ></div>
                  
                  <div className="bar-label">{item.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Dashboard;