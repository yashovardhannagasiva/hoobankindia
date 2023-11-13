import React from 'react'
import {apple,bill,google} from '../assets'

const Billing = () => {
  return (
    <section id='product' className="sectionReverse">
      <div className="sectionImgReverse">
        <img src={bill} alt="billing" className='w-full h-full relative z-10' />
        <div className="absolute pointer-events-none transform-gpu overflow-hidden z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full blur-8xl">
        <div className="bg-gradient-to-r from-[#f4c4f3] to-[#8a3989] w-[100%] h-[100%]" />
        </div>
        <div className="absolute pointer-events-none transform-gpu overflow-hidden z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full blur-full">
        <div className="bg-gradient-to-r from-[#fefefe] to-[#fefefe] w-[100%] h-[100%] " />
        </div>
      </div>
      <div className='sectionInfo'> 
        <h2 className="heading2">Easily control your <br className="sm:block hidden" />
        Billing & Invoicing
        </h2>
        <p className="paragraph max-w-[470px] ">
        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market, finding the right credit card for your needs could be a challenge. 
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>

      </div>
    </section>
  )
}

export default Billing