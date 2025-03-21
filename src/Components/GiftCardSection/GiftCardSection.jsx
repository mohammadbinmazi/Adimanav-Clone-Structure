import React, { useState } from "react";
import { motion } from "framer-motion";

const GiftCardSection = () => {
  const [selectedDenomination, setSelectedDenomination] = useState(500);
  const [quantity, setQuantity] = useState(1);
  const [isGift, setIsGift] = useState(false);

  const denominations = [500, 1000, 2000];

  return (
    <div className="flex flex-col md:flex-row bg-white p-6 w-500   max-w-8xl mx-auto">
      <div className="md:w-160 flex justify-center items-center ">
        <img
          src="src/assets/images/giftcard.webp"
          alt="Gift Voucher"
          className=" w-full"
        />
      </div>

      <div className="md:w-1/2 p-6 ml-10 mb-14  ">
        <h2 className="text-4xl font-semibold mb-4 py-2">Adimanav Gift Card</h2>

        {/* Denomination Selection */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Denominations</h3>
          <div className="flex space-x-2">
            {denominations.map((amount) => (
              <button
                key={amount}
                className={`px-4 py-2 rounded-lg border ${
                  selectedDenomination === amount
                    ? "bg-black text-white"
                    : "bg-white"
                }`}
                onClick={() => setSelectedDenomination(amount)}
              >
                ₹{amount}.00
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Quantity</h3>
          <div className="flex items-center border  w-35 h-12">
            <button
              className="px-3 py-1"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 py-1"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            checked={isGift}
            onChange={() => setIsGift(!isGift)}
            className="mr-2"
          />
          <label>I want to send this as a gift</label>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-black text-white px-40 py-3  w[100px] hover:bg-gray-800"
        >
          Add to cart
        </motion.button>
      </div>
    </div>
  );
};

export default GiftCardSection;
