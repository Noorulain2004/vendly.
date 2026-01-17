import React from 'react';

// 1. Import your components from the components folder
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Home/Hero/Hero';
import LogoStrip from '../Components/Home/LogoStrip/LogoStrip';
import Services from '../Components/Home/Services/Services';
import GrowthProcess from '../Components/Home/GrowthProcess/GrowthProcess';
import TrustSection from '../Components/Home/TrustSection/TrustSection';
import Testimonials from '../Components/Home/Testimonials/Testimonials';
import CTASection from '../Components/Home/CTASection/CTASection';
import Footer from '../Components/Footer/Footer'; 
const Home = () => {
  return (
    <div className="home-page">

      <Navbar />
      
      <main>
    <Hero />
      </main>
      <LogoStrip />
      <GrowthProcess />
      <Services />
      <TrustSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;