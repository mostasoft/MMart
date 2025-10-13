"use client";

import React, { useRef } from "react";
import { IoChevronForward } from "react-icons/io5";

export default function CategoryCarousel() {
  const scrollRef = useRef(null);

  // Dummy category data
  const categories = [
    { id: 1, label: "Grocery Deals", imageSrc: "/Grocery Deals.jpg" },
    { id: 2, label: "Home Deals", imageSrc: "/Home Deals.jpg" },
    { id: 3, label: "Patio & Garden Deals", imageSrc: "/Patio & Garden Deals.jpg" },
    { id: 4, label: "Electronics Deals", imageSrc: "/Electronics Deals.jpg" },
    { id: 5, label: "Fashion Deals", imageSrc: "/Fashion Deals.jpg" },
    { id: 7, label: "Toys & Games", imageSrc: "/Toys & Games.jpg" },
    { id: 8, label: "Toys & Games", imageSrc: "/Toys & Games.jpg" },
    { id: 9, label: "Toys & Games", imageSrc: "/Toys & Games.jpg" },
    { id: 10, label: "Toys & Games", imageSrc: "/Toys & Games.jpg" },
    { id: 11, label: "Toys & Games", imageSrc: "/Toys & Games.jpg" },
    { id: 12, label: "Toys & Games", imageSrc: "/Toys & Games.jpg" },
  ];

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white p-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-900 font-bold text-xl">
          Shop Deals by category
        </h2>
        <a href="#" className="text-[#0071ce] font-medium text-sm">
          View all
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide py-2"
        >
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center w-32 flex-shrink-0">
              {/* Blue square card */}
              <div className="bg-[#0071ce] w-32 h-32 rounded-lg flex items-center justify-center p-2 shadow-sm">
                <img
                  src={category.imageSrc}
                  alt={category.label}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Label */}
              <p className="mt-2 text-center text-gray-900 text-sm font-medium">
                {category.label}
              </p>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-50 transition"
        >
          <IoChevronForward className="text-gray-700 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
