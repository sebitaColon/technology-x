import React from "react";
import Image from "next/image";
import imgBanner from "@/assets/banner1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaystation,
  faSteam,
  faUnity,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  return (
    <div className="w-full max-h-[50vh] relative flex justify-center">
      <Image
        src={imgBanner}
        alt=""
        className="max-h-[50vh] object-cover w-full"
      />
      <div className="w-full h-full absolute flex gap-2 flex-col bg-overlay backdrop-blur-sm  items-center justify-center">
        <h1 className=" text-xs md:text-3xl font-bold">NUESTRAS PLATAFROMAS</h1>
        <div className="flex h-auto items-center gap-2 md:gap-10 justify-center w-full">
          <FontAwesomeIcon
            icon={faPlaystation}
            width={100}
            className="w-10 md:w-20"
          />
          <FontAwesomeIcon icon={faXbox} width={100} className="w-10 md:w-20" />
          <FontAwesomeIcon
            icon={faSteam}
            width={100}
            className="w-10 md:w-20"
          />
          <FontAwesomeIcon
            icon={faGamepad}
            width={100}
            className="w-10 md:w-20"
          />
          <FontAwesomeIcon
            icon={faUnity}
            width={100}
            className="w-10 md:w-20"
          />
        </div>
      </div>
    </div>
  );
}
