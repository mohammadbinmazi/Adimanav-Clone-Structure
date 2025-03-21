import React from "react";

const kidsCollection = [
  {
    title: "Chintoo",
    src: "src/assets/images/chintoo.webp",
    alt: "Chintoo Image",
  },
  {
    title: "Marathi Kids",
    src: "src/assets/images/kids.webp",
    alt: "Marathi Kids Image",
  },
  {
    title: "Limitless Kids",
    src: "src/assets/images/PG-plain.webp",
    alt: "Limitless Kids Image",
  },
  {
    title: "Kids Plain Basics",
    src: "src/assets/images/WhatsApp_Image_2024-05-02_at_11.46.36_AM.webp",
    alt: "Kids Plain Basics Image",
  },
];

const KidsCollection = () => {
  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Kids Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {kidsCollection.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg border-transparent overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              ) : (
                <span className="text-gray-500">Image Not Available</span>
              )}
            </div>
            <p className="p-4 text-lg font-semibold text-center">
              {item.title} →
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsCollection;
