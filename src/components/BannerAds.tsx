"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

import MSI from "@/assets/bannerMSI.jpeg";
import ASUS from "@/assets/bannerASUS.jpeg";
import APPLE from "@/assets/bannerAPPLE.avif";
import ACER from "@/assets/bannerACER.webp";

export default function BannerAds() {
  const banners = [
    { img: MSI, name: "MSI" },
    { img: ASUS, name: "ASUS" },
    { img: APPLE, name: "APPLE" },
    { img: ACER, name: "ACER" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] overflow-hidden relative">
      {/* Navigation buttons */}
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

      {/* Banner images */}
      <div
        className="w-[400vw] h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {banners.map((item, index) => (
          <Image
            key={index}
            src={item.img}
            alt={item.name}
            className="w-[100vw] h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
