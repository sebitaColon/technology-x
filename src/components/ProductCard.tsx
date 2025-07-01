import React from "react";
import Image from "next/image";
import imgMouse from "@/assets/mouse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard() {
  return (
    <div className="w-full h-auto flex pb-10 flex-col rounded-3xl group items-center hover:shadow-custom-green p-2">
      <div className="w-full min-h-60 relative mb-5">
        <div className="absolute w-0 h-full bg-overlayCard rounded-2xl group-hover:h-full group-hover:w-full transition-all ease-in-out delay-75 right-0 flex flex-col items-end justify-end">
          <FontAwesomeIcon
            icon={faCartPlus}
            width={20}
            className="opacity-0 hover:text-customGreen hover:drop-shadow-xl hover:shadow-custom-green hover:border-customGreen scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 mb-2 mr-2 text-white w-5 h-5 rounded-full border border-white p-3"
          />
          <FontAwesomeIcon
            icon={faHeart}
            width={20}
            className="opacity-0 hover:text-customGreen hover:drop-shadow-xl hover:shadow-custom-green hover:border-customGreen  scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 mb-2 mr-2 text-white w-5 h-5 rounded-full border border-white p-3"
          />
          <FontAwesomeIcon
            icon={faAdd}
            width={20}
            className="opacity-0 hover:text-customGreen hover:drop-shadow-xl hover:shadow-custom-green hover:border-customGreen  scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 mb-2 mr-2 text-white w-5 h-5 rounded-full border border-white p-3"
          />
        </div>
        <Image
          src={imgMouse}
          alt="imgEjemplo"
          className="h-full w-auto object-cover rounded-2xl"
        />
      </div>
      <h1 className="text-white font-bold">PC GAMER</h1>
      <h2 className="text-customGreen">USD 500,00</h2>
    </div>
  );
}
