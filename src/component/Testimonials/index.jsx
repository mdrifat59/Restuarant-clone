import React, { forwardRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import man from '/public/img/man.png'
import clon from '/public/img/clon.png'
import { LeafIcons } from '../../svg/Leaf';
import video from '/public/img/video.png'

const TestimonialSlider = forwardRef((props, ref) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="py-14">
      <Carousel
        ref={ref}
        responsive={responsive}
        arrows={false}
        swipeable={false}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* Testimonial Item 1 */}
        <div className="w-full h-[400px] flex flex-row">
          <div className='w-full h-[400px] relative bg-[#FEBF00] flex-[3]'>
            <div className='absolute bottom-16 left-0'><LeafIcons /></div>
            <div className='flex h-full justify-center items-center'>
              <div className='w-[360px] h-[300px] flex flex-col justify-between relative'>
                <div className='absolute -top-2 -left-6'>
                  <img src={clon} alt="" />
                </div>
                <div>
                  <p className='font-Roboto-Regular text-xl text-[#0A1425] leading-[34px]'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <div>
                      <h2 className='font-Bebas-Regular text-lg text-[#0A1425]'>Khalid Al Dawsry</h2>
                      <p className='font-Roboto-Regular text-sm text-[#333333]'>Jeddah, Saudi</p>
                    </div>
                    <div className='w-[39.62px] h-[39.62px]'>
                      <img src={man} className='w-full h-full rounded-full overflow-hidden object-cover' alt="" />
                      <hr className='w-[40.45px] border-[3px] border-[#BD1F17] mt-3' />
                    </div>
                  </div>
                  <hr className='w-full border border-[#0A1425] mt-3' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full  flex-[4]'>
            <div className='w-full h-full cursor-pointer'>
              <img src={video} className='w-full h-full   object-cover' alt="" />
            </div>
          </div>
        </div>

        {/* Testimonial Item 2 */}
        <div className="w-full h-[400px] flex flex-row">
          <div className='w-full h-[400px] relative bg-[#FEBF00] flex-[3]'>
            <div className='absolute bottom-16 left-0'><LeafIcons /></div>
            <div className='flex h-full justify-center items-center'>
              <div className='w-[360px] h-[300px] flex flex-col justify-between relative'>
                <div className='absolute -top-2 -left-6'>
                  <img src={clon} alt="" />
                </div>
                <div>
                  <p className='font-Roboto-Regular text-xl text-[#0A1425] leading-[34px]'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <div>
                      <h2 className='font-Bebas-Regular text-lg text-[#0A1425]'>Khalid Al Dawsry</h2>
                      <p className='font-Roboto-Regular text-sm text-[#333333]'>Jeddah, Saudi</p>
                    </div>
                    <div className='w-[39.62px] h-[39.62px]'>
                      <img src={man} className='w-full h-full rounded-full overflow-hidden object-cover' alt="" />
                      <hr className='w-[40.45px] border-[3px] border-[#BD1F17] mt-3' />
                    </div>
                  </div>
                  <hr className='w-full border border-[#0A1425] mt-3' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full  flex-[4]'>
            <div className='w-full h-full cursor-pointer'>
              <img src={video} className='w-full h-full overflow-hidden object-cover' alt="" />
            </div>
          </div>
        </div>

        {/* Testimonial Item 3 */}
        <div className="w-full h-[400px] flex flex-row">
          <div className='w-full h-[400px] relative bg-[#FEBF00] flex-[3]'>
            <div className='absolute bottom-16 left-0'><LeafIcons /></div>
            <div className='flex h-full justify-center items-center'>
              <div className='w-[360px] h-[300px] flex flex-col justify-between relative'>
                <div className='absolute -top-2 -left-6'>
                  <img src={clon} alt="" />
                </div>
                <div>
                  <p className='font-Roboto-Regular text-xl text-[#0A1425] leading-[34px]'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <div>
                      <h2 className='font-Bebas-Regular text-lg text-[#0A1425]'>Khalid Al Dawsry</h2>
                      <p className='font-Roboto-Regular text-sm text-[#333333]'>Jeddah, Saudi</p>
                    </div>
                    <div className='w-[39.62px] h-[39.62px]'>
                      <img src={man} className='w-full h-full rounded-full overflow-hidden object-cover' alt="" />
                      <hr className='w-[40.45px] border-[3px] border-[#BD1F17] mt-3' />
                    </div>
                  </div>
                  <hr className='w-full border border-[#0A1425] mt-3' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full  flex-[4]'>
            <div className='w-full h-full cursor-pointer'>
              <img src={video} className='w-full h-full overflow-hidden object-cover' alt="" />
            </div>
          </div>
        </div>

      </Carousel>
    </div>
  );
});

export default TestimonialSlider;

