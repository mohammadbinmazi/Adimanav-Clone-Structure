export default function BestsellingKidsTshirts() {
  const tshirts = [
    {
      id: 1,
      name: "Mazya Taalavar - Light Blue - Unisex Kids T-shirt",
      image: "src/assets/images/gulachipink.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
    {
      id: 2,
      name: "Fast And Curious - White - Unisex Kids T-shirt",
      image: "src/assets/images/paa.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
    {
      id: 3,
      name: "Pasara - Orange - Unisex Kids T-shirt",
      image: "src/assets/images/wanshachi-diva-red.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
    {
      id: 4,
      name: "Thalaivi - Yellow - Unisex Kids T-shirt",
      image: "src/assets/images/pasara.webp",
      originalPrice: 599,
      discountedPrice: 399,
      isOnSale: true,
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 ml-8">
        Bestselling Kids T-shirts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tshirts.map((tshirt) => (
          <div
            key={tshirt.id}
            className="text-center hover:scale-105 overflow-hidden  transition-transform  p-4 bg-white"
          >
            <div className="relative">
              <img
                src={tshirt.image}
                alt={tshirt.name}
                className="w-full object-cover"
              />
              {tshirt.isOnSale && (
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Sale
                </span>
              )}
            </div>
            <div className="mt-4 bg-gray-100 max-w-full">
              <p className="font-semibold">{tshirt.name}</p>
              <p className="text-gray-500 line-through">
                Rs. {tshirt.originalPrice}.00
              </p>
              <p className="text-xl font-bold text-black">
                Rs. {tshirt.discountedPrice}.00
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
