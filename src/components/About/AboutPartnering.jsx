import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  UserCheck,
  Clock,
  Eye,
  Users,
  DollarSign,
} from "lucide-react";

const services = [
  {
    title: "Assurance Of Quality",
    description:
      "Every solution we offer is of the highest caliber due to the efforts of our quality assurance department.",
    icon: CheckCircle,
  },
  {
    title: "Client-Centered",
    description:
      "We put your needs first and build good relationships with our customers.",
    icon: UserCheck,
  },
  {
    title: "Timely Response",
    description: "We take great pride in always being reachable for our clients.",
    icon: Clock,
  },
  {
    title: "Sincerity",
    description:
      "We maintain transparency by monitoring time and tasks closely to ensure project visibility.",
    icon: Eye,
  },
  {
    title: "Teamwork",
    description:
      "To guarantee successful results, our experts work closely with clients.",
    icon: Users,
  },
  {
    title: "Cost-effective",
    description:
      "We produce at a reasonable cost by employing creative strategies.",
    icon: DollarSign,
  },
];

const TimelineService = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto py-12 px-4 max-w-6xl pt-20">
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-center bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Partnering with CodeSala brings you:
      </motion.h1>
     <p className="text-center pt-3 text-gray-700">&quot;Cutting-edge solutions, expert collaboration, and seamless innovation to elevate your projects.&quot;</p>

      <div className="relative border-l-4 bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-purple-900  pl-4 mt-30">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 relative"
            >
              <div className="absolute -left-8 top-2 bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] text-white rounded-full p-3">
                <Icon className="w-6 h-6" />
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer border border-gray-200"
                onClick={() => toggleExpand(index)}
              >
                <h2 className="text-xl font-semibold bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent">
                  {service.title}
                </h2>
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 overflow-hidden"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineService;