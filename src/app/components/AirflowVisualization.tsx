import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function AirflowVisualization() {
  const [activeMode, setActiveMode] = useState("Particle Flow");
  const [activeAngle, setActiveAngle] = useState("120° Horizontal");

  const modes = ["Particle Flow", "Heat Map", "Air Waves"];
  const angles = ["120° Horizontal", "90° Vertical"];

  const visualizations = {
    "Particle Flow": "https://cdn.shopify.com/s/files/1/0582/3971/3322/files/6_5dc7a50f-e563-4ba2-8f60-3f02fe36fdda.jpg?v=1757781659",
    "Heat Map": "https://cdn.shopify.com/s/files/1/0582/3971/3322/files/7_f22dd675-a7ca-4dfa-b575-c96611d26ada.jpg?v=1757781659",
    "Air Waves": "https://cdn.shopify.com/s/files/1/0582/3971/3322/files/8_d760b1ae-64f9-4282-9760-6a614badf0a5.jpg?v=1757781659",
  };

  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left: Controls */}
          <div className="w-full md:w-1/3 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
                See Air <br /> in Motion
              </h2>
              <p className="text-gray-400 text-lg">
                Visualize how HĀLO creates a consistent vortex of fresh air across your entire room.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-red">Visualization Mode</label>
                <div className="flex flex-wrap gap-2">
                  {modes.map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setActiveMode(mode)}
                      className={`px-6 py-3 rounded-full text-sm font-bold border transition-all ${
                        activeMode === mode
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-white border-white/20 hover:border-white/40"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Oscillation Angle</label>
                <div className="flex gap-2 p-1 bg-white/5 rounded-full w-fit border border-white/10">
                  {angles.map((angle) => (
                    <button
                      key={angle}
                      onClick={() => setActiveAngle(angle)}
                      className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                        activeAngle === angle
                          ? "bg-white text-black shadow-lg"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {angle}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visualizer */}
          <div className="flex-1 w-full relative aspect-[4/3] md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden bg-white/5 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-brand-red/10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeMode}-${activeAngle}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="absolute inset-0 flex items-center justify-center p-12"
              >
                <img
                  src={visualizations[activeMode as keyof typeof visualizations]}
                  alt="Airflow visualization"
                  className="w-full h-full object-contain mix-blend-screen opacity-80"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating Info */}
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Currently Simulating</div>
                <div className="text-xl font-bold tracking-tight">{activeMode} @ {activeAngle}</div>
              </div>
              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-gray-800" />
                  ))}
                </div>
                <div className="text-[10px] font-bold">12k+ Analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
