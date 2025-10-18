"use client";

import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Dummy data
const socialTrendsData = [
  {
    id: 1,
    imageSrc: "/No Boundaries Sueded Ankle....jpg",
    creatorHandle: "@joyinstyleblog",
    productTags: [
      {
        productName: "No Boundaries Sueded Ankle...",
        price: "$7.98",
        dotPosition: { top: "70%", left: "30%" },
        tagPosition: { top: "65%", left: "35%" },
      },
    ],
  },
  {
    id: 2,
    imageSrc: "/Skeleton Gummy Bear .jpg",
    creatorHandle: "@sp0kywitch",
    productTags: [
      {
        productName: "Skeleton Gummy Bear Plush...",
        price: "$3.42",
        dotPosition: { top: "60%", left: "50%" },
        tagPosition: { top: "55%", left: "53%" },
      },
    ],
  },
  {
    id: 3,
    imageSrc: "/No Boundaries Barn .jpg",
    creatorHandle: "@fashionqueen",
    productTags: [
      {
        productName: "No Boundaries Barn Jacket...",
        price: "$19.97",
        dotPosition: { top: "65%", left: "25%" },
        tagPosition: { top: "60%", left: "28%" },
      },
    ],
  },
  {
    id: 4,
    imageSrc: "/No Boundaries Barn .jpg",
    creatorHandle: "@fashionqueen",
    productTags: [
      {
        productName: "No Boundaries Barn Jacket...",
        price: "$19.97",
        dotPosition: { top: "65%", left: "25%" },
        tagPosition: { top: "60%", left: "28%" },
      },
    ],
  },
];

export default function TrendingSocialCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="bg-white p-6 relative">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-gray-900 font-bold text-2xl">Trending on social</h2>
        <p className="text-gray-400 text-sm mt-1">Shop creator faves</p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {socialTrendsData.map((item) => (
            <SocialTrendCard key={item.id} item={item} />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-50 z-10"
        >
          <IoChevronBack className="w-5 h-5 text-gray-700" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-50 z-10"
        >
          <IoChevronForward className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

// Social Trend Card Component
function SocialTrendCard({ item }) {
  return (
    <div className="relative w-[320px] h-[480px] rounded-xl flex-shrink-0 overflow-hidden">
      {/* Background Image */}
      <img
        src={item.imageSrc}
        alt={item.creatorHandle}
        className="w-full h-full object-cover"
      />

      {/* Product Tags */}
      {item.productTags.map((tag, idx) => (
        <div key={idx}>
          {/* Dot */}
          <div
            className="absolute w-3 h-3 bg-white rounded-full border border-gray-300 z-10"
            style={{ top: tag.dotPosition.top, left: tag.dotPosition.left }}
          ></div>

          {/* Tag Box */}
          <div
            className="absolute bg-gray-800 text-white text-xs rounded-md px-2 py-1 flex items-center z-10 shadow-md"
            style={{ top: tag.tagPosition.top, left: tag.tagPosition.left }}
          >
            <span className="truncate max-w-[120px]">{tag.productName}</span>
            <span className="ml-1 font-bold">{tag.price}</span>
          </div>
        </div>
      ))}

      {/* Creator Handle */}
      <p className="absolute bottom-2 left-2 text-white text-sm drop-shadow-md">
        {item.creatorHandle}
      </p>
    </div>
  );
}
