import React from 'react'
import Aboutimg from '/public/img/Aboutimg.png'
import CircularSlider from '@fseehawer/react-circular-slider' 

const About = () => {
    return (
        <>
            <section>
                <div className='w-full h-screen py-32'>
                    <div className='max-w-container mx-auto ' >
                        <div className='grid grid-cols-2'>
                            <div className='relative'>
                                <img src={Aboutimg}  alt="" />
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
                            <div className='bg-indigo-500  '></div>
                        </div>
                        <div></div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About