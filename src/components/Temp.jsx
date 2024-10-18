import React from 'react'

import '../Styles/UmraTravelPkg.css'

import clothes from '../assetss/UmraTravelPkg/clothes.png'
import food from '../assetss/UmraTravelPkg/food.png'
import hottel from '../assetss/UmraTravelPkg/hottel.png'

import { IoStarSharp } from "react-icons/io5";

import cardImg from '../assetss/UmraTravelPkg/thirdHeroSection.svg'
import lablePice from '../assetss/UmraTravelPkg/lablePice.svg'



function UmraTravelPkg() {
    return (
        <div className='thirdHeroSection flex items-center justify-center my-10'>


            <div className='bg-hoverColor w-[50%]'>
                <div className='text-center'>
                    <h1 className='text-[1.2rem] font-semibold'>Discover Our Unique Umrah Travel Packages</h1>
                    <p>
                        Embark on a unique journey with our specially crafted Hajj and Umrah packages. Experience comfort and spiritual enrichment every step of the way.
                    </p>
                </div>
                <div>
                    <div className='bg-green-600 relative w-[27rem]  flex flex-col items-center justify-center' >

                        <img src={cardImg} alt="" className='h-[15rem] rounded-t-full imgShadow' />

                        <div className="absolute top-[7rem] left-[18.8rem] bg-hoverColor w-[8rem] text-[0.9rem] text-white py-1 px-[0.9rem]  rounded-bl-lg flex flex-col items-center">
                            <span className="font-semibold">Starts From </span>
                            <span className="font-semibold">₹ 99,000/-</span>
                            {/* <div className="ml-2 w-0 h-0 border-t-[20px] border-t-transparent border-l-[20px] border-l-[#1A1A1A] border-b-[20px] border-b-transparent"></div> */}
                            <img src={lablePice} alt="" className="absolute top-[3.2rem] left-[5.9rem] w-[2rem]" />
                        </div>


                        <div className='bg-yellow-500 text-center w-[22.5rem] px-10 gap-3 py-5 flex flex-col contShadow ' >
                            <div className='bg-green-400 border-white border-b-2 border-dashed'>
                                <h1 className='font-bold'>Super Deluxe Land Package</h1>
                                <p>
                                    Mecca Tara Khalil 100 Meter Harm Madina Rama Madina
                                </p>
                            </div>
                            <p className='flex bg-red-500 items-center justify-center' >
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </p>

                            <div className='flex flex-col justify-center gap-3 bg-red-500 '>
                                <h1 className='flex gap-2 bg-green-500 border-white border-b-2'>
                                    <img src={hottel} alt="" />
                                    <h1>Hayat Regency (15 Days)</h1>
                                </h1>
                                <h1 className='flex gap-2 border-white border-b-2'>
                                    <img src={food} alt="" />
                                    <h1>Food With Buffet </h1>
                                </h1>
                                <h1 className='flex gap-2 border-white border-b-2'>
                                    <img src={clothes} alt="" />
                                    <h1>Loundry</h1>
                                </h1>
                            </div>

                            <button className='bg-brandCol py-2 text-white rounded-md'>Enquiry Now</button>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UmraTravelPkg