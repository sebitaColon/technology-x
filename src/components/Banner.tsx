import React from "react";
import Image from "next/image";
import imgBannerCallOfDuty from "@/assets/bannerCallOfDuty.jpeg";
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
      <div className="absolute grid grid-cols-3 w-full h-10 z-10">
        <div className="w-full h-full bg-customBlack border-b-1 border-customGreen"></div>
        <div className="w-full h-full bg-transparent relative overflow-hidden flex items-center justify-center">
          <div className="w-full border-t-1 border-customGreen h-full"></div>
          <div className="w-16 h-16 absolute -right-8 border-l-1 border-customGreen bottom-3 bg-customBlack -rotate-45"></div>
          <div className="w-16 h-16 absolute -left-8 border-b-1 border-customGreen bottom-3 bg-customBlack  -rotate-45"></div>
        </div>
        <div className="w-full h-full bg-customBlack border-b-1 border-customGreen"></div>
      </div>
      <div className="absolute grid grid-cols-3 w-full h-10 bottom-0 rotate-180 z-10">
        <div className="w-full h-full bg-customGrayDark border-b-1 border-customGreen"></div>
        <div className="w-full h-full bg-transparent relative overflow-hidden flex items-center justify-center">
          <div className="w-full border-t-1 border-customGreen h-full"></div>
          <div className="w-16 h-16 absolute -right-8 border-l-1 border-customGreen bottom-3 bg-customGrayDark -rotate-45"></div>
          <div className="w-16 h-16 absolute -left-8 border-b-1 border-customGreen bottom-3 bg-customGrayDark  -rotate-45"></div>
        </div>
        <div className="w-full h-full bg-customGrayDark border-b-1 border-customGreen"></div>
      </div>
      <Image
        src={imgBannerCallOfDuty}
        alt=""
        className="h-[30vh] md:h-[50vh] object-cover w-full"
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
