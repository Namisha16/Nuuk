import { Gauge, Orbit, Volume1, Smartphone } from "lucide-react";
import { motion } from "motion/react";

export function FeaturesStrip() {
  const features = [
    {
      icon: Gauge,
      label: "12 Speed Levels",
      desc: "Precision control",
    },
    {
      icon: Orbit,
      label: "3D Oscillation",
      desc: "120° coverage",
    },
    {
      icon: Volume1,
      label: "<30dB Whisper Quiet",
      desc: "Library silent",
    },
    {
      icon: Smartphone,
      label: "Smart App Control",
      desc: "iOS & Android",
    },
  ];

  return (
    <section className="py-40 md:py-48 bg-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center gap-8"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-black/5 rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative w-20 h-20 rounded-full border border-black/[0.08] flex items-center justify-center group-hover:border-black/20 transition-colors duration-500">
                  <feature.icon className="w-10 h-10 stroke-[0.75] text-black/50 group-hover:text-black/70 transition-colors duration-500" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm tracking-wide text-black/80">
                  {feature.label}
                </p>
                <p className="text-xs text-black/30 tracking-wide">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
