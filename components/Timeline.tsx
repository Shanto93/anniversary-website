"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";

import image8 from "../public/assets/timeline/cute.jpeg";
import image5 from "../public/assets/timeline/cycle.jpeg";
import image2 from "../public/assets/timeline/dua.jpeg";
import image9 from "../public/assets/timeline/flower.jpeg";
import image3 from "../public/assets/timeline/on_cng.jpeg";
import image6 from "../public/assets/timeline/sareePunjabi.jpeg";
import image7 from "../public/assets/timeline/sea.jpeg";
import image4 from "../public/assets/timeline/walking.jpeg";
import image1 from "../public/assets/timeline/your_signature.jpeg";

export default function Timeline() {
  const milestones = [
    {
      date: "The day you officially became my forever. My favorite signature in the world.",
      img: image1,
    },
    {
      date: "The moment we asked for a lifetime of blessings, hand in hand.",
      img: image2,
    },
    {
      date: "It's the simple moments—a rose, a ride, and you—that mean the most.",
      img: image3,
    },
    {
      date: "Wherever the road leads, I'm glad I'm walking it with you.",
      img: image4,
    },
    {
      date: "Life is a beautiful ride when you're right behind me.",
      img: image5,
    },
    {
      date: "Traditional colors, timeless love. You look breathtaking.",
      img: image6,
    },
    {
      date: "Peace feels exactly like the ocean breeze and your smile.",
      img: image7,
    },
    { date: "Just a little reminder of how much I adore you.", img: image8 },
    {
      date: "Every 'Good Morning' is perfect because it starts with us.",
      img: image9,
    },
  ];

  return (
    <section className="py-32 bg-slate-950 px-4 sm:px-6 overflow-hidden relative min-h-screen">
      {/* Deep, romantic background ambience */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl text-center font-serif font-light mb-24 text-rose-300 drop-shadow-md"
        >
          Our Journey
        </motion.h2>

        {/* The Timeline Container */}
        <div className="relative w-full">
          {/* THE GLOWING CENTER LINE 
              Mobile: Positioned on the left (left-8)
              PC: Positioned perfectly in the center (md:left-1/2)
          */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-rose-500/40 to-transparent md:-translate-x-1/2"></div>

          {milestones.map((item, i) => {
            // Logic to determine if the card goes on the Left or Right on PC
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-center justify-between mb-20 w-full ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* 1. Empty Spacer: Forces the card to one side on PC, hidden on Mobile */}
                <div className="hidden md:block md:w-[45%]"></div>

                {/* 2. The Timeline Heart Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.1,
                  }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 border border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.3)] z-20"
                >
                  <Heart className="w-5 h-5 text-rose-400 fill-rose-900/50" />
                </motion.div>

                {/* 3. The Memory Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  // Mobile: Padding left to make room for the line. PC: Full width of its half.
                  className={`w-full pl-16 md:pl-0 md:w-[45%] ${isEven ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"}`}
                >
                  <div className="bg-slate-900/40 backdrop-blur-xl p-5 md:p-6 rounded-[2rem] border border-white/5 shadow-2xl group hover:border-rose-500/20 transition-colors duration-500">
                    {/* Image Container with infinite soft breathing animation */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 shadow-inner">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          duration: 25,
                          ease: "linear",
                          repeat: Infinity,
                        }}
                        className="w-full h-full"
                      >
                        <Image
                          src={item.img}
                          alt="Memory"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          placeholder="blur"
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Vignette overlay to make images look cinematic */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                    </div>

                    {/* Romantic Typography */}
                    <div className="mt-6 text-center px-2">
                      <p className="text-lg md:text-xl font-serif text-rose-50/90 italic leading-relaxed tracking-wide">
                        &quot;{item.date}&quot;
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
