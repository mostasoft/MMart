"use client";

import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward, IoHeartOutline, IoChevronDown } from "react-icons/io5";

// Dummy products data
const productsData = [
  {
    id: 1,
    title: "HP 67XL High Yield Black Original Ink Cartridge",
    imageSrc: "/HP 67XL High Yield Black Original Ink Cartridge.jpg",
    currentPrice: "$34.99",
    oldPrice: "$49.99",
    pricePrefix: "Now",
    isSponsored: true,
    buttonType: "add",
  },
  {
    id: 2,
    title: "MacBook Pro 14-inch, Apple M1 Pro Chip",
    imageSrc: "/MacBook Pro 14-inch, Apple M1 Pro Chip.jpg",
    currentPrice: "$1999.00",
    pricePrefix: "From",
    isSponsored: false,
    buttonType: "options",
  },
  {
    id: 3,
    title: "Logitech MX Master 3 Wireless Mouse",
    imageSrc: "/Logitech MX Master 3 Wireless Mouse.jpg",
    currentPrice: "$79.99",
    oldPrice: "$99.99",
    pricePrefix: "Now",
    isSponsored: false,
    buttonType: "add",
  },
  {
    id: 4,
    title: "Corsair Vengeance LPX 16GB DDR4 RAM",
    imageSrc: "/Corsair Vengeance LPX 16GB DDR4 RAM.jpg",
    currentPrice: "$69.99",
    oldPrice: "$89.99",
    pricePrefix: "Now",
    isSponsored: false,
    buttonType: "add",
  },
];

export default function PopularInCategoryCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-white p-6 relative">
      {/* Header */}
      <h2 className="text-gray-900 font-bold text-2xl mb-4">
        Popular in computer parts, printers & accessories
      </h2>

      {/* Rollback Badge */}
      <div className="absolute -top-3 left-6 bg-red-600 text-white rounded-full px-3 py-1 flex items-center text-sm shadow z-10">
        Rollback <IoChevronDown className="ml-1 w-3 h-3" />
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-50 transition z-10"
        >
          <IoChevronBack className="w-5 h-5 text-gray-700" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-50 transition z-10"
        >
          <IoChevronForward className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }) {
  return (
    <div className="relative bg-white shadow-sm rounded-lg w-72 flex-shrink-0 flex flex-col p-3">
      {/* Sponsored Label */}
      {product.isSponsored && (
        <p className="text-gray-400 text-xs mb-1">Sponsored</p>
      )}

      {/* Product Image */}
      <div className="relative w-full h-48 mb-3">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="w-full h-full object-contain rounded-md"
        />
        {/* Heart Icon */}
        <div className="absolute top-2 right-2 bg-white border border-gray-300 rounded-full p-1 shadow">
          <IoHeartOutline className="w-4 h-4 text-gray-700" />
        </div>
      </div>

      {/* Pricing */}
      <div className="flex flex-col space-y-1 mb-2">
        {product.pricePrefix && (
          <p className="text-gray-600 text-sm">{product.pricePrefix}</p>
        )}
        <p className="text-black font-bold text-lg">{product.currentPrice}</p>
        {product.oldPrice && (
          <p className="text-gray-400 line-through text-sm">{product.oldPrice}</p>
        )}
      </div>

      {/* Title */}
      <p className="text-gray-900 text-sm mb-3 line-clamp-2">{product.title}</p>

      {/* Action Button */}
      <button
        className={`mt-auto px-3 py-1 text-sm rounded-full border w-full ${
          product.buttonType === "options"
            ? "bg-white text-gray-900 border-gray-400"
            : "bg-white text-green-600 border-gray-400"
        }`}
      >
        {product.buttonType === "options" ? "Options" : "+ Add"}
      </button>
    </div>
  );
}
