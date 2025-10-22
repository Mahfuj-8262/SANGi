"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-gray-50 text-gray-900 py-16 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-800">
          Our Services
        </h2>

        {/* grid of boxes */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-start space-y-4">
              {/* Title outside the box */}
              <h3
                className="
                  text-lg sm:text-xl lg:text-2xl font-semibold text-blue-700
                  whitespace-nowrap truncate overflow-hidden w-full
                "
                title={service.title} // tooltip with full text
              >
                {service.title}
              </h3>

              {/* Box */}
              <div
                className="
                  bg-white border border-gray-200 rounded-lg
                  shadow-sm hover:shadow-lg hover:border-blue-300
                  transition-all duration-300
                  p-6 flex flex-col justify-between h-full
                  transform hover:-translate-y-1
                "
              >
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white"
                  >
                    See More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}