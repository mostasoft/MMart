"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

export default function HeroBanner() {
  return (
    <section className="relative p-4 w-full bg-[#0071CE] text-white py-12 overflow-hidden rounded-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative gap-10">
        {/* Left Content */}
        <BannerContent />

        {/* Right Visual Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
          <BannerVisuals />
          <DealsBadge />
        </div>
      </div>
    </section>
  );
}

function BannerContent() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center sm:items-center md:items-start justify-center text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-xl">
        Up to 40% off top fashion brands
      </h1>
      <button className="mt-8 bg-white text-[#1a1a1a] font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
        Shop Deals
      </button>
    </div>
  );
}


function BannerVisuals() {
  // Images for carousel
  const images = [
    "/Electronics Deals.jpg",
    "/Fashion Deals.jpg",
    "/Kids’ Wool Cardigan.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto slide
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-[90%] max-w-md bg-white rounded-3xl shadow-xl overflow-hidden -mt-8 lg:mt-12">
      {/* Product Image */}
      <div className="relative w-full h-72 sm:h-80 transition-all duration-500 ease-in-out">
        <Image
          src={images[current]}
          alt="Fashion Products"
          fill
          className="object-cover transition-all duration-700"
        />
      </div>

      {/* Carousel Controls */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <button
          onClick={prevSlide}
          className="w-9 h-9 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-9 h-9 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button
          onClick={nextSlide}
          className="w-9 h-9 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              i === current ? "bg-[#0071CE]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

function DealsBadge() {
  return (
    <div className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 z-20">
      <div className="relative bg-[#0071CE] text-white rounded-full w-24 flex flex-col items-center overflow-hidden shadow-lg border-2 border-white">
        <span className="pt-3 text-xs font-semibold tracking-wide">Walmart</span>
        <span className="text-2xl font-extrabold leading-none">DEALS</span>
        <div className="absolute bottom-0 bg-red-600 text-white text-[11px] font-semibold w-full text-center py-1">
          LAST DAY!
        </div>
      </div>
    </div>
  );
}
