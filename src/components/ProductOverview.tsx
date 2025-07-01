import React from 'react'
import Image from 'next/image'
import imgHandset from '@/assets/handset.png'

// Component that displays a featured product (headset) with image and description
export default function ProductOverview() {
  return (
    <div className='bg-customGrayDark p-5 sm:px-20 sm:pt-10 md:pt-0 flex flex-col w-full h-auto lg:py-10 lg:h-[50vh] lg:grid grid-cols-2 lg:px-36'>
      
      {/* Product image section */}
      <div className='w-full h-full flex items-center py-10 justify-center'>
        <Image
          src={imgHandset}
          className='max-h-[50vh] h-full w-auto'
          alt='auriculares'
        />
      </div>

      {/* Product text content section */}
      <div className='flex flex-col justify-center'>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
          Wired Headset - Model GH-509
        </h1>
        <p className="text-gray-400 text-sm md:text-medium lg:text-xl py-5">
          Enjoy the best gameplay with your GH-059 headset. Compatible with all consoles and PCs, allowing you to use them on any gaming device. With powerful deep bass, excellent sound quality, soft ear pads, and adjustable headband for long gaming sessions.
        </p>
        <button className="bg-gray-600 py-2 max-w-32 md:max-w-52 transition duration-300 w-auto hover:drop-shadow-5xl hover:bg-customGreen hover:text-black">
          View More
        </button>
      </div>
    </div>
  )
}
