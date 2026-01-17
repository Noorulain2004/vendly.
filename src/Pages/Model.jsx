import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import HeroModel from '../Components/Model/Hero-model/Hero-model';
import InvestmentBreakdown from '../Components/Model/InvestmentBreakdown/InvestmentBreakdown';
import ProfitSplit from '../Components/Model/ProfitSplit/ProfitSplit';
const Model = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div style={{ paddingTop: '80px' }}>
        <HeroModel />
        <InvestmentBreakdown />
        <ProfitSplit />
       
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Model;