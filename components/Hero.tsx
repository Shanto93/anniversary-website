"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import image1 from "../public/assets/hero/1744901865863.jpg";

interface HeartData {
  id: number;
  left: string;
  animationDuration: string;
  delay: string;
}

export default function Hero() {
  const [hearts, setHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Increased to 20 hearts and made them float slightly slower for elegance
      const generatedHearts = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 7}s`,
        delay: `${Math.random() * 5}s`,
      }));

      setHearts(generatedHearts);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <Image
          src={image1}
          alt="Our Wedding Day"
          fill
          priority // Tells Next.js to load this image immediately (critical for hero sections)
          sizes="100vw"
          className="object-cover animate-ken-burns opacity-55"
        />
        {/* Upgraded from a flat color to a smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-slate-950/95"></div>
      </div>

      {/* Floating Glowing Hearts */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute bottom-[-10%] text-rose-500/40 text-xl md:text-3xl drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]"
            style={{ left: heart.left }}
            animate={{
              y: ["0vh", "-120vh"],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }} // Added a breathing scale effect
            transition={{
              duration: parseFloat(heart.animationDuration),
              repeat: Infinity,
              delay: parseFloat(heart.delay),
              ease: "linear",
            }}
          >
            ❤
          </motion.div>
        ))}
      </div>

      {/* Main Text Content */}
      <div className="z-20 text-center px-4 mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-light mb-6 tracking-wide drop-shadow-xl text-white/95">
            365 Days of <span className="font-semibold text-rose-400">Us</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-3xl font-light text-rose-200/90 tracking-wide drop-shadow-md"
        >
          Happy 1st Anniversary, Sanjida
        </motion.p>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-60"
      >
        <span className="text-xs uppercase tracking-widest text-rose-300 mb-2 font-medium">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-rose-400 to-transparent"></div>
      </motion.div>
    </section>
  );
}
