import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className='max-w-[1080px] mx-auto text-white'>
        <div className='flex justify-between gap-5'>

            <div className='relative'>
                <img src="./ast.gif" alt="" className='max-w-[500px] max-h-[500px] z-99' />
                <div className='w-[200px] h-[200px] bg-purple-500 absolute -z-50 rounded-full top-[50px] left-[150px]'></div>
            </div>

            <div className='flex flex-col mt-20 gap-10 items-start'>
                <div>
                    <h1 className='text-6xl max-w-[580px] leading-[6.2vh] text-left font-bold'>Unlock your Full potential with <span className='text-purple-800'>Hackerrank</span></h1>
                </div>

                <div className='bg-blue-500 rounded-full px-5 py-3'><button className='flex items-center gap-5'>
            Get Started <FaArrowRightLong />
          </button></div>

            </div>
        </div>
    </div>
  )
}

export default HeroSection