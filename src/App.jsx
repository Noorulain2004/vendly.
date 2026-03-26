import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx';
import Home from "./Pages/Home.jsx";
import Working from "./Pages/working.jsx";
import Model from "./Pages/Model.jsx";
import FAQ from "./Pages/FAQ.jsx";
import Contact from "./Pages/Contact.jsx"; 
import Agreement from "./Components/Agreement/Agreement.jsx";
import "./App.css";


const LayoutWithNavbar = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet /> 
    </>
  );
};

function App() {
  return (
    <>
      

      <Routes>
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<Working />} />
          <Route path="/our-model" element={<Model />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/agreement" element={<Agreement />} />
        
      </Routes>
    </>
  );
}

export default App;