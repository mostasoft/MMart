"use client";

import React from "react";

export default function SignInBanner() {
  return (
    <div className="bg-white max-w-4xl mx-auto rounded-xl border border-gray-200 shadow-sm px-8 py-6 flex items-center justify-between">
      {/* Left Section: Icon/Emoji + Text */}
      <div className="flex items-center gap-4">
        {/* Emoji/Icon Group */}
        <div className="text-3xl">
          🍔🥤🎮🛍️
        </div>

        {/* Text */}
        <p className="text-gray-800 font-semibold text-lg">
          Sign in for personalized recommendations and more!
        </p>
      </div>

      {/* Right Section: Button */}
      <button className="bg-white border border-gray-500 rounded-full px-6 py-2 text-gray-900 text-sm font-medium hover:bg-gray-50 hover:border-gray-600 transition">
        Sign in or create an account
      </button>
    </div>
  );
}
