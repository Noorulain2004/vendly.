import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Heroworks from '../Components/Working/Hero-works/Hero-works';
import HowItWorks from '../Components/Working/HowItWorks/HowItWorks'; // Ensure this path matches your folder structure
import Dashboard from '../Components/Working/Dashboard/Dashboard';
const Working = () => {
  return (
    <div>
      {/* Top Navigation */}
      <Navbar />
      
      {/* Main Content (The How It Works Section) */}
      <div style={{ paddingTop: '80px' }}> {/* Navbar k peechay chupny sy bachany k liye padding */}
        <Heroworks />
        <HowItWorks />
        <Dashboard />
        
      </div>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default Working;