import React, { useState } from "react";
import { ChevronDown, Search, User, ShoppingBag } from "lucide-react";

const menuItems = {
  Men: [
    "Limitless",
    "Marathi",
    "Geek Sena",
    "Office Office",
    "Stock Market",
    "Travel",
    "Foodies",
    "Chintu",
    "Festive",
  ],
  Women: [
    "Stree Hai Wo",
    "Limitless",
    "Marathi",
    "Geek Sena",
    "Office Office",
    "Stock Market",
    "Travel",
    "Foodies",
    "Chintu",
    "Festive",
  ],
  Kids: [
    "Limitless",
    "Marathi",
    "Geek Sena",
    "Office Office",
    "Stock Market",
    "Travel",
    "Foodies",
    "Chintu",
    "Festive",
  ],
  Collabs: [
    "Chintu",
    "Chikupiku",
    "Bokya Satbande",
    "Abhanga Repost",
    "Khaasre TV",
  ],
  Help: ["Return and Exchange", "FAQs", "Contact Us"],
};

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <nav className="bg-white font-medium text-black p-4 flex justify-between items-center h-20 shadow-md relative z-50">
      {/* Left Side - Logo */}
      <img
        src="/src/assets/images/adimanav-logo.png"
        alt="Logo"
        className="h-10"
      />

      {/* Center - Navigation Links */}
      <ul className="flex space-x-4 text-sm pr-55 font-medium relative z-50 text-black">
        {Object.keys(menuItems).map((category) => (
          <li key={category} className="relative">
            <button
              onClick={() => toggleDropdown(category)}
              className="flex items-center gap-1 relative text-black group"
            >
              {category}
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openDropdown === category ? "rotate-180" : "rotate-0"
                }`}
              />
              {/* Underline animation */}
              <span
                className={`absolute bottom-[-2px] left-0 w-full h-[2px] bg-black transition-all ${
                  openDropdown === category ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></span>
            </button>

            {/* Dropdown */}
            {openDropdown === category && (
              <ul className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg w-48 py-2 z-50">
                {menuItems[category].map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* Static Links */}
        <li className="cursor-pointer">Family</li>
        <li className="cursor-pointer">Bite Me</li>
        <li className="cursor-pointer">Clearance Sale</li>
        <li className="cursor-pointer">Blog</li>
      </ul>

      {/* Right Side - Icons */}
      <div className="flex space-x-6 items-center text-gray-800">
        <Search
          size={24}
          className="cursor-pointer hover:text-black transition"
        />
        <User
          size={24}
          className="cursor-pointer hover:text-black transition"
        />
        <ShoppingBag
          size={24}
          className="cursor-pointer hover:text-black transition"
        />
      </div>
    </nav>
  );
}

export default Navbar;
