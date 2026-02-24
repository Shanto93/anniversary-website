// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// // Your Photo Imports
// import image1 from "../public/assets/gallery/dua_after_marriage.jpeg";
// import image2 from "../public/assets/gallery/during_signature.jpeg";
// import image3 from "../public/assets/gallery/my_signature.jpeg";
// import image5 from "../public/assets/gallery/on_cng.jpeg";
// import image4 from "../public/assets/gallery/your_signature.jpeg";

// // Video paths as strings - Next.js serves these from the public folder
// const video1 = "/assets/gallery/videos/eating.mp4";
// const video2 = "/assets/gallery/videos/before_marriage.mp4";
// const video3 = "/assets/gallery/videos/cute.mp4";
// const video4 = "/assets/gallery/videos/sajguj.mp4";
// const video5 = "/assets/gallery/videos/i_wanna_be_your.mp4";

// export default function Gallery() {
//   const photos = [
//     {
//       src: image1,
//       alt: "Dua after our marriage",
//       desc: "The moment we asked for a lifetime of blessings, hand in hand.",
//     },
//     {
//       src: image2,
//       alt: "During our signature",
//       desc: "The day we signed our marriage papers, a milestone in our journey.",
//     },
//     {
//       src: image3,
//       alt: "My signature",
//       desc: "My signature, a symbol of our commitment and love.",
//     },
//     {
//       src: image4,
//       alt: "Your signature",
//       desc: "The day you officially became my forever. My favorite signature in the world.",
//     },
//     {
//       src: image5,
//       alt: "On the CNG",
//       desc: "It's the simple moments—a rose, a ride, and you—that mean the most.",
//     },
//   ];

//   // Create an array for your videos with captions
//   const videos = [
//     { src: video1, desc: "Sharing meals, sharing life." },
//     { src: video2, desc: "Before we said 'I do'." },
//     { src: video3, desc: "Just you being your cute self." },
//     { src: video4, desc: "Getting ready together." },
//     { src: video5, desc: "I wanna be yours, always." },
//   ];

//   return (
//     <section className="py-24 bg-slate-950 px-4">
//       {/* ----------------- PHOTO SECTION ----------------- */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl text-center font-light mb-16 text-rose-400 drop-shadow-md"
//       >
//         Moments in Time
//       </motion.h2>

//       <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6">
//         {photos.map((photo, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
//             className="break-inside-avoid relative group rounded-3xl overflow-hidden mb-6 bg-slate-900 border border-white/5 shadow-lg hover:shadow-rose-500/20 transition-shadow duration-700 cursor-pointer w-full aspect-[4/3]"
//           >
//             <Image
//               src={photo.src}
//               alt={photo.alt}
//               fill
//               sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//               placeholder="blur"
//               className="object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
//             <div className="absolute bottom-0 left-0 w-full flex justify-center items-end transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10">
//               <div className="bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 md:px-6 md:py-4 text-center shadow-2xl w-full">
//                 <p className="text-white text-center text-sm md:text-base font-medium tracking-wide drop-shadow-md leading-relaxed h-12 overflow-hidden">
//                   {photo.desc}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* ----------------- DIVIDER ----------------- */}
//       <div className="max-w-4xl mx-auto my-24 flex items-center justify-center">
//         <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent to-rose-500/50"></div>
//         <div className="w-3 h-3 rounded-full bg-rose-500/50 mx-4"></div>
//         <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent to-rose-500/50"></div>
//       </div>

//       {/* ----------------- VIDEO SECTION ----------------- */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl text-center font-light mb-16 text-rose-400 drop-shadow-md"
//       >
//         Living Memories
//       </motion.h2>

//       <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6">
//         {videos.map((video, index) => (
//           <motion.div
//             key={`vid-${index}`}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
//             // We use aspect-[9/16] here assuming these are vertical mobile phone videos.
//             // Change to aspect-[16/9] if they are landscape!
//             className="break-inside-avoid relative group rounded-3xl overflow-hidden mb-6 bg-slate-900 border border-white/5 shadow-lg hover:shadow-rose-500/20 transition-shadow duration-700 cursor-pointer w-full aspect-[9/16]"
//           >
//             {/* The Video Element */}
//             <video
//               src={typeof video.src === "string" ? video.src : undefined} // Fallback if bundler passes object
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
//             />

//             {/* Dark gradient overlay fades in to make text readable */}
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

//             {/* The Glassmorphism Caption Container */}
//             {/* <div className="absolute bottom-0 left-0 w-full flex justify-center items-end transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10">
//               <div className="bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 md:px-6 md:py-4 text-center shadow-2xl w-full">
//                 <p className="text-white text-center text-sm md:text-base font-medium tracking-wide drop-shadow-md leading-relaxed h-12 overflow-hidden flex items-center justify-center">
//                   {video.desc}
//                 </p>
//               </div>
//             </div> */}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Photo Imports
import image1 from "../public/assets/gallery/dua_after_marriage.jpeg";
import image2 from "../public/assets/gallery/during_signature.jpeg";
import image3 from "../public/assets/gallery/my_signature.jpeg";
import image5 from "../public/assets/gallery/on_cng.jpeg";
import image4 from "../public/assets/gallery/your_signature.jpeg";

// Video Imports
const video1 = "/assets/gallery/videos/eating.mp4";
const video2 = "/assets/gallery/videos/before_marriage.mp4";
const video3 = "/assets/gallery/videos/sajguj.mp4";
const video4 = "/assets/gallery/videos/i_wanna_be_your.mp4";

export default function Gallery() {
  const photos = [
    { src: image1, alt: "Dua after our marriage", desc: "The moment we asked for a lifetime of blessings, hand in hand." },
    { src: image2, alt: "During our signature", desc: "The day we signed our marriage papers, a milestone in our journey." },
    { src: image3, alt: "My signature", desc: "My signature, a symbol of our commitment and love." },
    { src: image4, alt: "Your signature", desc: "The day you officially became my forever. My favorite signature in the world." },
    { src: image5, alt: "On the CNG", desc: "It's the simple moments—a rose, a ride, and you—that mean the most." },
  ];

  // Simplified video array - no descriptions needed
  const videos = [video1, video2, video3, video4];

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
              src={typeof video === 'string' ? video : undefined} 
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