import React from 'react'
import { OfferIcons } from '../svg/Offer'
import { VactorIcons } from '../svg/Vactor'

const Banner = () => {
    return (
        <>
            <section >
                <div className={`bg-[url('/public/img/backgroundimg.png')]`}>
                    <div className='bg-gradient-to-r from-[#BD1F17] via-[#a51d13] to-[#8E1B0F] opacity-80'>
                        <div className='max-w-container mx-auto grid grid-cols-2 items-center py-20'>
                            <div className='flex-none align-bottom z-10'> 
                                <h2 className='font-bold font-Bebas-Regular uppercase text-9xl bg-gradient-to-r from-[#BD1F1700] to-[#BD1F17B2]  text-[#FFFFFF] w-[870px]   '>Taste the authentic Saudi cuisine</h2>
                                <p className='text-[#FFFFFF] w-[559px] text-2xl font-Roboto-Regular mt-5'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                                <button className='text-[#0A1425] font-Roboto-Bold py-[10px] px-6 bg-[#FEBF00] uppercase text-base mt-10'>Explore Menu</button>
                            </div>
                            <div className='relative ml-auto   '>
                                <div className='absolute -top-[35px] -right-[30px]'>
                                    <VactorIcons />
                                </div>
                                <img src="/public/img/Banner.png" className='w-full ' alt="" />
                                <div className='absolute -right-[50px] bottom-0 bg-yellow-500 rounded-full p-2'>
                                    <OfferIcons />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner