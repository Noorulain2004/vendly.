import React from 'react';
import Navbar from '../Components/Navbar/Navbar'; // Navbar import karein (agar App.jsx main global nahi hai to)
import Footer from '../Components/Footer/Footer';
import FAQSection from '../Components/FAQ/FAQ'; // Component ka naam check kr len

const FAQ = () => {
  return (
    <div>
       <Navbar /> 
      
     
      <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#ffffff' }}>
        <FAQSection />
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;