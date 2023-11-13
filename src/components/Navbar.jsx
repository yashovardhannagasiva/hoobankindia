import React from 'react'
import { useState } from 'react'
import {close,logo,menu} from '../assets'
import {navLinks} from '../constants'
import { useEffect } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

const handleToggle = () => {
  setToggle((prev)=>!prev)
}

  return (
    <nav className={`w-full z-50 flex m-0 h-full justify-between items-center navbar `}>
      <img src={logo} alt="hoo bank" className='w-[124px] h-[32px]'/>
      <ul className="list-none sm:flex hidden  gap-10 justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white `}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))
      }
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <div  onClick={handleToggle}  className='border-2 p-1.5 px-2 rounded-lg hover:border-gray-200 border-gray-800 transition-all duration-300'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer select-none '/>
        </div>
        <div className={`${toggle ? 'flex' : 'hidden'} absolute top-20 right-0 bg-black-gradient mx-4 min-w-[140px] p-3 rounded-xl sidebar`}> 
        <ul className="list-none flex-col space-y-5 justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white `}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))
      }
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar