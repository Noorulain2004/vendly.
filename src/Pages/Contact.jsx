import React from 'react';
import Navbar from '../Components/Navbar/Navbar'; 
import Footer from '../Components/Footer/Footer';
import ContactSection from '../Components/Contact/Contact'; // 1. Import ka naam change kia ta k conflict na ho

const ContactUs = () => { // 2. Page ka naam ContactUs rakha
  return (
    <div>
      {/* Agar App.jsx main Navbar global hai to yahan sy hata den */}
      {/* <Navbar /> */}
      
      <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#ffffff' }}>
        
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;