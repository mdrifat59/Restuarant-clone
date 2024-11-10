import React, { useRef, useState } from 'react'
import Aboutimg from '/public/img/Aboutimg.png'
import CircularSlider from '@fseehawer/react-circular-slider'
import { PhoneIcons } from '../svg/Phone'
import AboutFooter from '../component/AboutFooter'
import aboutsite from '/public/img/aboutsite.png'

const About = () => {
    let [isvisiable, setIsvisiable] = useState()
    let handleAbout = () => setIsvisiable('about')
    let handleExperience = () => setIsvisiable('experience')
    let handleContact = () => setIsvisiable('contact')
    return (
        <>
            <section>
                <div className='w-full h-screen py-32 relative'>
                    <div className='absolute bottom-20 right-0'><img src={aboutsite} alt="" /></div>
                    <div className='max-w-container mx-auto ' >
                        <div className='grid grid-cols-2'>
                            <div className='relative'>
                                <img src={Aboutimg} alt="" />
                                <div className='w-[241.17px] h-[136.75px] bg-[#FFFFFF] rounded-lg flex gap-5 p-2 items-center absolute top-5 left-5'>
                                    <div>
                                        <CircularSlider
                                            labelColor="#181818"
                                            knobColor="#FEBF00"
                                            progressColorFrom="#FEBF00"
                                            progressColorTo="#FEBF00"
                                            progressSize={5}
                                            trackColor="#eeeeee"
                                            trackSize={5}
                                            data={["50+"]} //...
                                            dataIndex={10}
                                            width={100}
                                            valueFontSize='2'
                                            labelFontSize='50'
                                            label=' '
                                            verticalOffset='center'
                                        />
                                    </div>
                                    <div>
                                        <p className='text-[#181818] font-open_sans-SemiBold'>Market
                                            Experiences</p>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='w-full '>
                                    <button className={`font-Roboto-Medium mr-5 text-[#333333]  ${isvisiable === "about" && 'text-[#FFFFFF] bg-[#B52B1D]'} py-1.5 px-4`} onClick={handleAbout}>About</button>
                                    <button className={`font-Roboto-Medium mr-5 text-[#333333]  ${isvisiable === "experience" && 'text-[#FFFFFF] bg-[#B52B1D]'} py-1.5 px-4`} onClick={handleExperience}>Experience</button>
                                    <button className={`font-Roboto-Medium mr-5 text-[#333333]  ${isvisiable === "contact" && 'text-[#FFFFFF] bg-[#B52B1D]'} py-1.5 px-4`} onClick={handleContact}>Contact</button>
                                </div>
                                <hr className='border-0 h-px bg-[#B52B1D]' />
                                {
                                    isvisiable === "about" ?
                                        <div className='w-full h-full' >
                                            <h2 className='font-Bebas-Regular font-bold text-[62px] leading-[62px] py-5'>Exceptional culinary experience and delicious food</h2>
                                            <p className='font-Roboto-Regular text-[#333333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                                            <div className='flex gap-8 items-center mt-10'>
                                                <button className='font-Roboto-Bold text-[#0A1425] uppercase bg-[#FEBF00] px-6 py-4'>About More</button>
                                                <div className='flex gap-2 items-center'>
                                                    <PhoneIcons />
                                                    <p className='font-Roboto-Bold text-[#0A1425]'>+88 3426 739 485</p>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        isvisiable === "experience" ?
                                            <div className='w-full h-full' >
                                                <h2 className='font-Bebas-Regular font-bold text-[62px] leading-[62px] py-5'>Experience section</h2>
                                                <p className='font-Roboto-Regular text-[#333333]'> This is me, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                                                <div className='flex gap-8 items-center mt-10'>
                                                    <button className='font-Roboto-Bold text-[#0A1425] uppercase bg-[#FEBF00] px-6 py-4'>About More</button>
                                                    <div className='flex gap-2 items-center'>
                                                        <PhoneIcons />
                                                        <p className='font-Roboto-Bold text-[#0A1425]'>+88 3426 739 485</p>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className='w-full h-full' >
                                                <h2 className='font-Bebas-Regular font-bold text-[62px] leading-[62px] py-5'>Contact with us</h2>
                                                <p className='font-Roboto-Regular text-[#333333]'> That is me, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                                                <div className='flex gap-8 items-center mt-10'>
                                                    <button className='font-Roboto-Bold text-[#0A1425] uppercase bg-[#FEBF00] px-6 py-4'>About More</button>
                                                    <div className='flex gap-2 items-center'>
                                                        <PhoneIcons />
                                                        <p className='font-Roboto-Bold text-[#0A1425]'>+88 3426 739 485</p>
                                                    </div>
                                                </div>
                                            </div>
                                }


                            </div>
                        </div>
                        <AboutFooter />
                    </div>

                </div>
            </section>
        </>
    )
}

export default About