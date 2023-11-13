import React from 'react'
import { arrowUp } from '../assets'
const GetStarted = () => (
  <div className="flex group flex-1 justify-center items-center w-[140px] h-[140px] z-[0] bg-blue-gradient rounded-full p-[2px] cursor-pointer">
    <div className='absolute w-[140px] h-[140px]  z-[1] bg-blue-gradient transition-all duration-500 ease-in-out group-hover:animate-spin rounded-full p-[2px] cursor-pointer'/>
    <div className="z-10 flexCenter flex-col bg-primary w-full h-full rounded-full">
      <div className="flexStart flex-row">
       <p className="font-poppins font-medium text-lg transition-all duration-500 ease-in-out group-hover:text-xl leading-6 mr-2 ">
       <span className="text-gradient ">Get</span>
       </p>
       <img src={arrowUp} alt="arrow up" className="w-6 h-6 object-contain" />
      
      </div>
      <p className="font-poppins font-medium text-lg transition-all duration-500 ease-in-out group-hover:text-xl leading-6 ">
       <span className="text-gradient">Started</span>

       </p>
    </div>
  </div>
)

export default GetStarted