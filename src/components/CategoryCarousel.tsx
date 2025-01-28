"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import procesador from '../assets/procesador.jpeg'
import fuentes from '../assets/fuentes.jpeg'
import monitores from '../assets/monitores.jpeg'
import memoriasRAM from '../assets/memoriasRam.jpeg'
import gabinete from '../assets/gabinete.jpeg'
import placadeVideo from '../assets/placadevideo.webp'
import perifericos from '../assets/perifericos.webp'

export default function Category() {
  const category = [
    { img: procesador, name: "procesadores" },
    { img: fuentes, name: "funtes" },
    { img: monitores, name: "monitores" },
    { img: memoriasRAM, name: "memorias ram" },
    { img: gabinete, name: "gabinetes" },
    { img: perifericos, name: "equipos y notebooks" },
    { img: placadeVideo, name: "placas de video" },
    { img: memoriasRAM, name: "almacenamiento" },
    { img: monitores, name: "monitores" },
    { img: memoriasRAM, name: "memorias ram" },
    { img: gabinete, name: "gabinetes" },
    { img: perifericos, name: "equipos y notebooks" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const totalItems = category.length;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const updateTranslationFactor = () => {
    if (screenWidth > 1024) return 25;
    if (screenWidth > 768) return 50;
    if (screenWidth > 380) return 50;
    return 100;
  };
  const factor = updateTranslationFactor();
  const visibleItems = Math.floor(100 / factor);
  
  const handlePrev = () => {
    const maxIndex = (Math.max(0, (totalItems / 2) - visibleItems) + (totalItems % 2 !== 0 ? 0.5 : 0));
    console.log(maxIndex)
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if(totalItems > (visibleItems * 2)){
      setCurrentIndex(maxIndex);
    }
  };
  const handleNext = () => {
    const maxIndex = (Math.max(0, (totalItems / 2) - visibleItems));
    console.log(maxIndex)
    if (currentIndex < maxIndex && totalItems > (visibleItems * 2)) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  

  return (
    <div className="w-full flex items-center flex-col h-auto p-10 bg-customBlack">
      <div className="grid grid-cols-3 w-full pb-5">
        <h1 className="text-war justify-end items-start flex flex-col sm:flex-row sm:gap-2 sm:mr-10 sm:items-center col-span-2  md:text-xl lg:text-2xl">EXPLORA{" "}
          <span>NUESTRAS{" "}</span>
          <span className="font-bold text-customGreen">CATEGORIAS</span>
        </h1> 
        {totalItems > visibleItems * 2 ? (
          <div className="w-full flex flex-col items-center sm:flex-row sm:gap-5 justify-start ">
            <Button onClick={handlePrev} className="min-w-0 min-h-0 h-10 w-10 p-0 bg-slate-600 text-white opacity-70">❮</Button>
            <Button onClick={handleNext} className="min-w-0 min-h-0 h-10 w-10 p-0 bg-slate-600 text-white opacity-70">❯</Button>
          </div>
          ):(<></>)
        }
      </div>
      <div className="justify-center w-full flex-col flex md:flex-row gap-2 items-center">
        <div className="w-[260px] md:w-[300px] h-[308px] xs:w-[378px] sm:w-[528px] lg:w-[408px] lg:h-[408px] rounded-xl overflow-hidden flex items-end justify-center relative">
            <h1 className="text-white font-bold pb-2 z-20">{`${category[0].name.toLocaleUpperCase()}`}</h1>
            <span className="w-full h-full absolute z-10 bg-gradient-to-b from-transparent via-transparent to-black/50"></span>
            <Image src={category[0].img} alt="image" className="w-full h-full absolute object-cover"
             width={100} 
             height={100} />
        </div>
        <div className="w-full max-w-[261px] xs:max-w-[378px] sm:max-w-[528px] md:max-w-[316px] lg:h-[408px] lg:max-w-[832px] my-1 overflow-hidden">
          <div
            className="grid h-full w-full grid-rows-2 gap-2 grid-flow-col transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (screenWidth > 1024 ? 208 : screenWidth > 768 ? 158 : screenWidth > 640 ? 268 : screenWidth > 380 ? 194 : 268)}px)`,
            }}
          >
            {category.slice(1).map((cate, imgIndex) => (
              <div className="relative w-[260px] h-[100px] xs:w-[185px] sm:w-[260px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
                key={imgIndex}>
                  <div className="w-full h-full relative flex rounded-xl overflow-hidden items-end justify-center">
                    <Image src={cate.img} alt={cate.name} className="w-full h-full object-cover absolute" width={100} height={100}/>
                    <h1 className="text-white pb-2 w-full text-center text-wrap mx-2 z-10 font-bold">
                      {cate.name.toLocaleUpperCase()}
                    </h1>
                    <span className="w-full h-full absolute bg-gradient-to-b from-transparent via-transparent to-black/50"></span>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
