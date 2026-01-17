import { Routes, Route, Outlet } from "react-router-dom"; // 1. Outlet import karein
import Navbar from "./Components/Navbar/Navbar.jsx";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx';
import Home from "./Pages/Home.jsx";
import Working from "./Pages/working.jsx";
import Model from "./Pages/Model.jsx";
import FAQ from "./Pages/FAQ.jsx";
import Contact from "./Pages/Contact.jsx"; // Check karein agar filename ContactUs.jsx hai to wohi likhein
import Agreement from "./Components/Agreement/Agreement.jsx";
import "./App.css";

// 2. Ek Layout Component banayen jis main Navbar ho
const LayoutWithNavbar = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet /> {/* Baqi saray pages yahan render hon gay */}
    </>
  );
};

function App() {
  return (
    <>
      {/* <Navbar />  <-- Yahan sy global Navbar hata den */}

      <Routes>
        
        {/* 3. Woh pages jin pr Navbar dikhana hai, unhen is Layout main rakhen */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<Working />} />
          <Route path="/our-model" element={<Model />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* 4. Agreement page ko bahar rakhen (No Navbar here) */}
        <Route path="/agreement" element={<Agreement />} />
        
      </Routes>
    </>
  );
}

export default App;