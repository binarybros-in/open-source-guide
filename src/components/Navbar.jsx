import React from 'react'
import { SiHackerearth } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";



const Navbar = () => {
  return (
    <div className='max-w-[1080px] h-20 mx-auto px-6 py-4 bg-white text-white bg-opacity-10 rounded-full'>
        <div className='flex justify-between items-center'>
          <div><SiHackerearth className='w-8 h-8' /></div>
          <div>
            <ul className='flex items-center gap-10 font-semibold text-xl'>
              <li><a href="">Home</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">Upcoming Quix</a></li>
              <li><a href="">Hiring</a></li>
              <li><a href="">Sales</a></li>
            </ul>
          </div>
          <div className='bg-blue-500 rounded-full px-5 py-3'><button className='flex items-center gap-5'>
            Get Started <FaArrowRightLong />
          </button></div>
        </div>
    </div>
  )
}

export default Navbar