"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MessageFromCeo() {
  return (
    <section className="w-full text-gray-900 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Message from <span className="text-gray-500">Founder & CEO</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            A few words from the Founder &amp; CEO highlighting our vision,
            mission, and commitment to excellence.
          </p>
        </div>

        <div className="bg-gray-100 flex flex-col-reverse lg:flex-row items-center lg:items-stretch rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 p-8 sm:p-12 flex flex-col justify-center text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              “A Vision Built on Integrity and Innovation”
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
              "At Sangi Group of Industries, we believe that our strength lies in our people and our
              unwavering commitment to quality. From humble beginnings to a leading industrial enterprise,
              our journey has been defined by innovation and trust. We look forward to continuing to
              serve our communities with dedication and vision..."
            </p>
            <Link href="/about/message-from-ceo">
              <Button
                variant="outline"
                className="text-blue-700 border-blue-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors duration-200"
              >
                Read Full Message
              </Button>
            </Link>

            <div className="mt-10">
              <p className="font-semibold text-gray-900">Md. Sajedul Islam</p>
              <p className="text-gray-600 text-sm">
                Founder & CEO, Sangi Group of Industries
              </p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-[40%] flex items-center justify-center p-4 lg:p-6"
          >
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[98%] rounded-2xl shadow-md bg-cyan-950 overflow-hidden">
              <Image
                src="/momin.png"
                alt="Founder & CEO"
                fill
                className="object-contain object-center"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}