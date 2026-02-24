"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Photo Imports
import image1 from "../public/assets/gallery/01.jpeg";
import image2 from "../public/assets/gallery/02.jpeg";
import image3 from "../public/assets/gallery/03.jpeg";
import image4 from "../public/assets/gallery/04.jpeg";
import image5 from "../public/assets/gallery/05.jpeg";
import image6 from "../public/assets/gallery/06.jpeg";
import image7 from "../public/assets/gallery/07.jpeg";
import image8 from "../public/assets/gallery/08.jpeg";
import image9 from "../public/assets/gallery/09.jpeg";
import image10 from "../public/assets/gallery/10.jpeg";
import image11 from "../public/assets/gallery/11.jpeg";
import image12 from "../public/assets/gallery/12.jpeg";
import image13 from "../public/assets/gallery/13.jpeg";
import image14 from "../public/assets/gallery/14.jpeg";
import image15 from "../public/assets/gallery/15.jpeg";
import image16 from "../public/assets/gallery/16.jpeg";
import image17 from "../public/assets/gallery/17.jpeg";

// Video Imports
const video1 = "/assets/gallery/videos/eating.mp4";
const video2 = "/assets/gallery/videos/before_marriage.mp4";
const video3 = "/assets/gallery/videos/sajguj.mp4";
const video4 = "/assets/gallery/videos/i_wanna_be_your.mp4";
const video5 = "/assets/gallery/videos/cute.mp4";

export default function Gallery() {
  const photos = [
    {
      src: image1,
      alt: "....",
      desc: "the way you looked at me—it made me so shy I could only hide my smile.",
    },
    {
      src: image2,
      alt: "...",
      desc: "🥰🥰🥰🥰",
    },
    {
      src: image3,
      alt: "My signature",
      desc: "US😍",
    },
    {
      src: image4,
      alt: "Your signature",
      desc: "Finding our peace where the sky meets the sea. Just us and the ocean breeze.",
    },
    {
      src: image5,
      alt: "On the CNG",
      desc: "The moment our prayers finally met. A lifetime of blessings started right here.",
    },
    {
      src: image6,
      alt: "Official signature",
      desc: "With a single stroke of a pen, you became my forever.",
    },
    {
      src: image7,
      alt: "Sitting next to you.",
      desc: "I could sit here forever.",
    },
    {
      src: image8,
      alt: "Quiet moment selfie",
      desc: "Safe. Loved. Home. That’s what being near you feels like.",
    },
    {
      src: image9,
      alt: "Traditional ceremony sitting",
      desc: "The day we promised our lives to one another in red and gold.",
    },
    {
      src: image10,
      alt: "Focus on yellow flower",
      desc: "Even the most beautiful flowers fade when compared to your smile.",
    },
    {
      src: image11,
      alt: "Signing papers side view",
      desc: "The exact moment our two worlds became one official path.",
    },
    {
      src: image12,
      alt: "Rooftop view",
      desc: "High above the world, looking at the only view that truly matters.",
    },
    {
      src: image13,
      alt: "Vintage wedding shot",
      desc: "A timeless moment captured, but our love is even more timeless.",
    },
    {
      src: image14,
      alt: "Walking in the park",
      desc: "Wherever the road leads, I’m glad I’m walking it with you.",
    },
    {
      src: image15,
      alt: "Pencil sketch of us",
      desc: "Even in art, I can't find anything as beautiful as the way we are together.",
    },
    {
      src: image16,
      alt: "Night city selfie",
      desc: "Off to Debotakhum. Every adventure with you is my favorite one.",
    },
    {
      src: image17,
      alt: "Candid restaurant laugh",
      desc: "Just us, being us. It's the candid moments that I treasure most.",
    },
  ];

  // Simplified video array - no descriptions needed
  const videos = [video1, video2, video3, video4, video5];

  return (
    <section className="py-24 bg-slate-950 px-4">
      {/* ----------------- PHOTO SECTION ----------------- */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center items-end transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10">
              <div className="bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 md:px-6 md:py-4 text-center shadow-2xl w-full">
                <p className="text-white text-center text-sm md:text-base font-medium tracking-wide drop-shadow-md leading-relaxed h-12 overflow-hidden flex items-center justify-center">
                  {photo.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ----------------- DIVIDER ----------------- */}
      <div className="max-w-4xl mx-auto my-24 flex items-center justify-center">
        <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent to-rose-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-rose-500/50 mx-4"></div>
        <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent to-rose-500/50"></div>
      </div>

      {/* ----------------- VIDEO SECTION ----------------- */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center font-light mb-16 text-rose-400 drop-shadow-md"
      >
        Living Memories
      </motion.h2>

      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={`vid-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            className="break-inside-avoid relative rounded-3xl overflow-hidden mb-6 bg-slate-900 border border-white/5 shadow-lg w-full aspect-[9/16]"
          >
            {/* THE FIX: Removed autoPlay and muted, added controls */}
            <video
              src={typeof video === "string" ? video : undefined}
              controls
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
