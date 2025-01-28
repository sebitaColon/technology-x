import React from 'react'
import Image from 'next/image'
import imgBanner from '@/assets/banner1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation, faSteam, faUnity, faXbox } from '@fortawesome/free-brands-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {
  return (
    <div className='w-full max-h-[50vh] relative flex justify-center'>
        <Image src={imgBanner} alt='' className='max-h-[50vh] object-cover w-full'/>
        <h1 className='absolute top-20 z-20 text-3xl font-bold'>NUESTRAS PLATAFROMAS</h1>
        <div className='absolute flex items-center bg-overlay backdrop-blur-sm gap-10 justify-center w-full inset-0'>
            <FontAwesomeIcon icon={faPlaystation} width={100} className='' />
            <FontAwesomeIcon icon={faXbox} width={100} className='' />
            <FontAwesomeIcon icon={faSteam} width={100} className='' />
            <FontAwesomeIcon icon={faGamepad} width={100} className='' />
            <FontAwesomeIcon icon={faUnity} width={100} className='' />
        </div>
    </div>
  )
}
