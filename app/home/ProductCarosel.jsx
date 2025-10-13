"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from './ShopSection';

// Dummy product data
const products = [
  {
    id: 1,
    imageSrc: "/The Children's Place Baby, Toddler, & Girls Snug Fit Jeans.jpg",
    title: "The Children's Place Baby, Toddler, & Girls Snug Fit Jeans",
    nowPrice: "$19.99",
    oldPrice: "$39.99",
    optionsText: "Options from $15.99",
    buttonType: "options",
    deal: true,
  },
  {
    id: 2,
    imageSrc: "/Men's Casual Cotton Shirt Slim Fit.jpg",
    title: "Men's Casual Cotton Shirt Slim Fit",
    nowPrice: "$29.99",
    oldPrice: "$49.99",
    optionsText: "Options from $25.99",
    buttonType: "add",
    deal: true,
  },
  {
    id: 4,
    imageSrc: "/Wireless Bluetooth Over-Ear Headphones.jpg",
    title: "Wireless Bluetooth Over-Ear Headphones",
    nowPrice: "$89.99",
    oldPrice: "$129.99",
    optionsText: "Options from $79.99",
    buttonType: "add",
    deal: false,
  },
  {
    id: 5,
    imageSrc: "/Wireless Bluetooth Over-Ear Headphones.jpg",
    title: "Wireless Bluetooth Over-Ear Headphones",
    nowPrice: "$89.99",
    oldPrice: "$129.99",
    optionsText: "Options from $79.99",
    buttonType: "add",
    deal: false,
  },
  {
    id: 6,
    imageSrc: "/Wireless Bluetooth Over-Ear Headphones.jpg",
    title: "Wireless Bluetooth Over-Ear Headphones",
    nowPrice: "$89.99",
    oldPrice: "$129.99",
    optionsText: "Options from $79.99",
    buttonType: "add",
    deal: false,
  },
  // Add more products as needed
];

export default function ProductCarousel() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      carouselRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-50 p-6 rounded-xl relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Shop all Deals</h2>
          <p className="text-sm text-gray-400 mt-1">Up to 50% off</p>
        </div>
        <a href="#" className="text-sm font-medium text-[#0071ce] hover:underline">
          View all
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-md z-20 hover:bg-gray-50"
        >
          <FaChevronLeft className="text-gray-700 w-4 h-4" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-md z-20 hover:bg-gray-50"
        >
          <FaChevronRight className="text-gray-700 w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
