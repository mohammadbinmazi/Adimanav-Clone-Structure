import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { motion } from "framer-motion";

export default function BestsellingAdultTshirts() {
  const tshirts = [
    {
      id: 1,
      name: "Mazya Taalavar - Light Blue - Unisex Kids T-shirt",
      image: "src/assets/images/adult1.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
    {
      id: 2,
      name: "Fast And Curious - White - Unisex Kids T-shirt",
      image: "src/assets/images/adult2.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
    {
      id: 3,
      name: "Pasara - Orange - Unisex Kids T-shirt",
      image: "src/assets/images/adult3webp.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
    {
      id: 3,
      name: "Pasara - Orange - Unisex Kids T-shirt",
      image: "src/assets/images/adult4.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
    {
      id: 3,
      name: "Pasara - Orange - Unisex Kids T-shirt",
      image: "src/assets/images/adult5.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
    {
      id: 4,
      name: "Thalaivi - Yellow - Unisex Kids T-shirt",
      image: "src/assets/images/adult6.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
    {
      id: 4,
      name: "Thalaivi - Yellow - Unisex Kids T-shirt",
      image: "src/assets/images/adult7.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
    {
      id: 4,
      name: "Thalaivi - Yellow - Unisex Kids T-shirt",
      image: "src/assets/images/adult8.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold  mb-8 ml-10">
        Bestselling Kids T-shirts
      </h2>

      <Swiper
        modules={[FreeMode]}
        spaceBetween={20}
        slidesPerView={1}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {tshirts.map((tshirt) => (
          <SwiperSlide key={tshirt.id}>
            <motion.div
              className="text-center p-4 bg-white rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src={tshirt.image}
                  alt={tshirt.name}
                  className="w-full object-cover rounded-md"
                />
                {tshirt.isOnSale && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Sale
                  </span>
                )}
              </div>
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">{tshirt.name}</p>
                <p className="text-gray-500 line-through">
                  Rs. {tshirt.originalPrice}.00
                </p>
                <p className="text-xl font-bold text-black">
                  Rs. {tshirt.discountedPrice}.00
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="flex  bg-black text-white w-30 h-12 justify-center   justify-items-center  "
        >
          <button>View all</button>
        </motion.div>
      </div>
    </section>
  );
}
