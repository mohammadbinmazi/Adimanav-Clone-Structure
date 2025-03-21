export default function FamilyCollection() {
  const tshirts = [
    { src: "src/assets/images/each-other.webp" },
    { src: "src/assets/images/amchya-sarkhe.webp" },
    { src: "src/assets/images/kha-pya_1.webp" },
    { src: "src/assets/images/travel-togather-2.webp" },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold ml-8 ">Family Collection</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {tshirts.map((item, index) => (
          <div
            key={index}
            className={`relative p-2 rounded-full ${item.bg} flex items-center justify-center`}
          >
            <img src={item.src} alt="T-shirt" className="w-60 " />
          </div>
        ))}
      </div>
    </section>
  );
}
