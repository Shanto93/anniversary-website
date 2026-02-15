export default function ReasonGrid() {
  const reasons = [
    { front: "Reason #1", back: "Your incredible patience with me." },
    { front: "Reason #2", back: "The way your smile lights up a room." },
    { front: "Reason #3", back: "You are my biggest supporter." },
  ];

  return (
    <section className="py-24 bg-slate-900 px-4">
      <h2 className="text-4xl text-center font-light mb-16 text-white">
        Why I Love You
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <div
            key={i}
            // 1. Added perspective to give the flip a realistic 3D depth
            className="group h-64 w-full cursor-pointer [perspective:1000px]"
          >
            <div
              // 2. Added preserve-3d and the hover rotateY interaction
              className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              {/* Front of Card */}
              <div
                // 3. Added backface-visibility:hidden (This fixes the mirrored text!)
                className="absolute inset-0 w-full h-full bg-slate-800 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg [backface-visibility:hidden]"
              >
                <h3 className="text-2xl text-rose-400 font-light">{r.front}</h3>
              </div>

              {/* Back of Card */}
              <div
                // 4. Added rotateY(180deg) to start it flipped, and backface-visibility:hidden
                className="absolute inset-0 w-full h-full bg-rose-600 rounded-2xl flex items-center justify-center p-6 text-center text-white shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]"
              >
                <p className="text-xl font-medium">{r.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
