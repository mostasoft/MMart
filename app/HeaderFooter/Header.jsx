"use client";

import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaChevronDown, FaUser, FaBoxOpen, FaShoppingCart } from "react-icons/fa";

// Single-file React component with internal subcomponents for easier copy/paste.
// Drop this file into `components/Navbar.jsx` and import in your layout/page.
// Requires tailwindcss and react-icons installed.

export default function Navbar() {
  return (
    <header className="w-full shadow-sm select-none">
      <NavTop />
      <NavBottom />
    </header>
  );
}

function NavTop() {
  return (
    <div className="bg-[#0071CE]">{/* primary dark blue bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-3">
          <div className="flex items-center gap-3 flex-shrink-0">
            <NavLogoAndLocation />
          </div>

          <div className="flex-1">
            <NavSearch />
          </div>

          <div className="flex items-center gap-6 ml-4 flex-shrink-0">
            <NavUserActions />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLogoAndLocation() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo - use Image or inline SVG */}
      <div className="flex items-center gap-2">
        {/* spark icon */}
        <div className="w-10 h-10 relative">
          <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l1.6 4.5 4.4.4-3.2 3 1 4.4L12 12.8 7.2 14.3l1-4.4L5 6.9l4.4-.4L12 2z" fill="#FFC220"/>
          </svg>
        </div>
        <div className="text-white font-bold whitespace-nowrap">Walmart</div>
      </div>

      {/* Location / pickup pill - overlapping the search */}
      <div className="relative">
        <div className="bg-[#005EA6] text-white rounded-full px-3 py-2 flex items-center shadow-sm" style={{ paddingRight: 10 }}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.25A2.25 2.25 0 1112 6.75a2.25 2.25 0 010 4.5z" fill="#ffffff"/></svg>
            <div className="text-left">
              <div className="text-sm font-semibold leading-none">Pickup or delivery?</div>
              <div className="text-[11px] opacity-90 leading-none">Set your store to see local items</div>
            </div>
            <FaChevronDown className="ml-2 w-3 h-3" />
          </div>
        </div>

        {/* subtle cutout effect (left rounded corner overlapping search) */}
        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-6 h-8 bg-transparent pointer-events-none">
          {/* empty — purely positional to suggest overlap in layout */}
        </div>
      </div>
    </div>
  );
}

function NavSearch() {
  const [query, setQuery] = useState("");
  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-lg shadow-sm overflow-hidden">
        {/* this is where the location pill visually overlaps in the real design — we mimic with left padding */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search everything at Walmart online and in store"
          className="w-full px-4 py-3 text-sm outline-none"
        />
        <button className="p-3 rounded-full mr-2 ml-2 bg-[#0570D7] text-white flex items-center justify-center">
          <FaSearch />
        </button>
      </div>

      {/* small white overlay to create the cutout look under the location pill */}
      <div className="hidden md:block absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-8" aria-hidden>
        {/* This element can be styled or replaced with an svg to create the exact cutout shape. */}
      </div>
    </div>
  );
}

function NavUserActions() {
  return (
    <div className="flex items-center gap-6 text-white">
      <div className="flex items-center gap-2 cursor-pointer">
        <FaBoxOpen className="w-5 h-5 opacity-95" />
        <div className="text-xs leading-[10px]">
          <div className="text-[13px] font-semibold">Reorder</div>
          <div className="opacity-90 text-[11px]">My Items</div>
        </div>
      </div>

      <div className="flex items-center gap-2 cursor-pointer">
        <FaUser className="w-5 h-5 opacity-95" />
        <div className="text-xs leading-[10px]">
          <div className="text-[13px] font-semibold">Sign in</div>
          <div className="opacity-90 text-[11px]">Account</div>
        </div>
      </div>

      <div className="relative flex items-center gap-2 cursor-pointer">
        <FaShoppingCart className="w-6 h-6" />
        <div className="text-sm font-semibold">$0.00</div>
        <div className="absolute -top-2 -right-2 bg-[#FFC220] text-xs font-bold text-[#1a1a1a] rounded-full w-5 h-5 flex items-center justify-center">0</div>
      </div>
    </div>
  );
}

function NavBottom() {
  const links = [
    { label: "Departments", chevron: true },
    { label: "Services", chevron: true },
    { label: "Deals" },
    { label: "Get It Fast" },
    { label: "Halloween" },
    { label: "New Arrivals" },
    { label: "Pharmacy" },
    { label: "Rollbacks & More" },
    { label: "Toy Shop" },
    { label: "Dinner Made Easy" },
    { label: "Walmart+" },
    { label: "More", chevron: true },
  ];

  return (
    <div className="bg-[#F5F7F9] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto -mx-4 px-4 py-3">
          <div className="flex gap-3 whitespace-nowrap">
            {links.map((l, i) => (
              <button
                key={i}
                className="flex items-center gap-2 bg-white/60 hover:bg-white/80 rounded-full px-4 py-2 text-sm font-medium shadow-sm"
              >
                <span>{l.label}</span>
                {l.chevron && <FaChevronDown className="w-3 h-3" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
