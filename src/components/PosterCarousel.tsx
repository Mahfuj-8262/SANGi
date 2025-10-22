"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Aleo } from "next/font/google";

const aleo = Aleo({ subsets: ["latin"], weight: ["400", "700"] });

type PosterItem = string | { image: string; caption?: React.ReactNode };
type PosterCarouselProps = { posters: PosterItem[]; caption?: React.ReactNode };

export default function PosterCarousel({ posters, caption }: PosterCarouselProps) {
  const [curr, setCurr] = useState(0);
  const [animKey, setAnimKey] = useState(0); // ⚙️ to force animation restart

  useEffect(() => {
    if (posters.length <= 1) return;
    const timer = setInterval(() => {
      setCurr((c) => (c + 1) % posters.length);
      setAnimKey((k) => k + 1); // new key → new animation
    }, 4000);
    return () => clearInterval(timer);
  }, [posters.length]);

  if (!posters || posters.length === 0) return null;

  const p = posters[curr];
  const currPoster = typeof p === "string" ? { image: p } : p;
  const displayCaption = caption || currPoster.caption;

  return (
    <section
      className="relative w-screen overflow-hidden shadow-lg
                 h-[340px] xs:h-[420px] sm:h-[530px] md:h-[670px] lg:h-[800px]"
    >
      {/* Poster */}
      <div
        key={animKey} // 👈 forces re‑creation each slide
        className="absolute inset-0"
      >
        <Image
          src={currPoster.image}
          alt={`Poster ${curr + 1}`}
          fill
          priority={curr === 0}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Caption */}
      {displayCaption && (
        <div
          key={`caption-${animKey}`}
          className={`${aleo.className} absolute left-5 sm:left-10 top-1/2
                      -translate-y-1/2 text-white font-bold drop-shadow-lg z-20
                      text-3xl sm:text-4xl md:text-5xl slide-caption`}
        >
          {displayCaption}
        </div>
      )}

      {/* Dots */}
      {posters.length > 1 && (
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2 z-30">
          {posters.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurr(i);
                setAnimKey((k) => k + 1);
              }}
              aria-label={`Poster ${i + 1}`}
              className={`transition-all duration-300 rounded-lg
                ${curr === i ? "w-10 h-2 bg-amber-300" : "w-4 h-2 bg-amber-100 opacity-70"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}



// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// type PosterItem = string | { image: string; caption?: React.ReactNode };
// type PosterCarouselProps = { posters: PosterItem[]; caption?: React.ReactNode };

// export default function PosterCarousel({ posters, caption }: PosterCarouselProps) {
//   const [curr, setCurr] = useState(0);

//   useEffect(() => {
//     if (posters.length <= 1) return;
//     const timer = setInterval(() => setCurr((c) => (c + 1) % posters.length), 4000);
//     return () => clearInterval(timer);
//   }, [posters.length]);

//   if (!posters || posters.length === 0) return null;

//   const p = posters[curr];
//   const currPoster = typeof p === "string" ? { image: p } : p;
//   const displayCaption = caption || currPoster.caption;

//   return (
//     // 🧙 Outer section contributes height to page flow
//     <section className="relative w-full overflow-hidden shadow-lg
//                         h-[340px] xs:h-[420px] sm:h-[530px] md:h-[670px] lg:h-[800px]">
//       {/* Image fills parent area */}
//       <Image
//         src={currPoster.image}
//         alt={`Poster ${curr + 1}`}
//         fill
//         priority={curr === 0}
//         sizes="100vw"
//         className="object-cover object-center"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Caption */}
//       {displayCaption && (
//         <div
//           className="absolute left-5 sm:left-10 top-1/2 -translate-y-1/2
//                      text-white font-bold drop-shadow-lg z-20
//                      max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw]"
//         >
//           {displayCaption}
//         </div>
//       )}

//       {/* Indicators */}
//       {posters.length > 1 && (
//         <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2 z-30">
//           {posters.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurr(i)}
//               aria-label={`Poster ${i + 1}`}
//               className={`transition-all duration-300 rounded-lg
//                 ${curr === i ? "w-10 h-2 bg-blue-950" : "w-4 h-2 bg-amber-50 opacity-70"}`}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
