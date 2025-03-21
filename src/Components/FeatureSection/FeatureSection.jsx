import { motion } from "framer-motion";
import { PackageCheck, Truck, RotateCcw } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <PackageCheck size={60} strokeWidth={1.5} />,
    title: "Quick Dispatch",
    description: "Get your orders dispatched within 48 hours.",
  },
  {
    id: 2,
    icon: <Truck size={60} strokeWidth={1.5} />,
    title: "Free Shipping",
    description: "Your orders above Rs. 400 are delivered for free.",
  },
  {
    id: 3,
    icon: <RotateCcw size={60} strokeWidth={1.5} />,
    title: "Easy Returns",
    description: "Get your products returned & replaced easily.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-2 text-center">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="bg-gray-100 p-10 shadow-xl flex flex-col items-center rounded-xl min-h-[250px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-black">{feature.icon}</div>
            <h3 className="text-xl font-semibold mt-6">{feature.title}</h3>
            <p className="text-gray-600 mt-3 text-lg">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
