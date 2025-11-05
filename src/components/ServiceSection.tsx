"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Service = {
  title: string;
  description: string;
  link: string;
};

const services: Service[] = [
  {
    title: "SAN Motor's Limited",
    description:
      "Specializing in automotive innovation and manufacturing, providing reliable vehicles and sustainable mobility solutions.",
    link: "/services/san-motors",
  },
  {
    title: "SANGi Trade International",
    description:
      "A global trading enterprise connecting businesses with markets and delivering products worldwide with trust.",
    link: "/services/sangi-trade",
  },
  {
    title: "SANGi Properties & Development",
    description:
      "Focused on real estate development, bringing modern architecture and lasting value to communities.",
    link: "/services/sangi-properties",
  },
  {
    title: "San Safety Footwear Industries",
    description:
      "Manufacturing durable, high-quality safety footwear to protect workers across critical industries.",
    link: "/services/san-safety-footwear",
  },
  {
    title: "Central Shariah Board of Sangi Group",
    description:
      "Ensuring ethical and Shariah-compliant corporate practices across all divisions of Sangi Group.",
    link: "/services/central-shariah-board",
  },
  {
    title: "Abdus Sattar Foundation",
    description:
      "Philanthropic initiatives fostering education, healthcare, and welfare programs for underprivileged communities.",
    link: "/services/abdus-sattar-foundation",
  },
];

const itemDelay = 0.15;
const itemDuration = 0.6;

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-gray-200/70 text-gray-900 py-16 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Our <span className="text-gray-500">Services</span>
        </h2>

        <div
          className="
            mt-14
            grid
            sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-[5px]
            rounded-2xl overflow-hidden
            bg-gray-100
          "
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: itemDuration,
                delay: i * itemDelay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="bg-white p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8">
                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="text-blue-700 border-blue-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors duration-200"
                  >
                    See More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
