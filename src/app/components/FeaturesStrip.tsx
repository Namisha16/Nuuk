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
    <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center gap-6"
            >
              <div className="relative w-16 h-16 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-8 h-8 stroke-[1.5] text-black" />
              </div>
              <div className="space-y-1">
                <p className="text-base font-bold text-black">
                  {feature.label}
                </p>
                <p className="text-xs font-medium text-gray-500 tracking-tight">
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
