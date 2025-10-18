"use client";

import React, { useRef } from "react";
import { IoChevronForward, IoChevronUp, IoChevronDown, IoHeartOutline } from "react-icons/io5";

// Dummy data for columns and products
const columnsData = [
  {
    id: 1,
    title: "Major furniture savings",
    link: "View all",
    products: [
      { id: 1, title: "Sunjoy 28 In...", nowPrice: "$138", oldPrice: "$199", buttonType: "+ Add", imageSrc: "/Major furniture savings.jpg" },
      { id: 2, title: "Patio Chair Set", nowPrice: "$99", oldPrice: "$150", buttonType: "Options", imageSrc: "/Major furniture savings.jpg" },
      { id: 3, title: "Outdoor Table", nowPrice: "$180", oldPrice: "$250", buttonType: "+ Add", imageSrc: "/Major furniture savings.jpg" },
    ],
  },
  {
    id: 2,
    title: "Tools for way, way less",
    link: "View all",
    products: [
      { id: 4, title: "Cordless Drill", nowPrice: "$49", oldPrice: "$79", buttonType: "+ Add", imageSrc: "/Tools for way, way less.jpg" },
      { id: 5, title: "Hammer Set", nowPrice: "$29", oldPrice: "$50", buttonType: "Options", imageSrc: "/Tools for way, way less.jpg" },
      { id: 6, title: "Saw", nowPrice: "$39", oldPrice: "$60", buttonType: "+ Add", imageSrc: "/Tools for way, way less.jpg" },
    ],
  },
  {
    id: 3,
    title: "Outdoor living essentials",
    link: "View all",
    products: [
      { id: 7, title: "Umbrella", nowPrice: "$45", oldPrice: "$70", buttonType: "Options", imageSrc: "/Outdoor living essentials (2).jpg" },
      { id: 8, title: "Grill", nowPrice: "$199", oldPrice: "$250", buttonType: "+ Add", imageSrc: "/Outdoor living essentials (2).jpg" },
    ],
  },
  {
    id: 4,
    title: "Outdoor living essentials",
    link: "View all",
    products: [
      { id: 7, title: "Umbrella", nowPrice: "$45", oldPrice: "$70", buttonType: "Options", imageSrc: "/Outdoor living essentials (2).jpg" },
      { id: 8, title: "Grill", nowPrice: "$199", oldPrice: "$250", buttonType: "+ Add", imageSrc: "/images/outdoor2.png" },
    ],
  },
  {
    id: 5,
    title: "Outdoor living essentials",
    link: "View all",
    products: [
      { id: 7, title: "Umbrella", nowPrice: "$45", oldPrice: "$70", buttonType: "Options", imageSrc: "/Outdoor living essentials.jpg" },
      { id: 8, title: "Grill", nowPrice: "$199", oldPrice: "$250", buttonType: "+ Add", imageSrc: "/images/outdoor2.png" },
    ],
  },
];

export default function DealsColumnCarousel() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 p-6 relative">
      <h2 className="text-gray-900 font-bold text-2xl mb-4">Deals on patio & garden</h2>

      {/* Horizontal Scrollable Columns */}
      <div className="relative">
        <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
          {columnsData.map((column) => (
            <DealsColumn key={column.id} column={column} />
          ))}
        </div>

        {/* Right Scroll Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-50 transition"
        >
          <IoChevronForward className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

// Single Column Component
function DealsColumn({ column }) {
  const verticalRef = useRef(null);

  const scrollUp = () => {
    if (verticalRef.current) verticalRef.current.scrollBy({ top: -150, behavior: "smooth" });
  };
  const scrollDown = () => {
    if (verticalRef.current) verticalRef.current.scrollBy({ top: 150, behavior: "smooth" });
  };

  return (
    <div className="w-72 flex-shrink-0 flex flex-col relative">
      {/* Column Header */}
      <div className="flex justify-between items-center mb-2 px-2">
        <h3 className="text-gray-900 font-semibold text-base">{column.title}</h3>
        <a href="#" className="text-[#0071ce] text-sm">{column.link}</a>
      </div>

      {/* Top Scroll Button */}
      <button
        onClick={scrollUp}
        className="absolute right-2 top-9 bg-white border border-gray-300 rounded-full p-1 shadow z-10"
      >
        <IoChevronUp className="w-4 h-4 text-gray-700" />
      </button>

      {/* Vertical Scrollable Product Cards */}
      <div
        ref={verticalRef}
        className="bg-white rounded-xl overflow-y-auto h-[400px] p-2 space-y-3 scrollbar-hide"
      >
        {column.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bottom Scroll Button */}
      <button
        onClick={scrollDown}
        className="absolute right-2 bottom-2 bg-white border border-gray-300 rounded-full p-1 shadow z-10"
      >
        <IoChevronDown className="w-4 h-4 text-gray-700" />
      </button>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }) {
  return (
    <div className="relative bg-[#0071ce] rounded-lg p-3 flex flex-col">
      <div className="relative w-full h-32 mb-3">
        <img src={product.imageSrc} alt={product.title} className="w-full h-full object-contain rounded-md" />
        <div className="absolute top-2 right-2 bg-white border border-gray-300 rounded-full p-1 shadow">
          <IoHeartOutline className="text-gray-700 w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <p className="text-black font-bold text-lg">{product.nowPrice}</p>
        {product.oldPrice && <p className="text-gray-200 line-through text-sm">{product.oldPrice}</p>}
        <p className="text-gray-900 text-sm">{product.title}</p>
      </div>

      <button
        className={`mt-3 px-3 py-1 text-sm rounded-full border ${
          product.buttonType === "Options"
            ? "bg-white text-gray-900 border-gray-400"
            : "bg-white text-green-600 border-gray-400"
        }`}
      >
        {product.buttonType}
      </button>
    </div>
  );
}
