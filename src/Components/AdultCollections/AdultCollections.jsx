import React from "react";

const AdultSection = () => {
  const adultCollections = [
    {
      title: "Geek Sena",
      image: "src/assets/images/vrukshavalli.webp",
      link: "/collections/geek-sena",
    },
    {
      title: "Marathi T-shirts",
      image: "src/assets/images/chai.webp",
      link: "/collections/marathi-tshirts",
    },
    {
      title: "Limitless Adults",
      image: "src/assets/images/plain-basics.webp",
      link: "/collections/limitless-adults",
    },
    {
      title: "Stock Market",
      image: "src/assets/images/cycling.webp",
      link: "/collections/stock-market",
    },
    {
      title: "Stock Market",
      image: "src/assets/images/follow-the-chart.webp",
      link: "/collections/stock-market",
    },
    {
      title: "Stock Market",
      image: "src/assets/images/limitless.webp",
      link: "/collections/stock-market",
    },
    {
      title: "Stock Market",
      image: "src/assets/images/kashtach-cheese.webp",
      link: "/collections/stock-market",
    },
    {
      title: "Stock Market",
      image: "src/assets/images/geek.webp",
      link: "/collections/stock-market",
    },
  ];

  return (
    <section className="px-6 py-12 shadow-none">
      <h2 className="text-3xl font-bold mb-6">Adults Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {adultCollections.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="border-gray-500 block   overflow-hidden  transition-transform hover:scale-103 border-1"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-80 h-100 object-cover"
            />
            <div className="p-4 text-center font-semibold">{item.title} →</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AdultSection;
