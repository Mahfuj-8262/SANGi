import Image from "next/image";
import Link from "next/link";

import PosterCarousel from "@/components/PosterCarousel";
import ServiceSection from "@/components/ServiceSection";

export default function HomePage() {
  // const services = [
  //   { name: "SAN Motor's Limited", slug: "san-motors", image: "/images/san-motors.jpg" },
  //   { name: "SANGi Trade International", slug: "sangi-trade", image: "/images/sangi-trade.jpg" },
  //   { name: "SANGi Properties & Development", slug: "sangi-properties", image: "/images/sangi-properties.jpg" },
  //   { name: "San Safety Footwear Industries", slug: "san-safety-footwear", image: "/images/safety-footwear.jpg" },
  //   { name: "Central Shariah Board", slug: "central-shariah-board", image: "/images/shariah-board.jpg" },
  //   { name: "Abdus Sattar Foundation", slug: "abdus-sattar-foundation", image: "/images/abdus-sattar.jpg" },
  // ];

  const posters = [
    {
      image: "/banner 1.webp",
      caption: (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Welcome to Sangi Group of Industries
        </h1>
      ),
    },
    {
      image: "/banner 2.webp",
      caption: (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Building Trust Across Sectors
        </h1>
      ),
    },
    // {
    //   image: "/images/banner3.jpg",
    //   caption: (
    //     <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
    //       Innovation • Dedication • Growth
    //     </h1>
    //   ),
    // },
  ];

  return (
    <main>
      {/* <div className="bg-red-400 text-white p-4">TOP TEST BOX</div> */}
      <PosterCarousel posters={posters} />
      <ServiceSection />
      {/* <div className="bg-green-400 text-white p-4">BOTTOM TEST BOX</div> */}
    </main>
  );
}