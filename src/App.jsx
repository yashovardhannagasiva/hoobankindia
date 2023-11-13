import "./App.css";
import React from "react";

import "./App.css";
import {Navbar,Stats,Testimonials,Billing,Business,CTA,Clients,Footer,Hero,CardDeal} from "./components";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldShowBackground = scrollTop > 0;
  
      setIsScrolled(shouldShowBackground);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <main className="bg-primary w-full overflow-hidden">
      <div className="paddingX flexCenter py-8">
        <div className={`boxWidth fixed z-50 paddingX transition-all py-4 ${isScrolled ?'bg-[#040713]':''}`}><Navbar/></div>
      </div>
      <div className="bg-primary flexStart ">
        <div className="boxWidth"><Hero/></div>
      </div>
      <div className="bg-primary flexStart paddingX">
        <div className="boxWidth">
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>        
        </div>
      </div>
      
    </main>
  );
};
export default App;
