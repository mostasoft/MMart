"use client";

import React from "react";
import { IoCallOutline, IoLocationSharp } from "react-icons/io5";

export default function UtilityBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Call / Contact CTA */}
        <div className="flex items-center bg-white rounded-lg border border-gray-200 shadow-sm p-4 space-x-4 flex-1 md:flex-none">
          <div className="bg-[#FF6600] p-4 rounded-lg flex items-center justify-center">
            <IoCallOutline className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Need help? Call us</span>
            <span className="text-gray-900 font-bold text-lg">09638148148</span>
          </div>
        </div>

        {/* Store Locator CTA */}
        <div className="flex items-center bg-white rounded-lg border border-gray-200 shadow-sm p-4 space-x-4 flex-1 md:flex-none">
          <div className="bg-[#FF6600] p-4 rounded-lg flex items-center justify-center">
            <IoLocationSharp className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">Store locator</span>
            <span className="text-gray-900 font-bold text-lg">Find our Stores</span>
          </div>
        </div>

        {/* Subscription Field */}
        <div className="flex flex-col flex-1 md:flex-none w-full md:w-auto">
          <span className="text-gray-500 text-sm mb-2">
            Sign up for get latest news and update
          </span>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            />
            <button className="bg-[#FF6600] text-white font-semibold px-6 py-2 rounded-r-lg hover:bg-orange-500 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
