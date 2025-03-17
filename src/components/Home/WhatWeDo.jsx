import { Brain, DollarSign, Users, Layers, Ellipsis } from "lucide-react";
import { useState } from "react";

const values = [
  {
    title: "Innovation & Creativity",
    description:
      "We drive innovation through cutting-edge technology, ensuring our solutions are modern, efficient, and future-proof.",
    icon: Brain,
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Our focus is on delivering high-quality results while optimizing costs, making technology accessible for businesses of all sizes.",
    icon: DollarSign,
  },
  {
    title: "User-Centric Approach",
    description:
      "We prioritize user experience, ensuring our products and services meet the needs of customers and provide seamless interactions.",
    icon: Users,
  },
  {
    title: "Long-lasting product",
    description:
      "Our solutions are designed for longevity and scalability, supporting business growth and technological advancements.",
    icon: Layers,
  },
];

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container min-h-screen flex flex-col items-center justify-center px-4 mx-auto pb-4 pt-12">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-2 bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] bg-clip-text text-transparent">
        What <span>We Offer</span>
      </h1>
      <p className="text-lg text-center text-gray-600 mb-16">
        We provide trusted solutions that stand the test of time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4 lg:py-0 sm:py-4">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className={`bg-transparent  rounded-lg flex flex-col items-center text-center hover:shadow-xl px-6 py-8 transition-all duration-300 ${
                hoveredIndex === index ? "shadow-2xl" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-4 bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] rounded-full">
                <Icon className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-bright-purple mt-4 px-4">
                {value.title}
              </h2>

              <div
                className={`overflow-hidden transition-all duration-400 ${
                  hoveredIndex === index
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>

              <span className="w-12 h-8 text-bright-purple px-4 pt-6">
                <Ellipsis size={16} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
