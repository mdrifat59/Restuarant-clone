import React from 'react'
import clock from '/public/img/clock.png'
import phone from '/public/img/phone.png'
import mail from '/public/img/mail.png'
import map from '/public/img/map-pin.png'
import facebook from '/public/img/facebook.png'
import linkedin from '/public/img/linkedin.png'
import instagram from '/public/img/instagram.png'
import twitter from '/public/img/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-[url('/public/img/footerbg.jpeg')] h-screen bg-cover w-full relative">
                <div className="bg-[#000000] absolute inset-0 opacity-80 z-0"></div>

                <div className="max-w-container mx-auto relative z-10 py-28">
                    <div className="w-full  p-4 flex justify-center">
                        <h1 className="font-Bebas-Regular text-6xl text-[#FFFFFF]">We’re ready to give you the best dining experience</h1>
                    </div>

                    <div className="flex ">
                        <div className="flex flex-col-4 items-center pt-20 w-full">
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

                    <div className='flex justify-center items-center gap-10 pt-20'>
                        <Link className='w-[53.45px] h-[53.45px] rounded-full border border-[#E5E7EB] flex justify-center items-center'>
                            <img src={facebook} alt="" />
                        </Link>
                        <Link className='w-[53.45px] h-[53.45px] rounded-full border border-[#E5E7EB] flex justify-center items-center'>
                            <img src={twitter} alt="" />
                        </Link>
                        <Link className='w-[53.45px] h-[53.45px] rounded-full border border-[#E5E7EB] flex justify-center items-center'>
                            <img src={instagram} alt="" />
                        </Link>
                        <Link className='w-[53.45px] h-[53.45px] rounded-full border border-[#E5E7EB] flex justify-center items-center'>
                            <img src={linkedin} alt="" />
                        </Link>
                    </div>
                    <div className='flex justify-center items-center pt-5'>
                        <p className='font-Roboto-Bold text-[21px] text-[#FFFFFF]'>© 2023 All Rights Reserved </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer 