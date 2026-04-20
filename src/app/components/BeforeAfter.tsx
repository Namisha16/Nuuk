import { motion } from "motion/react";
import { useState } from "react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-48 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: "48px 48px",
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
            The difference is night and day
          </h2>
          <p className="text-lg text-black/35 max-w-2xl mx-auto tracking-wide">
            Drag the slider to see how HĀLO transforms air circulation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Container */}
          <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border-2 border-black/10">
            {/* Before (Regular Fan) */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50">
              <div className="absolute inset-0 p-12">
                {/* Room corners - hot spots */}
                {[
                  { x: 10, y: 10 },
                  { x: 90, y: 10 },
                  { x: 10, y: 90 },
                  { x: 90, y: 90 },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute w-32 h-32 rounded-full bg-gradient-radial from-red-300 to-transparent blur-2xl"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      transform: "translate(-50%, -50%)",
                      opacity: 0.6,
                    }}
                  />
                ))}

                {/* Limited airflow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-40 h-40 rounded-full bg-gradient-radial from-blue-300/40 to-transparent blur-xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Stale air indicators */}
                <div className="absolute bottom-8 left-8 bg-red-100 border border-red-300 rounded-xl px-4 py-2">
                  <p className="text-xs text-red-800">Hot spots in corners</p>
                </div>
              </div>
            </div>

            {/* After (HĀLO) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <div className="absolute inset-0 p-12">
                {/* Even temperature distribution */}
                {Array.from({ length: 9 }).map((_, i) => {
                  const x = ((i % 3) * 50) + 25;
                  const y = (Math.floor(i / 3) * 50) + 25;
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-32 h-32 rounded-full bg-gradient-radial from-cyan-300/30 to-transparent blur-2xl"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.4, 0.6, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}

                {/* Product */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-cyan-400 shadow-2xl shadow-cyan-400/30"
                  />
                </div>

                {/* Perfect circulation indicator */}
                <div className="absolute bottom-8 right-8 bg-green-100 border border-green-300 rounded-xl px-4 py-2">
                  <p className="text-xs text-green-800">Perfect circulation</p>
                </div>
              </div>
            </div>

            {/* Slider */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-2xl cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={(e) => {
                const container = e.currentTarget.parentElement;
                if (!container) return;

                const handleMove = (moveEvent: MouseEvent) => {
                  const rect = container.getBoundingClientRect();
                  const x = moveEvent.clientX - rect.left;
                  const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                  setSliderPosition(percentage);
                };

                const handleUp = () => {
                  document.removeEventListener("mousemove", handleMove);
                  document.removeEventListener("mouseup", handleUp);
                };

                document.addEventListener("mousemove", handleMove);
                document.addEventListener("mouseup", handleUp);
              }}
            >
              {/* Slider handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-black/10">
                <div className="flex gap-1">
                  <div className="w-0.5 h-6 bg-black/30 rounded-full" />
                  <div className="w-0.5 h-6 bg-black/30 rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 border border-black/10">
              <p className="text-xs text-black/60 mb-1">Regular Fan</p>
              <p className="text-sm">Uneven Coverage</p>
            </div>
            <div
              className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 border border-black/10"
              style={{
                opacity: sliderPosition > 60 ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            >
              <p className="text-xs text-black/60 mb-1">HĀLO v2</p>
              <p className="text-sm">360° Coverage</p>
            </div>
          </div>
        </motion.div>

        {/* Key differences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-red-800">✕</span>
              Regular Fans
            </h3>
            <ul className="space-y-3 text-sm text-black/70">
              <li>• Hot and cold spots in corners</li>
              <li>• Limited 2D oscillation</li>
              <li>• Uneven air distribution</li>
              <li>• 40-60% room coverage</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">✓</span>
              HĀLO v2
            </h3>
            <ul className="space-y-3 text-sm text-black/70">
              <li>• Uniform temperature throughout</li>
              <li>• 3D oscillation (120° × 45°)</li>
              <li>• Perfect circulation in every zone</li>
              <li>• 100% room coverage (450 sq ft)</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
