import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import {hand,leftDot,rightDot,topDot,bottomCard,topCard,middleCard} from '../assets/robot'
import Button from "./Button";
const Hero = () => (
  <section id="home" className="flex md:flex-row flex-col  py-3">
    <div className="flex-1 flexStart flex-col xl:px-0 sm:px-16 px-6">
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className="paragraph ml-2">
          <span className="text-white">20% </span>
          Discount For <span className="text-white"> 1 Month </span>Account
        </p>
      
      </div>
      <div className="flex flex-row justify-between item w-full ">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          {" "}
          The Next <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="sm:flex hidden md:mr-4 mr-0 active:">
          <GetStarted />
        </div>
      </div>
      <h2 className=" font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
      We have a methodology that our team of experts uses to determine the credit cards that are best suited for your requirements. Our analysis includes factors such as annual percentage rates and annual fees.
        </p>
    </div>
    <div className="flex-1 flexCenter md:my-0 my-10 relative">
      <div className="relative o w-full h-full z-[5]">
      <img src={hand} alt="hand"  />

 <div>
 <img src={topCard} alt="card"  className="absolute top-[50px] animate-shake-vertical delay-0 left-16 w-96 " />
<img src={middleCard} alt="card" className="absolute  top-[100px] animate-shake-vertical1  left-[90px] w-96" />
     <img src={leftDot} alt="dot" className={`absolute bottom-[220px] left-10 w-12 to-bounce`}   />  
     <img src={rightDot} alt="dot" className="absolute bottom-[240px] right-10 w-20 to-bounce1 "/>  
     <img src={topDot} alt="dot" className="absolute top-0 w-28 animate-bounce to-bounce2" />  
 </div>
      </div>
      <div className="absolute pointer-events-none transform-gpu overflow-hidden z-0 w-[40%] h-[35%] top-0 blur-full">
        <div className="bg-gradient-to-r from-[#f4c4f3] to-[#8a3989] w-[100%] h-[100%]" />
        </div>
        <div className="absolute pointer-events-none transform-gpu overflow-hidden  z-[1] w-[80%] h-[80%] rounded-full bottom-40 blur-6xl"> 
        <div className="bg-gradient-to-r  from-[#bca5ff] to-[#214d76] w-[100%] h-[100%]"/>
        </div>
        <div className="absolute pointer-events-none transform-gpu overflow-hidden z-0 w-[50%] h-[50%] right-20 bottom-20 blur-6xl ">
        <div className="bg-gradient-to-r from-[#f4c4f3] to-[#8a3989] w-[100%] h-[100%]"/>
        </div>
    </div>
    <div className='sm:hidden flexCenter paddingY' >
          <Button value='Get Started' />
      </div>

  </section>
);

export default Hero;
