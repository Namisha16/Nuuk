import { motion } from "motion/react";

export function OscillationArc() {
  return (
    <section className="py-48 bg-white relative overflow-hidden">
      {/* Premium background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] leading-[1.1] mb-8">
            120° of pure circulation
          </h2>
          <p className="text-lg text-black/40 tracking-wide">
            3D oscillation covers every corner of your space
          </p>
        </motion.div>

        {/* Oscillation Arc Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto aspect-[2/1] flex items-end justify-center mb-32"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-radial from-[#FF0033]/5 via-transparent to-transparent blur-3xl" />

          {/* Background arc lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 900 450"
            fill="none"
          >
            {/* Static arc guides - more refined */}
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={`M ${120 + i * 60} 450 Q 450 ${70 + i * 60} ${780 - i * 60} 450`}
                stroke="black"
                strokeOpacity={0.03 - i * 0.005}
                strokeWidth="1"
                fill="none"
              />
            ))}

            {/* Animated airflow path */}
            <motion.path
              d="M 120 450 Q 450 70 780 450"
              stroke="url(#gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="1400"
              initial={{ strokeDashoffset: 1400 }}
              animate={{ strokeDashoffset: [1400, 0, 1400] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF0033" stopOpacity="0" />
                <stop offset="50%" stopColor="#FF0033" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF0033" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Oscillating particles - more refined */}
            {[0, 0.2, 0.4, 0.6, 0.8, 1].map((t, i) => {
              const x = 120 + (780 - 120) * t;
              const y = 450 - 380 * Math.sin(Math.PI * t);

              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#FF0033"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0.3, 1.2, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "easeInOut",
                  }}
                />
              );
            })}

            {/* Angle markers - refined typography */}
            <text x="120" y="440" className="text-xs fill-black/25 tracking-wider" fontSize="11">
              -60°
            </text>
            <text x="445" y="80" className="text-xs fill-black/25 tracking-wider" textAnchor="middle" fontSize="11">
              0°
            </text>
            <text x="770" y="440" className="text-xs fill-black/25 tracking-wider" textAnchor="end" fontSize="11">
              +60°
            </text>
          </svg>

          {/* Product base - more premium */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10 w-40 h-28 bg-gradient-to-t from-black/[0.08] via-black/[0.02] to-transparent rounded-t-[4rem]"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/15 rounded-full blur-md" />
          </motion.div>
        </motion.div>

        {/* Feature grid - more premium spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto"
        >
          {[
            { value: "120°", label: "Horizontal oscillation", unit: "coverage" },
            { value: "45°", label: "Vertical tilt range", unit: "adjustment" },
            { value: "450", label: "Coverage area", unit: "sq ft" },
          ].map((item, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="relative inline-block">
                <p className="text-5xl md:text-6xl tracking-[-0.02em]">
                  {item.value}
                </p>
                {item.unit === "sq ft" && (
                  <span className="text-xl text-black/30 ml-1">sq ft</span>
                )}
                <motion.div
                  className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF0033]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <p className="text-sm text-black/40 tracking-wide">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

