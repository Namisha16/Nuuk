import { motion } from "motion/react";
import { Play, Volume2, Maximize2 } from "lucide-react";
import { useState } from "react";

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-48 bg-black text-white relative overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/10 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] leading-[1.05] mb-8">
            See it in action
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto tracking-wide">
            Watch how HĀLO transforms your space with whisper-quiet circulation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 group cursor-pointer">
            {/* Placeholder Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
              <img
                src="https://cdn.shopify.com/s/files/1/0582/3971/3322/files/9_843ac137-8364-43cc-9ebe-6b78227e5c8e.jpg?v=1757781659"
                alt="HĀLO in living room"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700 mix-blend-screen"
              />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

            {/* Play Button */}
            {!isPlaying && (
              <motion.button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#FF0033]/20"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />

                  {/* Play button */}
                  <div className="relative w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 shadow-2xl">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              </motion.button>
            )}

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="text-white/60 hover:text-white transition-colors">
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <span className="text-sm text-white/60">2:34 / 3:12</span>
                </div>
                <button className="text-white/60 hover:text-white transition-colors">
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Duration badge */}
            <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10">
              <span className="text-sm text-white/80">3:12</span>
            </div>
          </div>

          {/* Video Chapters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {[
              { time: "0:00", label: "Unboxing" },
              { time: "0:45", label: "Setup Guide" },
              { time: "1:30", label: "App Demo" },
              { time: "2:15", label: "Silent Test" },
            ].map((chapter, index) => (
              <button
                key={index}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-left"
              >
                <p className="text-xs text-[#FF0033] mb-1 tracking-wide">
                  {chapter.time}
                </p>
                <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors">
                  {chapter.label}
                </p>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
