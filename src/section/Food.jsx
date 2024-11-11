import React, { useRef } from 'react'
import foodimg from '/public/img/foodimg.png'
import CarouselSlider from '../component/carousel'
import { LeftArrow, RightArrow } from '../svg/Arrow';

const Food = () => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrevious = () => {
    carouselRef.current.previous();
  };
  return (
    <>
      <section>
        <div className='w-full h-screen bg-[#FBF7F2] relative'>
          <div className='absolute bottom-32 left-0'><img src={foodimg} alt="" /></div>
          <div className='max-w-container mx-auto py-32'>
            <div className='flex justify-between items-center' >
              <div>
                <div className='flex items-center gap-2'>
                  <div className='w-2.5 h-2.5 bg-[#BD1F17]'></div>
                  <h3 className='font-Roboto-Bold text-[#BD1F17] text-xl'>Crispy, Every Bite Taste</h3>
                </div>
                <h1 className='font-Bebas-Regular text-[#181818] text-6xl mt-5'>POPULAR FOOD ITEMS</h1>
              </div>
              <div className=' flex gap-5 '>
                <button className='flex items-center justify-center py-2 px-4 w-[60px] h-[60px] bg-[#FFFFFF] rounded-full shadow-xl shadow-[#0000001A] hover:text-[#BD1F17]' onClick={handleNext}><LeftArrow /></button>
                <button className='flex items-center justify-center py-2 px-4 w-[60px] h-[60px] bg-[#FFFFFF] rounded-full shadow-xl shadow-[#0000001A] hover:text-[#BD1F17]' onClick={handlePrevious}><RightArrow /></button>
              </div>
            </div>
            <CarouselSlider ref={carouselRef} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Food