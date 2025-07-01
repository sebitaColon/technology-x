import React from "react";
import Image from "next/image";
import imgMouse from "@/assets/mouse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Head() {
  return (
    <section className="w-full p-5 sm:px-20 sm:pt-10 md:px-0 md:pt-0 h-auto md:h-[calc(100vh-64px)] bg-customBlack md:grid grid-cols-2">
      {/* Left Text Area */}
      <div className="col-span-1 flex flex-col justify-center h-full pb-10 md:pb-0 md:pl-20">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
          GAMING MOUSE MOBA M908 IMPACT
        </h1>
        <p className="text-gray-400 text-sm md:text-base lg:text-xl py-5">
          The IMPACT mouse is built for top performance in MOBA and MMORPG games. Its ergonomic shape ensures comfort during long sessions, and its 18 fully programmable buttons give you the competitive edge you need. Comfort and precision, hour after hour.
        </p>
        <button className="bg-gray-600 py-2 max-w-32 md:max-w-52 transition duration-300 w-auto hover:drop-shadow-5xl hover:bg-customGreen hover:text-black">
          View More
        </button>
      </div>

      {/* Right Image Area */}
      <div className="w-full h-full flex flex-col justify-center md:pr-20">
        <Image
          src={imgMouse}
          alt="Gaming Mouse M908 Impact"
          className="filter drop-shadow-4xl w-full h-auto"
        />
        <div className="flex justify-center md:justify-end gap-6 mt-5 mb-20 md:pr-24">
          {[faFacebook, faTwitch, faXTwitter, faInstagram].map((icon, i) => (
            <FontAwesomeIcon
              key={i}
              icon={icon}
              className="text-customGray hover:text-customGreen hover:drop-shadow-lg transition"
              width={20}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
