import React, { useEffect, useState } from 'react'
import { ResturantIcons } from '../svg/Resturant'
import { MenuIcons } from '../svg/Menu'

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
  const toggleMenu = () => {

  }
  return (
    <>
      <nav className={`fixed top-0 z-50 w-full ${scrolled ? "bg-gradient-to-r from-[#BD1F17] via-[#a51d13] to-[#8E1B0F]" : "bg-blue-400"}`}>

        <div className='w-full px-4 xl:max-w-container xl:mx-auto flex justify-between sm:px-6 md:px-8 items-center  xl:grid  xl:grid-cols-[1.3fr,4fr,1fr]  py-5 '>
          <div className=''>
            <ResturantIcons />
          </div>
          {/* Menubar */}
          <div className='hidden xl:block md:w-[600px] xl:w-[650px] items-center justify-center'>
            <div className='flex items-center'>
              <ul className='text-[#FFFFFF] flex gap-10'>
                <li className='font-Raleway-Medium text-[15px]  relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>Home</li>
                <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>About</li>
                <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>Portfolio</li>
                <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>Clients</li>
                <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>Blog</li>
                <li className='font-Raleway-Medium text-[15px] relative after:absolute after:content-[""] after:w-0 after:h-[1px] after:bottom-[-2px] after:left-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full cursor-pointer'>Contact</li>
              </ul>
            </div>


          </div>

          <div
            className="w-[40px]   h-[30px] md:w-[40px] md:h-[40px]  xl:hidden  flex justify-center items-center cursor-pointer"
            onClick={toggleMenu} // Toggle the menu on click
          >
            <MenuIcons className="lg:h-[30px] lg:w-[30px]   text-white" />
          </div>

          <div className='lg:flex items-center justify-end md:block hidden'>
            <button className='text-[#0A1425] font-Roboto-Bold py-[10px] px-6 bg-[#FEBF00] uppercase text-base'>Book a Table</button>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar