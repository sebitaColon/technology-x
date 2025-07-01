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
      {/* Top decorative border */}
      <div className="absolute grid grid-cols-3 w-full h-10 z-10">
        <div className="w-full h-full bg-customBlack border-b border-customGreen" />
        <div className="relative flex items-center justify-center overflow-hidden">
          <div className="w-full h-full border-t border-customGreen" />
          <div className="w-16 h-16 absolute -right-8 bottom-3 bg-customBlack border-l border-customGreen -rotate-45" />
          <div className="w-16 h-16 absolute -left-8 bottom-3 bg-customBlack border-b border-customGreen -rotate-45" />
        </div>
        <div className="w-full h-full bg-customBlack border-b border-customGreen" />
      </div>

      {/* Bottom decorative border (flipped) */}
      <div className="absolute grid grid-cols-3 w-full h-10 bottom-0 rotate-180 z-10">
        <div className="w-full h-full bg-customGrayDark border-b border-customGreen" />
        <div className="relative flex items-center justify-center overflow-hidden">
          <div className="w-full h-full border-t border-customGreen" />
          <div className="w-16 h-16 absolute -right-8 bottom-3 bg-customGrayDark border-l border-customGreen -rotate-45" />
          <div className="w-16 h-16 absolute -left-8 bottom-3 bg-customGrayDark border-b border-customGreen -rotate-45" />
        </div>
        <div className="w-full h-full bg-customGrayDark border-b border-customGreen" />
      </div>

      {/* Background image */}
      <Image
        src={imgBannerCallOfDuty}
        alt="Call of Duty banner"
        className="h-[30vh] md:h-[50vh] object-cover w-full"
      />

      {/* Overlay content */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center gap-2 bg-overlay backdrop-blur-sm">
        <h1 className="text-xs md:text-3xl font-bold">OUR PLATFORMS</h1>
        <div className="flex items-center justify-center gap-2 md:gap-10 w-full">
          <FontAwesomeIcon icon={faPlaystation} className="w-10 md:w-20" />
          <FontAwesomeIcon icon={faXbox} className="w-10 md:w-20" />
          <FontAwesomeIcon icon={faSteam} className="w-10 md:w-20" />
          <FontAwesomeIcon icon={faGamepad} className="w-10 md:w-20" />
          <FontAwesomeIcon icon={faUnity} className="w-10 md:w-20" />
        </div>
      </div>
    </div>
  );
}
