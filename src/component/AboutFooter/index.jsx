import React from 'react'
import { DeliveryIcons } from '../../svg/Delivery'
import { DiningIcons } from '../../svg/Dining'
import { BagIcons } from '../../svg/Bag'

const AboutFooter = () => {
    return (
        <>
            <div className='flex flex-col-3 justify-between py-16 '>
                <div className='flex gap-5 items-center'>
                    <div className='w-20 h-20 rounded-full bg-[#FFFFFF] shadow-xl  shadow-[#0000001A]  flex justify-center items-center'>
                        <DeliveryIcons />
                    </div>
                    <div>
                        <h3 className='font-Bebas-Regular font-bold  text-[#0A1425] text-3xl'>fast delivery</h3>
                        <p className='font-Roboto-Regular text-[#0A1425] text-xl'>Within 30 minutes</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='w-20 h-20 rounded-full bg-[#FFFFFF] shadow-xl  shadow-[#0000001A]  flex justify-center items-center'>
                        <DiningIcons />
                    </div>
                    <div>
                        <h3 className='font-Bebas-Regular font-bold  text-[#0A1425] text-3xl'>absolute dining</h3>
                        <p className='font-Roboto-Regular text-[#0A1425] text-xl'>Best buffet restaurant</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='w-20 h-20 rounded-full bg-[#FFFFFF] shadow-xl  shadow-[#0000001A]  flex justify-center items-center'>
                        <BagIcons />
                    </div>
                    <div>
                        <h3 className='font-Bebas-Regular font-bold  text-[#0A1425] text-3xl'>pickup delivery</h3>
                        <p className='font-Roboto-Regular text-[#0A1425] text-xl'>Grab your food order</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutFooter