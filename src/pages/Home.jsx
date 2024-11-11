import React from 'react'
import Banner from '../section/Banner' 
import About from '../section/About'
import Food from '../section/Food'
import Booking from '../section/Booking'
import Testimonials from '../section/Testimonials'
 

const Home = () => {
  return (
    <>
      <Banner/>
       <About />
       <Food/>
       <Booking/>
       <Testimonials/>
    </>

  )
}

export default Home