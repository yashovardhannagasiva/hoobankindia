import React from 'react'
import { stats } from '../constants'
const Stats = () => (
  <section className="flexCenter flex-row flex-wrap sm:mb-20 mb-6">
    {stats.map((stat,id)=>(
      <div key={stat.id} className="flex-1 justify-start items-center flex-row m-3">
        <h4 className="font-semibold font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
        <p className="font-normal font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-5">{stat.title}</p>
      </div>
    ))}

  </section>
)

export default Stats