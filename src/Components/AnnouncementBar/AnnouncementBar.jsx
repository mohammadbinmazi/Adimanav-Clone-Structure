import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6"; // Importing icons from react-icons

function AnnouncementBar() {
  return (
    <div className="bg-gray-900 text-white p-3 flex justify-between items-center text-sm">
      {/* Left Side - Social Media Icons */}
      <div className="flex space-x-4 items-center">
        <FaFacebookF
          size={18}
          className="cursor-pointer hover:text-gray-400 transition"
        />
        <FaInstagram
          size={18}
          className="cursor-pointer hover:text-gray-400 transition"
        />
        <FaYoutube
          size={18}
          className="cursor-pointer hover:text-gray-400 transition"
        />
        <FaXTwitter
          size={18}
          className="cursor-pointer hover:text-gray-400 transition"
        />
      </div>

      {/* Right Side - Free Shipping Text */}
      <p className="text-center flex-1">
        Free shipping on all orders above Rs. 400!
      </p>
    </div>
  );
}

export default AnnouncementBar;
