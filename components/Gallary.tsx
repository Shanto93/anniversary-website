"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import image1 from "../public/assets/gallery/dua_after_marriage.jpeg";
import image2 from "../public/assets/gallery/during_signature.jpeg";
import image3 from "../public/assets/gallery/my_signature.jpeg";
import image5 from "../public/assets/gallery/on_cng.jpeg";
import image4 from "../public/assets/gallery/your_signature.jpeg";

export default function Gallery() {
  const photos = [
    {
      src: image1,
      alt: "Dua after our marriage",
      desc: "Dua after our marriage, a moment I'll cherish forever.",
    },
    {
      src: image2,
      alt: "During our signature",
      desc: "The day we signed our marriage papers, a milestone in our journey.",
    },
    {
      src: image3,
      alt: "My signature",
      desc: "My signature, a symbol of our commitment and love.",
    },
    {
      src: image4,
      alt: "Your signature",
      desc: "Your signature, a testament to our shared future and dreams.",
    },
    {
      src: image5,
      alt: "On the CNG",
      desc: "On the CNG, a candid moment that captures our everyday joy and love.",
    },
  ];

  return (
    <section className="py-24 bg-slate-950 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center font-light mb-16 text-rose-400 drop-shadow-md"
      >
        Moments in Time
      </motion.h2>

      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            // UPGRADE: Added 'w-full aspect-[4/3]' to lock your 4000x3000 dimensions
            className="break-inside-avoid relative group rounded-3xl overflow-hidden mb-6 bg-slate-900 border border-white/5 shadow-lg hover:shadow-rose-500/20 transition-shadow duration-700 cursor-pointer w-full aspect-[4/3]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              placeholder="blur"
              className="object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
            />

            {/* Dark gradient overlay fades in to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* YOUR CUSTOM DESIGN: The full-width floating container */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center items-end transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10">
              {/* The full-width Glass Pill */}
              <div className="bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 md:px-6 md:py-4 text-center shadow-2xl w-full">
                {/* Your custom h-12 height lock and overflow */}
                <p className="text-white text-center text-sm md:text-base font-medium tracking-wide drop-shadow-md leading-relaxed h-12 overflow-hidden">
                  {photo.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
