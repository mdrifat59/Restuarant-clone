import React, { forwardRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import man from '/img/man.png'
import clon from '/img/clon.png'
import { LeafIcons } from '../../svg/Leaf';
import video from '/public/img/video.png'

const TestimonialSlider = forwardRef((props, ref) => {
   
  return (
    <div className="w-full pt-[24px] lg:py-14 ">
      
      <Carousel
        ref={ref}
        autoPlay
        arrows={false}
        autoPlaySpeed={2000}
        infinite
        responsive={{
          desktop: { breakpoint: { max: 3000, min: 1400 }, items: 1 },
          sm_desktop: { breakpoint: { max: 1400, min: 1024 }, items: 1 },
          tablet: { breakpoint: { max: 1024, min: 700 }, items: 1 },
          sm: { breakpoint: { max: 700, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
        }}
      >
        {/* Testimonial Item 1 */}
        <div className="w-full lg:h-[555px]  flex flex-row flex-wrap-reverse lg:flex-row">


          <div className='w-full lg:h-[555px] relative bg-[#FEBF00] lg:flex-[3]'>
            <div className='absolute -bottom-2 md:bottom-16 left-0 hidden md:block'><LeafIcons className='w-[24px] h-[49px] md:w-full md:h-full' /></div>

            <div className=' flex h-full justify-center items-center p-[50px] md:py-[50px] md:px-[70px] lg:p-[40px]'>
              <div className='w-full lg:w-[360px] lg:h-[300px] p-[25px] lg:px-[25px] lg:py-0 flex flex-col justify-between relative'>
                <div className='absolute top-[22px] left-[54px] md:left-[125px] lg:-top-2 lg:left-0'>
                  <img src={clon} alt="" />
                </div>
                <div className='flex justify-end sm:justify-center'>
                  <p className='font-Roboto-Regular text-lg lg:text-xl text-[#0A1425] w-[261px] lg:w-full lg:text-[#0A1425] lg:leading-[34px]'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                </div>
                <div>
                  <div className='flex justify-between mt-[40px] xl:mt-[70px]'>
                    <div>
                      <h2 className='font-Bebas-Regular text-lg text-[#0A1425]'>Khalid Al Dawsry</h2>
                      <p className='font-Roboto-Regular text-sm text-[#333333]'>Jeddah, Saudi</p>
                    </div>
                    <div className='w-[39.62px] h-[39.62px]'>
                      <img src={man} className='w-full h-full rounded-full lg:overflow-hidden object-cover' alt="" />
                      <hr className='w-[40.45px]  border-[3px] border-[#BD1F17] mt-3' />
                    </div>
                  </div>
                  <hr className='w-full border border-[#0A1425]  mt-2' />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full  lg:h-full  lg:flex-[4] '>
            <div className='w-full lg:h-full  cursor-pointer'>
              <img src={video} className='w-full h-full  object-cover' alt="" />
            </div>
          </div>

        </div>
      </Carousel>
    </div>
  );
});

export default TestimonialSlider;

