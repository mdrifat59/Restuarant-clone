import React from 'react'
import tomato from '/public/img/tomato.png'
import luiba from '/public/img/luiba.png'
import { LeftArrow, RightArrow } from '../svg/Arrow'

const Testimonials = () => {
    return (
        <>
            <section>
                <div className='w-full h-screen bg-[#ffffff] relative'>
                    <div className='absolute top-44 left-0'><img src={tomato} alt="" /></div>
                    <div className='absolute bottom-0 right-0'><img src={luiba} alt="" /></div>
                    <div className='max-w-container mx-auto py-32'>
                        <div className='flex justify-between items-center' >
                            <div>
                                <div className='flex items-center gap-2'>
                                    <div className='w-2.5 h-2.5 bg-[#BD1F17]'></div>
                                    <h3 className='font-Roboto-Bold text-[#BD1F17] text-xl'>Crispy, Every Bite Taste</h3>
                                </div>
                                <h1 className='font-Bebas-Regular text-[#181818] text-6xl mt-5'>What Some of my Customers Say</h1>
                            </div>
                            <div className=' flex gap-5 '>
                                <button className='flex items-center justify-center py-2 px-4 w-[60px] h-[60px] bg-[#FFFFFF] rounded-full shadow-xl shadow-[#0000001A] hover:text-[#BD1F17]'  ><LeftArrow /></button>
                                <button className='flex items-center justify-center py-2 px-4 w-[60px] h-[60px] bg-[#FFFFFF] rounded-full shadow-xl shadow-[#0000001A] hover:text-[#BD1F17]'  ><RightArrow /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials