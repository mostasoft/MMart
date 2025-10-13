"use client";

import { FaRegCircleCheck } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#004C92] text-white w-full select-none py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FooterLinks />
        <FooterCopyright />
      </div>
    </footer>
  );
}

function FooterLinks() {
  const row1 = [
    "All Departments",
    "Store Directory",
    "Careers",
    "Our Company",
    "Sell on Walmart.com",
    "Help",
    "Product Recalls",
    "Accessibility",
    "Tax Exempt Program",
    "Get the Walmart App",
    "Safety Data Sheet",
  ];

  const row2 = [
    "Terms of Use",
    "Privacy Notice",
    "California Supply Chain Act",
    { label: "Your Privacy Choices", icon: true },
    "Notice at Collection",
    "AdChoices",
    "Consumer Health Data Privacy Notices",
    "Brand Shop Directory",
  ];

  const row3 = ["Pharmacy", "Walmart Business", "#WYWYK", "Delete Account"];

  return (
    <div className="space-y-3 text-[13px] font-medium">
      {/* Row 1 */}
      <div className="flex flex-wrap justify-start gap-x-4 gap-y-2">
        {row1.map((link, i) => (
          <a key={i} href="#" className="hover:underline whitespace-nowrap">
            {link}
          </a>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-start gap-x-4 gap-y-2">
        {row2.map((item, i) => (
          <a
            key={i}
            href="#"
            className="hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            {typeof item === "string" ? (
              <span>{item}</span>
            ) : (
              <>
                {item.icon && <FaRegCircleCheck className="w-3 h-3 text-white opacity-90" />}
                <span>{item.label}</span>
              </>
            )}
          </a>
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 text-sm opacity-90">
        {row3.map((link, i) => (
          <a key={i} href="#" className="hover:underline whitespace-nowrap">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

function FooterCopyright() {
  return (
    <div className="text-center text-gray-200 text-sm mt-8 leading-relaxed">
      © 2025 Walmart. The trademarks Walmart and the Walmart Spark design are
      registered with the US Patent and Trademark Office. All Rights Reserved.
    </div>
  );
}