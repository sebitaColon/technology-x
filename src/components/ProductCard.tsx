import React from "react";
import Image from "next/image";
import imgMouse from "@/assets/mouse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductCard() {
  return (
    <div className="w-full h-auto flex pb-10 flex-col rounded-3xl group items-center hover:shadow-custom-green p-2">
      <div className="w-full min-h-60 relative mb-5">
        {/* Overlay with icons */}
        <div className="absolute w-0 h-full bg-overlayCard rounded-2xl group-hover:h-full group-hover:w-full transition-all ease-in-out delay-75 right-0 flex flex-col items-end justify-end">
          {[faCartPlus, faHeart, faPlus].map((icon, i) => (
            <FontAwesomeIcon
              key={i}
              icon={icon}
              width={20}
              className="opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300 mb-2 mr-2 text-white w-5 h-5 rounded-full border border-white p-3 hover:text-customGreen hover:border-customGreen hover:drop-shadow-xl"
            />
          ))}
        </div>

        {/* Product image */}
        <Image
          src={imgMouse}
          alt="Gaming mouse product"
          className="h-full w-auto object-cover rounded-2xl"
        />
      </div>

      {/* Product info */}
      <h1 className="text-white font-bold">GAMING PC</h1>
      <h2 className="text-customGreen">USD 500.00</h2>
    </div>
  );
}
