"use client";

import React from "react";
import Image from "next/image";

export default function PromoGrid() {
  return (
    <div className="bg-gray-50 p-6">
      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
        {/* Left Large Card */}
        <div className="relative bg-[#0071ce] rounded-xl lg:row-span-2 p-8 flex flex-col justify-between overflow-hidden">
          {/* Text + Button */}
          <div>
            <h2 className="text-white font-extrabold text-5xl leading-tight mb-4">
              Up to 40% off furniture
            </h2>
            <button className="bg-white text-[#0071ce] font-semibold rounded-full px-8 py-3 hover:bg-gray-100 transition">
              Shop Deals
            </button>
          </div>
          {/* Image */}
          <Image
            src="/Major furniture savings.jpg"
            alt="Fashion"
            width={400}
            height={400}
            className=" bottom-0 mt-2  right-0 w-full h-full object-contain"
          />
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-1 flex flex-col justify-between space-y-4">
          {/* Top Middle Card (Shoes) */}
          <div className=" bg-[#0071ce] rounded-xl p-6 flex flex-col justify-between overflow-hidden h-48">
            <h3 className="text-white font-bold text-2xl leading-tight">
              Up to 40% off shoes for the fam
            </h3>
            <a
              href="#"
              className="text-blue-200 underline hover:text-white mt-2 font-medium"
            >
              Shop Deals
            </a>
            <Image
              src="/Electronics Deals.jpg"
              alt="Shoes"
              width={200}
              height={200}
              className="bottom-0 right-0 w-full h-full object-contain"
            />
          </div>

          {/* Bottom Nested Cards (Candle & Slipper) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Candle Card */}
            <div className="relative bg-[#0071ce] rounded-xl p-4 flex flex-col justify-between overflow-hidden h-48">
              <h3 className="text-white font-bold text-xl leading-tight">
                Home decor starting at $5
              </h3>
              <a
                href="#"
                className="text-blue-200 underline hover:text-white mt-2 font-medium"
              >
                Shop Deals
              </a>
              <Image
                src="/Home decor starting at $5.jpg"
                alt="Candle"
                width={200}
                height={200}
                className="bottom-0 right-0 w-2/3 h-auto object-contain"
              />
            </div>

            {/* Slipper Card */}
            <div className="relative bg-[#0071ce] rounded-xl p-4 flex flex-col justify-between overflow-hidden h-48">
              <h3 className="text-white font-bold text-xl leading-tight">
                Up to 30% off PJs & more
              </h3>
              <a
                href="#"
                className="text-blue-200 underline hover:text-white mt-2 font-medium"
              >
                Shop Deals
              </a>
              <Image
                src="/Logitech MX Master 3 Wireless Mouse.jpg"
                alt="Slipper"
                width={200}
                height={200}
                className="bottom-0 right-0 w-2/3 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column Card (Seasonal Faves) */}
        <div className="relative bg-[#0071ce] rounded-xl lg:row-span-2 p-6 flex flex-col justify-between overflow-hidden">
          <h3 className="text-white font-bold text-2xl leading-tight">
            Up to 55% off seasonal faves
          </h3>
          <a
            href="#"
            className="text-blue-200 underline hover:text-white mt-2 font-medium"
          >
            Shop Deals
          </a>
          <Image
            src="/Tools for way, way less.jpg"
            alt="Christmas Tree"
            width={400}
            height={400}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
