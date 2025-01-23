import React from 'react'
import Image from 'next/image'
import imgAuriculares from '@/assets/auricular.png'

export default function ProductOverview() {
  return (
    <div className='bg-customGrayDark w-full h-[50vh] grid grid-cols-2 px-36'>
        <div className='w-full h-full'>
            <Image src={imgAuriculares} className='max-h-[50vh] h-full w-auto' alt='auriculares'></Image>
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className="text-3xl font-bold">Auricular con Cable - Modelo GH-509</h1>
            <p className="text-gray-400 py-5">
            Podras disfrutar del mejor gameplay con tus GH-059, sirven para todas las consolas y pc, con lo cual puedes disfrutar de tus auriculares favoritos en cualquiera de los dispositivos que utilices para jugar! Con un bajo potente y profundo, tiene la excelente sonido ademas de almohadones suaves y vincha ajustable para sesiones largas de gaming.
            </p>
            <button className="bg-gray-600 py-2 max-w-52 transition duration-300 w-auto hover:drop-shadow-5xl hover:bg-customGreen hover:text-black">
            View More
            </button>
        </div>
    </div>
  )
}
