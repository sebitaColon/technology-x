import React from 'react'
import Image from 'next/image'
import imgEjemplo from '@/assets/IMPACT.png'

export default function ProductCard() {
  return (
    <div className='w-full h-auto flex pb-10 flex-col rounded-3xl group items-center hover:shadow-custom-green p-2'>
        <div className='w-full min-h-60 relative mb-5'>
            <span className='absolute w-0 h-full bg-overlayCard rounded-2xl group-hover:h-full group-hover:w-full transition-all ease-in-out delay-75 right-0'></span>
            <Image src={imgEjemplo} alt='imgEjemplo' className='h-full w-auto object-cover rounded-2xl'/>
        </div>
        <h1 className='text-white font-bold'>PC GAMER</h1>
        <h2 className='text-customGreen'>USD 500,00</h2>
    </div>
  )
}
