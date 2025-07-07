import React from 'react'
import { OfferIcons } from '../svg/Offer'
import { VactorIcons } from '../svg/Vactor'
import bannerimg from "/img/Banner.png"

const Banner = () => {
    return (
        <>
            <section className={`bg-[url('/public/img/backgroundimg.png')] pt-[130px] pb-[160px] xl:pt-[130px] xl:pb-[100px] relative w-full`}>

                <div className='bg-gradient-to-r from-[#BD1F17] via-[#a51d13] to-[#8E1B0F] absolute inset-0 opacity-80 '>  </div>
                <div className='w-full px-4 sm:px-6 md:px-8 lg:max-w-container lg:mx-auto grid  lg:grid-cols-2 items-center'>
                    <div className='flex-none align-bottom z-10'>
                        <h2 className='font-bold font-Bebas-Regular uppercase text-[48px] md:text-[55px] lg:text-[80px] xl:text-[90px] 2xl:text-[120px] xl:leading-[100px] 2xl:leading-[130px] bg-gradient-to-r from-[#BD1F1700] to-[#BD1F17B2]  text-[#FFFFFF] w-[360px] sm:w-[460px] md:w-[610px] lg:w-[870px]'>Taste the authentic Saudi cuisine</h2>
                        <p className='text-[#FFFFFF] w-full md:w-[500px] lg:w-[559px] text-[20px]  lg:text-2xl  xl:pt-5 font-Roboto-Regular mt-2'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                        <button className='text-[#0A1425] font-Roboto-Bold py-[10px] px-6 bg-[#FEBF00] uppercase text-base mt-10'>Explore Menu</button>
                    </div>
                    <div className='relative ml-auto pt-10'>
                        <div className='absolute top-0 right-0  xl:-right-[30px]'>
                            <VactorIcons />
                        </div>
                        <img src={bannerimg} className='xl:h-[649px] xl:w-[600px] ' alt="" />
                        {/* <img src="/img/Banner.png" className='xl:h-[649px] xl:w-[600px] ' alt="" /> */}
                        <div className='absolute right-2 2xl:-right-[50px] 2xl:bottom-0 bottom-5 bg-yellow-500 rounded-full p-2'>
                            <OfferIcons className="h-[50px] w-[50px] sm:w-[80px] sm:h-[80px] xl:h-[100px] xl:w-[100px]" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Banner