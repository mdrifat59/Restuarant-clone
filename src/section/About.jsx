import React, { useEffect, useRef, useState } from 'react'
import aboutimg from '/img/aboutimg.png'
import CircularSlider from '@fseehawer/react-circular-slider'
import { PhoneIcons } from '../svg/Phone'
import AboutFooter from '../component/AboutFooter'
import aboutsite from '/img/aboutsite.png'

const About = () => {
    let [isvisiable, setIsvisiable] = useState()
    let handleAbout = () => setIsvisiable('about')
    let handleExperience = () => setIsvisiable('experience')
    let handleContact = () => setIsvisiable('contact')
    let [width, setWidth]=useState(100) 

    useEffect(() => {
        const updateWidth = () => {
          const screenWidth = window.innerWidth;
    
          if (screenWidth <= 400) {
            setWidth(50); // For 'xs' 
          } else if (screenWidth <= 576) {
            setWidth(60); // For 'sm' 
          } else if (screenWidth <= 768) {
            setWidth(80); // For 'md' 
          } else if (screenWidth <= 992) {
            setWidth(100); // For 'lg' 
          } else if (screenWidth <= 1200) {
            setWidth(120); // For 'xl' 
          } else {
            setWidth(140); // For larger screens 
          }
        };
    
        updateWidth();
        window.addEventListener('resize', updateWidth); 
    
        return () => {
          window.removeEventListener('resize', updateWidth);
        };
      }, []);
    return (
        <>
            <section>
                <div className='w-full py-[32px] md:py-[70px] lg:py-[120px] relative'>
                    <div className='absolute bottom-20 right-0 hidden 2xl:block'><img src={aboutsite} alt="" /></div>

                    <div className='w-full px-4 sm:px-6 md:px-8 lg:max-w-container lg:mx-auto ' >
                        <div className='grid lg:grid-cols-2 lg:gap-5 2xl:gap-10 3xl:gap-20'>
                            <div className='relative'>
                                <img src={aboutimg} className='sm:w-full lg:h-full' alt="" />
                                <div className='w-[128px] h-[73px] sm:w-[150px] sm:h-[90px] md:w-[170px] md:h-[120px] lg:w-[241.17px] lg:h-[136.75px]  bg-[#FFFFFF] rounded-lg lg:flex gap-5 p-2 items-center absolute top-5 left-5'>
                                    <div className='xs:w-[50px] xs:h-[50px]'>
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
                                            width={width}
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
                            <div className='pt-[32px] sm:pt-[50px] lg:pt-[0px]'>
                                <div className='w-full '>
                                    <button className={`font-Roboto-Medium mr-5 text-[#333333]  ${isvisiable === "about" && 'text-[#FFFFFF] bg-[#B52B1D]'} py-1.5 px-4`} onClick={handleAbout}>About</button>
                                    <button className={`font-Roboto-Medium mr-5 text-[#333333]  ${isvisiable === "experience" && 'text-[#FFFFFF] bg-[#B52B1D]'} py-1.5 px-4`} onClick={handleExperience}>Experience</button>
                                    <button className={`font-Roboto-Medium mr-5 text-[#333333]  ${isvisiable === "contact" && 'text-[#FFFFFF] bg-[#B52B1D]'} py-1.5 px-4`} onClick={handleContact}>Contact</button>
                                </div>
                                <hr className='border-0 h-[1px] md:h-[2px] bg-[#B52B1D]' />
                                {
                                    isvisiable === "about" ?
                                        <div className='w-full h-full' >
                                            <h2 className='font-Bebas-Regular w-[330px] md:w-[520px]  leading-[48px] md:leading-[70px] lg:w-[510px] xl:w-[520px] lg:text-[55px] xl:text-[62px] text-[40px] md:text-[62px] lg:leading-[62px] py-5'>Exceptional culinary experience and delicious food</h2>
                                            <p className='font-Roboto-Regular w-[330px] md:w-full text-[#333333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
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
                                                <h2 className='font-Bebas-Regular w-[330px] md:w-[520px]  leading-[48px] md:leading-[70px] lg:w-[510px] xl:w-[520px] lg:text-[55px] xl:text-[62px] text-[40px] md:text-[62px] lg:leading-[62px] py-5'>Experience section</h2>
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
                                                <h2 className='font-Bebas-Regular w-[330px] md:w-[520px]  leading-[48px] md:leading-[70px] lg:w-[510px] xl:w-[520px] lg:text-[55px] xl:text-[62px] text-[40px] md:text-[62px] lg:leading-[62px] py-5'>Contact with us</h2>
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