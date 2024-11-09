import React, { useEffect, useState } from 'react'
import { ResturantIcons } from '../svg/Resturant'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > window.innerHeight) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <nav className={`fixed top-0 z-50 w-full ${scrolled ? "bg-gradient-to-r from-[#BD1F17] via-[#a51d13] to-[#8E1B0F]" : "bg-transparent"}`}>

        <div className='max-w-container mx-auto grid grid-cols-[1.3fr,4fr,1fr] py-5 '>
          <div className=''>
            <ResturantIcons />
          </div>
          <div className='flex items-center'>
            <ul className='text-[#FFFFFF] flex gap-10'>
              <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>Home</li>
              <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>About</li>
              <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>Portfolio</li>
              <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>Clients</li>
              <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>Blog</li>
              <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>Contact</li>
            </ul>
          </div>
          <div className='flex items-center justify-end'>
            <button className='text-[#0A1425] font-Roboto-Bold py-[10px] px-6 bg-[#FEBF00] uppercase text-base'>Book a Table</button>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar