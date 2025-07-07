import React, { useRef } from 'react';
import tomato from '../assets/img/tomato.png';
import luiba from '../assets/img/luiba.png';
import { LeftArrow, RightArrow } from '../svg/Arrow';
import TestimonialSlider from '../component/Testimonials';

const Testimonials = () => {
    const carouselRef = useRef(null);
    const handleNext = () => {
        carouselRef.current.next();
    };

    const handlePrevious = () => {
        carouselRef.current.previous();
    };
    return (
        <section> 
            <div className="w-full pt-[30px] pb-[120px] md:pt-[50px] md:pb-[140px] xl:py-[120px] bg-[#ffffff] relative">
                <div className="absolute top-44 left-0 hidden 2xl:block"><img src={tomato}  alt="tomato" /></div>
                <div className="absolute bottom-0 right-0 hidden 2xl:block"><img src={luiba}   alt="luiba" /></div>
                <div className="w-full px-4 sm:px-6 md:px-8 lg:max-w-container lg:mx-auto ">
                    <div className="flex justify-between items-center ">
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 bg-[#BD1F17]"></div>
                                <h3 className="font-Roboto-Bold text-[#BD1F17] text-base lg:text-xl">Crispy, Every Bite Taste</h3>
                            </div>
                            <h1 className="font-Bebas-Regular w-[330px] sm:w-full text-[#181818] text-[40px] md:text-[45px] lg:text-6xl leading-[48px] mt-5">What Some of my Customers Say</h1>
                        </div>
                        <div className="flex gap-5 absolute bottom-10 xl:static left-1/3 ">
                            <button className="flex items-center justify-center py-2 px-4 w-[60px] h-[60px] bg-[#FFFFFF] rounded-full shadow-xl shadow-[#0000001A] hover:text-[#BD1F17]" onClick={handleNext}>
                                <LeftArrow />
                            </button>
                            <button className="flex items-center justify-center py-2 px-4 w-[60px] h-[60px] bg-[#FFFFFF] rounded-full shadow-xl shadow-[#0000001A] hover:text-[#BD1F17]" onClick={handlePrevious}>
                                <RightArrow />
                            </button>
                        </div>
                    </div> 

                    <TestimonialSlider ref={carouselRef} /> 
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
