"use client";
import React, { useEffect, useState } from "react";
import handset from "@/assets/handset.png";
import { Button } from "@heroui/react";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
  // Static array of product images (can be replaced by real data)
  const products = [
    handset,
    handset,
    handset,
    handset,
    handset,
    handset,
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track current scroll index
  const [translationFactor, setTranslationFactor] = useState(0); // % of slide per item
  const [screenWidth, setScreenWidth] = useState<number>(0); // Used to determine responsive behavior

  const totalItems = products.length;

  // Update screen width on mount and when resizing
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // Initialize width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  // Responsive translation factor based on screen width
  const updateTranslationFactor = () => {
    if (screenWidth < 768) return 50;     // 2 items per view
    if (screenWidth < 1024) return 33.3;  // 3 items per view
    return 25;                            // 4 items per view
  };

  // Move to previous item
  const handlePrev = () => {
    const factor = updateTranslationFactor();
    const visibleItems = Math.floor(100 / factor); // items visible at once
    const maxIndex = Math.max(0, totalItems - visibleItems); // max scroll index

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // loop to end
    }
    setTranslationFactor(factor); // update factor after resize
  };

  // Move to next item
  const handleNext = () => {
    const factor = updateTranslationFactor();
    const visibleItems = Math.floor(100 / factor);
    const maxIndex = Math.max(0, totalItems - visibleItems);

    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      setTranslationFactor(factor);
    } else {
      setCurrentIndex(0); // loop to beginning
    }
  };

  return (
    <div className="w-full h-auto bg-customGrayDark flex justify-center">
      <div className="relative w-full h-full pl-5 xs:pl-0 py-10 flex items-center lg:max-w-[1300px] overflow-hidden">
        {/* Navigation buttons */}
        <Button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 min-w-0 w-5 p-0 bg-slate-600 text-white opacity-70"
        >
          ❮
        </Button>
        <Button
          onClick={handleNext}
          className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 min-w-0 w-5 p-0 bg-slate-600 text-white opacity-70"
        >
          ❯
        </Button>

        {/* Product slide container */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * translationFactor}%)`,
          }}
        >
          {/* Render product cards */}
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 px-2 text-black"
            >
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
