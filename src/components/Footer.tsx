import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitch,
  faTwitter,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@heroui/react";
import React from "react";
import dataFiscal from '@/assets/datafiscal.jpeg'
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full h-auto relative">
      <div className="w-full h-auto lg:grid px-5 xs:px-20 md:px-32 py-5 lg:grid-cols-4 bg-customGrayDark">
        <div className="w-full max-h-40 flex items-center justify-center">
            <Image src={dataFiscal} alt='data' className="w-auto pb-2 h-20 lg:h-24"></Image>
        </div>
        <div className="w-full h-40 border-y-1 lg:border-y-0 lg:border-x-1 border-white flex gap-4 items-center justify-center flex-col">
          <button className="bg-gray-600 py-1 px-2 rounded-md max-w-32 md:max-w-52 transition duration-300 w-auto hover:drop-shadow-5xl hover:bg-customGreen hover:text-black">
            Ayuda
          </button>
          <button className="bg-gray-600 py-1 px-2 rounded-md max-w-32 md:max-w-52 transition duration-300 w-auto hover:drop-shadow-5xl hover:bg-customGreen hover:text-black">
            Boton de arrepentimiento
          </button>
        </div>
        <div className="w-full flex gap-5 border-b-1 lg:border-b-0 lg:border-r-1 border-white items-center justify-center flex-col h-40">
          <h1>SEGUINOS EN</h1>
          <div className="w-auto h-auto flex gap-2">
            <FontAwesomeIcon
              icon={faYoutube}
              width={30}
              className="hover:text-customGreen hover:drop-shadow-1xl text-white"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              width={30}
              className="hover:text-customGreen hover:drop-shadow-1xl text-white"
            />
            <FontAwesomeIcon
              icon={faTwitch}
              width={30}
              className="hover:text-customGreen hover:drop-shadow-1xl text-white"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              width={30}
              className="hover:text-customGreen hover:drop-shadow-1xl text-white"
            />
            <FontAwesomeIcon
              icon={faTiktok}
              width={30}
              className="hover:text-customGreen hover:drop-shadow-1xl text-white"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              width={30}
              className="hover:text-customGreen hover:drop-shadow-1xl text-white"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              width={30}
              className="hover:text-customGreen hover:drop-shadow-1xl text-white"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 items-center justify-center min-h-16">
            <Link className="text-white">Trabaja con nosotros!</Link>
            <Link className="text-white">Terminos y Condiciones</Link>
        </div>
      </div>
      <div className="w-full h-auto items-center py-1 justify-center bg-white">
        <h1 className="w-full text-black text-center text-xs">
          Las marcas y logos de technologyX.com technologyX.com/reviews son
          Propiedad de Newton Station SRL. <br></br> Todos los derechos
          reservados 2017. Foto de technologyX
        </h1>
      </div>
    </div>
  );
}
