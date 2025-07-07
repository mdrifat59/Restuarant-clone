import React, { forwardRef } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bargur from '../../assets/img/bargur.png'
import chicken from '../../assets/img/chicken.png'
import pizza from '../../assets/img/pizza.png'
import frinsfire from '../../assets/img/frinsfire.png'

const CarouselSlider = forwardRef((props, ref) => {

    return (
        <>
            <div className='py-[32px] lg:py-14 '>

                <Carousel
                    ref={ref}
                    autoPlay
                    arrows={false}
                    autoPlaySpeed={2000}
                    infinite
                    responsive={{
                        desktop: { breakpoint: { max: 3000, min: 1400 }, items: 4 },
                        sm_desktop: { breakpoint: { max: 1400, min: 1024 }, items: 3 },
                        tablet: { breakpoint: { max: 1024, min: 700 }, items: 2 },
                        sm: { breakpoint: { max: 700, min: 464 }, items: 1 },
                        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
                    }}
                >
                    {/* item-1 */}
                    <div className='w-full sm:mx-auto sm:w-[306px] 2xl:w-[280px] h-[300px] bg-[#FFFFFF] '>
                        <div className='flex justify-center w-full py-10'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={bargur} alt="" />
                                <hr className='w-[57px] border-[3px] border-[#BD1F17] mb-2' />
                                <h3 className='font-Bebas-Regular text-2xl text-[#0A1425] my-2 '>vegetables burger</h3>
                                <p className='font-Roboto-Regular text-base text-[#0A1425]'>Barbecue Italian cuisine Burger</p>
                            </div>

                        </div>
                    </div>

                    {/* item-2 */}
                    <div className='w-full sm:mx-auto sm:w-[306px] 2xl:w-[280px] h-[300px] bg-[#FFFFFF]'>
                        <div className='flex justify-center w-full py-10'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={pizza} alt="" />
                                <hr className='w-[57px] border-[3px] border-[#BD1F17] mb-2' />
                                <h3 className='font-Bebas-Regular text-2xl text-[#0A1425] my-2 '>Spacial Pizza </h3>
                                <p className='font-Roboto-Regular text-base text-[#0A1425]'>Barbecue Italian cuisine pizza</p>
                            </div>

                        </div>
                    </div>

                    {/* item-3 */}
                    <div className='w-full  sm:mx-auto sm:w-[306px] 2xl:w-[280px] h-[300px] bg-[#FFFFFF]'>
                        <div className='flex justify-center w-full py-10'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={frinsfire} alt="" />
                                <hr className='w-[57px] border-[3px] border-[#BD1F17] mb-2' />
                                <h3 className='font-Bebas-Regular text-2xl text-[#0A1425] my-2 '>Spacial French fries </h3>
                                <p className='font-Roboto-Regular text-base text-[#0A1425]'>Barbecue Italian cuisine french fries</p>
                            </div>

                        </div>
                    </div>

                    {/* item-4 */}
                    <div className='w-full sm:mx-auto sm:w-[306px] 2xl:w-[280px] h-[300px] bg-[#FFFFFF]'>
                        <div className='flex justify-center w-full py-10'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={chicken} alt="" />
                                <hr className='w-[57px] border-[3px] border-[#BD1F17] mb-2' />
                                <h3 className='font-Bebas-Regular text-2xl text-[#0A1425] my-2 '>Cuisine Chicken</h3>
                                <p className='font-Roboto-Regular text-base text-[#0A1425]'>Japanese Cuisine Chicken</p>
                            </div>

                        </div>
                    </div>
                </Carousel>
            </div>

        </>
    )
})

export default CarouselSlider