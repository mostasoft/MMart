"use client";

import React, { useRef } from "react";
import { IoHeartOutline, IoChevronBack, IoChevronForward } from "react-icons/io5";

// Dummy product data
const products = [
  { id: 1, title: "Chaps Men's & Big Men's Long Sleeve Fairsle...", nowPrice: "$22.00", oldPrice: "$25.99", imageSrc: "/Chaps Men's & Big Men's Long Sleeve Fairsle....jpg" },
  { id: 2, title: "Women's Cozy Knit Sweater", nowPrice: "$28.00", oldPrice: "$35.00", imageSrc: "/Women's Cozy Knit Sweater.jpg" },
  { id: 3, title: "Men's Pullover Hoodie", nowPrice: "$30.00", oldPrice: "$38.00", imageSrc: "/Men's Pullover Hoodie.jpg" },
  { id: 4, title: "Kids’ Wool Cardigan", nowPrice: "$18.00", oldPrice: "$22.00", imageSrc: "/Kids’ Wool Cardigan.jpg" },
];

export default function CozyStylesRow() {
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
    <div className="max-w-7xl mx-auto my-8 px-4">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-900 font-bold text-2xl">
          Coziness in every color
        </h2>
        <a href="#" className="text-[#0071ce] font-medium text-sm">
          View all
        </a>
      </div>

      {/* Main Content: Responsive Grid */}
      <div className="grid md:grid-cols-[2fr_1fr] gap-4">
        {/* Left: Product Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Left/Right Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-50 transition z-10"
          >
            <IoChevronBack className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-50 transition z-10"
          >
            <IoChevronForward className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Right: Promotional Banner */}
        <div
          className="relative rounded-xl overflow-hidden flex flex-col justify-center p-6 min-h-[300px] md:min-h-auto mt-4 md:mt-0"
          style={{
            backgroundImage: "url('/Chaps Men's & Big Men's Long Sleeve Fairsle....jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-black text-sm mb-2 shadow-sm">
            Cardigans to quarter zips
          </p>
          <h3 className="text-black p-2 bg-blue-300 text-5xl font-extrabold leading-tight mb-4 shadow-sm">
            Sweaters for the fam
          </h3>
          <button className="bg-white text-gray-900 rounded-full px-6 py-2 font-medium w-max shadow hover:bg-gray-100 transition">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }) {
  return (
    <div className="relative bg-white rounded-lg shadow p-3 flex flex-col min-w-[180px]">
      <div className="relative w-full h-40 mb-3">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="w-full h-full object-contain rounded-md"
        />
        {/* Heart Icon */}
        <div className="absolute top-2 right-2 bg-white border border-gray-300 rounded-full p-1 shadow">
          <IoHeartOutline className="text-gray-700 w-4 h-4" />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col space-y-1">
        <p className="text-black font-bold text-lg">{product.nowPrice}</p>
        {product.oldPrice && (
          <p className="text-gray-400 line-through text-sm">{product.oldPrice}</p>
        )}
        <p className="text-gray-900 text-sm">{product.title}</p>
      </div>
    </div>
  );
}
