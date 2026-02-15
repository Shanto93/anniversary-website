"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import image1 from "../public/assets/timeline/1744901865863.jpg";
import image2 from "../public/assets/timeline/1744901996164.jpg";
import image3 from "../public/assets/timeline/1744902061195.jpg";

export default function Timeline() {
  const milestones = [
    {
      date: "The Day We Met",
      text: "The moment my life changed forever.",
      img: image1,
    },
    {
      date: "Feb 27, 2025",
      text: "The day you became my wife.",
      img: image2,
    },
    {
      date: "Our First Trip",
      text: "Exploring the world, hand in hand.",
      img: image3,
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white px-4 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl text-center font-light mb-20 text-rose-400 drop-shadow-md"
      >
        Our First 365
      </motion.h2>

      <div className="max-w-xl mx-auto relative border-l-2 border-rose-500/20 ml-6 md:ml-auto md:mx-auto">
        {milestones.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 15,
              delay: i * 0.15,
            }}
            className="mb-16 ml-10 relative group"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: i * 0.15 + 0.3,
              }}
              className="absolute -left-[51px] top-6 w-5 h-5 bg-rose-500 rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.8)]"
            ></motion.div>

            <div className="bg-slate-900/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl hover:border-rose-500/40 transition-colors duration-500">
              <span className="text-sm font-bold tracking-widest text-rose-500 uppercase drop-shadow-sm">
                {item.date}
              </span>
              <h3 className="text-xl md:text-2xl text-slate-200 mt-2 mb-6 font-light leading-relaxed">
                {item.text}
              </h3>

              {/* THE FIX: Changed to md:w-2/3 and added mx-auto for centering */}
              <div className="relative w-full md:w-2/3 mx-auto aspect-[4/3] bg-slate-800 rounded-2xl overflow-hidden shadow-inner transform transition-transform duration-700">
                <Image
                  src={item.img}
                  alt={item.date}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
