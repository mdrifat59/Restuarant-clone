 import React, { useRef, useState } from 'react';
import dateimg from '/public/img/dateimg.png';

const Booking = () => {
    const [date, setDate] = useState('');
    const dateRef = useRef(null);

    const handleChange = (e) => {
        setDate(e.target.value);  
        console.log("Selected date:", e.target.value); 
    };

    return (
        <>
            <section>
                <div className={`w-full h-screen bg-[url('/public/img/bookingImg.jpeg')] bg-cover `}>
                    <div className='max-w-container mx-auto py-20 flex flex-col-2'>
                        <div className='w-full h-full'>
                            <div className='flex items-center gap-3'>
                                <div className='w-2.5 h-2.5 bg-[#BD1F17]'></div>
                                <h3 className='font-Roboto-Bold text-[#BD1F17] text-xl'>Book Now</h3>
                            </div>
                            <h2 className='font-Bebas-Regular text-[62px] text-[#FFFFFF]'>Book Your Table</h2>
                            <p className='font-Roboto-Regular text-[#F7F8F9] w-[545px] leading-6'>
                                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
                            </p>
                            <div className='mt-10'>
                                <form action="#">
                                    <div className='flex gap-10'>
                                        <input
                                            type="text"
                                            className='w-[320px] py-3 px-2.5 text-[#FFFFFF] border border-[#E5E7EB] bg-transparent placeholder:font-Roboto-Regular placeholder:text-[#FFFFFF] placeholder:text-sm'
                                            placeholder='Your Name *'
                                        />
                                        <input
                                            type="text"
                                            className='w-[320px] py-3 px-2.5 text-[#FFFFFF] border border-[#E5E7EB] bg-transparent placeholder:font-Roboto-Regular placeholder:text-[#FFFFFF] placeholder:text-sm'
                                            placeholder='Your Email'
                                        />
                                    </div>
                                    <div className='flex gap-10 mt-10 relative'>
                                        <input
                                            type="text"
                                            value={date}
                                            readOnly
                                            className='w-[320px] py-3 px-2.5 border border-[#E5E7EB] text-[#FFFFFF] bg-transparent placeholder:font-Roboto-Regular placeholder:text-[#FFFFFF] placeholder:text-sm'
                                            placeholder='Reservation Date'
                                        />
                                        <div onClick={() => dateRef.current.showPicker()} className='absolute bottom-4 left-72 cursor-pointer'>
                                            <img src={dateimg} alt="Calendar icon" />
                                        </div>
                                        <input
                                            type="date"
                                            ref={dateRef}
                                            onChange={handleChange}
                                            className='absolute opacity-0 w-0 h-0'
                                        />
                                        <input
                                            type="number"
                                            className='w-[320px] py-3 px-2.5 border border-[#E5E7EB] text-[#FFFFFF] bg-transparent placeholder:font-Roboto-Regular placeholder:text-[#FFFFFF] placeholder:text-sm'
                                            placeholder='Total People'
                                        />
                                    </div>
                                    <div>
                                        <textarea name="message" maxLength={420} minLength={10} className='w-full h-[130px] mt-10 bg-transparent text-[#FFFFFF] border placeholder:text-[#FFFFFF] border-[#E5E7EB] py-3 px-4 placeholder:font-Roboto-Regular placeholder:text-sm resize-none outline-none' placeholder='Message' id=""></textarea>
                                        <button className='font-Roboto-Bold text-lg bg-[#FEBF00] uppercase py-4 px-6 mt-10'>Book now</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='w-full h-full'></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Booking;


