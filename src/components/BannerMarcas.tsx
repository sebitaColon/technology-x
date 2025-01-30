"use client";
import React, { useEffect, useState } from "react";
import MSI from "@/assets/bannerMSI.jpeg";
import ASUS from "@/assets/bannerASUS.jpeg";
import APPLE from "@/assets/bannerAPPLE.avif";
import ACER from "@/assets/bannerACER.webp";

import Image from "next/image";
import { Button } from "@heroui/react";

export default function BannerMarcas() {
  const banner = [
    { img: MSI, name: "MSI" },
    { img: ASUS, name: "ASUS" },
    { img: APPLE, name: "APPLE" },
    { img: ACER, name: "ACER" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    const maxIndex = banner.length - 1;
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex);
    }
  };
  const handleNext = () => {
    const maxIndex = banner.length - 1;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  return (
    <div className="w-full h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] overflow-hidden relative">
      <Button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 min-w-0 min-h-0 h-10 w-10 p-0 bg-slate-600 text-white opacity-70"
      >
        ❮
      </Button>
      <Button
        onClick={handleNext}
        className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 min-w-0 min-h-0 h-10 w-10 p-0 bg-slate-600 text-white opacity-70"
      >
        ❯
      </Button>
      <div
        className="w-[200vw] h-full flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
        }}
      >
        {banner.map((banner, index) => (
          <Image
            key={index + 1}
            src={banner.img}
            alt={`${banner.name}`}
            className="w-[100vw] h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
