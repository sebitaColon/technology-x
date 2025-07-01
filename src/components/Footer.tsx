import React from "react";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitch,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@heroui/react";
import taxData from "@/assets/taxData.jpeg";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full grid-cols-1 lg:grid-cols-4 px-5 xs:px-20 md:px-32 py-5 bg-customGrayDark grid">
        {/* Logo or Tax Information */}
        <div className="flex items-center justify-center">
          <Image src={taxData} alt="Legal Info" className="h-20 lg:h-24 w-auto" />
        </div>

        {/* Support Buttons */}
        <div className="border-y-1 lg:border-y-0 lg:border-x-1 border-white flex flex-col items-center justify-center gap-4 py-4">
          <button className="bg-gray-600 py-1 px-3 rounded-md max-w-[200px] hover:bg-customGreen hover:text-black transition duration-300">
            Support
          </button>
          <button className="bg-gray-600 py-1 px-3 rounded-md max-w-[200px] hover:bg-customGreen hover:text-black transition duration-300">
            Refund Button
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="border-b-1 lg:border-b-0 lg:border-r-1 border-white flex flex-col items-center justify-center gap-4 py-4">
          <h2 className="text-white font-semibold">FOLLOW US</h2>
          <div className="flex gap-3">
            {[faYoutube, faFacebook, faTwitch, faXTwitter, faTiktok, faInstagram, faWhatsapp].map((icon, i) => (
              <FontAwesomeIcon
                key={i}
                icon={icon}
                className="text-white hover:text-customGreen hover:drop-shadow-md"
                width={25}
              />
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-2 items-center justify-center py-4">
          <Link className="text-white text-sm hover:underline cursor-pointer">Work with us!</Link>
          <Link className="text-white text-sm hover:underline cursor-pointer">Terms & Conditions</Link>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="w-full bg-white text-center py-2">
        <p className="text-black text-xs px-2">
          The trademarks and logos on technologyX.com and technologyX.com/reviews are owned by Newton Station SRL.
          <br />
          All rights reserved © 2017. Photos by technologyX.
        </p>
      </div>
    </footer>
  );
}
