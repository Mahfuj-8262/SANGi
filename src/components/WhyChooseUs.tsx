"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Trusted Partner",
      text: "We build long-term partnerships through transparency, reliability, and quality assurance across every division.",
      icon: "🤝",
    },
    {
      title: "Shariah-Compliant",
      text: "We ensure ethical governance in all operations, guided by our Central Shariah Board for transparent and fair business practices.",
      icon: "☪️",
    },
    {
      title: "Innovative Solutions",
      text: "Consistently improving with technology-driven solutions that increase efficiency and create smarter industries.",
      icon: "💡",
    },
    {
      title: "Global Standards",
      text: "Committed to maintaining international quality, safety, and sustainability benchmarks in every product and service.",
      icon: "🌍",
    },
    {
      title: "Community Focused",
      text: "Every project aligns with our social responsibility mission — uplifting communities and supporting development.",
      icon: "🤲",
    },
    {
      title: "Sustainable Growth",
      text: "Our expansion is rooted in green practices and responsible resource management for a better future.",
      icon: "🌱",
    },
  ];

  return (
    <section className="w-full bg-[#0b1220] text-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left side – Text + Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Why choose <span className="text-gray-300">SANGi?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed max-w-lg">
            Our clients and stakeholders benefit from a company committed to
            transparency, ethical governance, and continuous improvement.
          </p>

          <div className="rounded-xl overflow-hidden shadow-md bg-gray-800/40 backdrop-blur">
            <Image
              src="/whychooseus.jpg" // replace with your image in /public/images/
              alt="Why choose us"
              width={600}
              height={350}
              className="object-cover w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Right side – Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gray-800/70 p-6 rounded-xl hover:bg-gray-700/70 border border-gray-700 transition shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}