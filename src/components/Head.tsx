import React from "react";
import img from "@/assets/IMPACT.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Head() {
  return (
    <div className="w-full p-5 sm:px-20 sm:pt-10 md:px-0 md:pt-0 h-auto md:h-[calc(100vh-64px)] bg-customBlack md:grid grid-cols-2">
      <div className="col-span-1 h-full pb-10 md:pb-0 flex justify-center flex-col md:pl-20">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
          MOUSE GAMER MOBA M908 IMPACT
        </h1>
        <p className="text-gray-400 text-sm md:text-medium lg:text-xl py-5">
          el impact es un mouse diseñado para obtener los mejores resultados en
          juegos de MODA y MMORPG, con su forma ergonomica te asegura la
          comodidad que nesecitas en partidas prolongadas y 18 botones
          completamente configurables. Comodidas para horas y horas de juegos
          continuas es lo que les espera.
        </p>
        <button className="bg-gray-600 py-2 max-w-32 md:max-w-52 transition duration-300 w-auto hover:drop-shadow-5xl hover:bg-customGreen hover:text-black">
          View More
        </button>
      </div>
      <div className="w-full h-full flex flex-col justify-center md:justify-center md:pr-20">
        <Image src={img} alt="image" className="filter drop-shadow-4xl" />
        <div className="w-full md:w-auto flex gap-10 h-10 mt-5 mb-20 justify-center items-center md:justify-end md:pr-24">
          <FontAwesomeIcon
            icon={faFacebook}
            width={20}
            className="hover:text-customGreen hover:drop-shadow-4xl text-customGray"
          />
          <FontAwesomeIcon
            icon={faTwitch}
            width={20}
            className="hover:text-customGreen hover:drop-shadow-4xl text-customGray"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            width={20}
            className="hover:text-customGreen hover:drop-shadow-4xl text-customGray"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            width={20}
            className="hover:text-customGreen hover:drop-shadow-4xl text-customGray"
          />
        </div>
      </div>
    </div>
  );
}
