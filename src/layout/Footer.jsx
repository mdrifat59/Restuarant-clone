import React from 'react'
import clock from '/img/clock.png'
import phone from '/img/phone.png'
import mail from '/img/mail.png'
import map from '/img/map-pin.png'
import facebook from '/img/facebook.png'
import linkedin from '/img/linkedin.png'
import instagram from '/img/instagram.png'
import twitter from '/img/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="py-[30px] md:py-[70px] lg:py-[120px] bg-cover w-full relative bg-[url('/img/footerbg.jpeg')]">
                <div className="bg-[#000000] absolute inset-0 opacity-80 z-0"></div>

                <div className="w-full px-4 sm:px-6 md:px-8 lg:max-w-container lg:mx-auto relative z-10 ">
                    <div className="w-full  p-4 flex justify-center">
                        <h1 className="font-Bebas-Regular text-center text-[40px] md:text-[50px] lg:text-6xl leading-[50px] md:leading-[72px] text-[#FFFFFF]">We’re ready to give you the best dining experiences</h1>
                    </div>

                    <div className="flex ">
                        <div className="grid md:grid-cols-2 2xl:grid-cols-4 md:gap-10  items-center pt-12 lg:pt-20 w-full">
                            <div className="p-4 w-full flex flex-col items-center">
                                <img src={clock} alt="Clock" />
                                <h2 className="font-Bebas-Regular text-2xl text-[#FFFFFF] my-4">Opening hours</h2>
                                <h3 className='font-Roboto-Regular text-base text-[#F7F8F9] mb-1'>Monday - Sunday</h3>
                                <p className='font-Roboto-Regular text-base text-[#F7F8F9]'>9:00 AM to 11:30 PM</p>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center">
                                <img src={phone} alt="Clock" />
                                <h2 className="font-Bebas-Regular text-2xl text-[#FFFFFF] my-4">LET'S TALK</h2>
                                <h3 className='font-Roboto-Regular text-base text-[#F7F8F9] mb-1'>Phone: 1-800-222-4545</h3>
                                <p className='font-Roboto-Regular text-base text-[#F7F8F9]'>Fax: 1-800-222-4545</p>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center">
                                <img src={mail} alt="Clock" />
                                <h2 className="font-Bebas-Regular text-2xl text-[#FFFFFF] my-4">BOOK A TABLE</h2>
                                <h3 className='font-Roboto-Regular text-base text-[#F7F8F9] mb-1'>Email: demo@website.com</h3>
                                <p className='font-Roboto-Regular text-base text-[#F7F8F9]'>Support: support@website.com</p>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center">
                                <img src={map} alt="Clock" />
                                <h2 className="font-Bebas-Regular text-2xl text-[#FFFFFF] my-4">Our Address</h2>
                                <h3 className='font-Roboto-Regular text-base text-[#F7F8F9] mb-1'>123 Stree New York City , United</h3>
                                <p className='font-Roboto-Regular text-base text-[#F7F8F9]'>States Of America</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 pt-20'>
                        <Link className='w-9 md:w-11 lg:w-[53.45px] h-9 md:h-11 lg:h-[53.45px] rounded-full border border-[#E5E7EB] flex justify-center items-center'>
                            <img src={facebook} alt="" />
                        </Link>
                        <Link className='w-9 md:w-11 lg:w-[53.45px] h-9 md:h-11 lg:h-[53.45px] rounded-full border border-[#E5E7EB] flex justify-center items-center'>
                            <img src={twitter} alt="" />
                        </Link>
                        <Link className='w-9 md:w-11 lg:w-[53.45px] h-9 md:h-11 lg:h-[53.45px] rounded-full border border-[#E5E7EB] flex justify-center items-center'>
                            <img src={instagram} alt="" />
                        </Link>
                        <Link className='w-9 md:w-11 lg:w-[53.45px] h-9 md:h-11 lg:h-[53.45px] rounded-full border border-[#E5E7EB] flex justify-center items-center'>
                            <img src={linkedin} alt="" />
                        </Link>
                    </div>
                    <div className='flex justify-center items-center pt-5 md:pt-10'>
                        <p className='font-Roboto-Bold text-base md:text-[21px] text-[#FFFFFF]'>© 2023 All Rights Reserved </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer 