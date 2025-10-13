"use client";

import React from "react";
import { IoHeartOutline } from "react-icons/io5";

export default function ProductCard({ product }) {
  if (!product) return null; // <-- add this line to prevent undefined errors

  return (
    <div className="relative bg-white shadow-sm rounded-xl flex-shrink-0 w-60 m-2">
      {/* Deal Badge */}
      {product.deal && (
        <span className="absolute top-3 left-3 bg-[#0071ce] text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
          Deal
        </span>
      )}

      {/* Heart Icon */}
      <div className="absolute top-3 right-3 bg-white border border-gray-300 rounded-full p-2 z-10">
        <IoHeartOutline className="text-gray-700 w-5 h-5" />
      </div>

      {/* Product Image */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-t-xl">
        {product.imageSrc && (
          <img
            src={product.imageSrc}
            alt={product.title || "Product Image"}
            className="object-contain w-full h-full"
          />
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title */}
        <h3 className="text-gray-900 font-semibold text-sm line-clamp-2">
          {product.title || "No title"}
        </h3>

        {/* Pricing */}
        <div className="flex items-center gap-2">
          <span className="text-gray-900 font-bold text-lg">
            {product.nowPrice || "$0.00"}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              {product.oldPrice}
            </span>
          )}
        </div>

        {/* Options Text */}
        {product.optionsText && (
          <span className="text-gray-400 text-xs">{product.optionsText}</span>
        )}

        {/* Action Button */}
        {product.buttonType === "options" ? (
          <button className="mt-2 w-full text-gray-900 border border-gray-300 rounded-full py-2 text-sm font-medium hover:bg-gray-50 transition">
            Options
          </button>
        ) : (
          <button className="mt-2 w-full text-green-600 border border-green-600 rounded-full py-2 text-sm font-medium hover:bg-green-50 transition">
            + Add
          </button>
        )}
      </div>
    </div>
  );
}
