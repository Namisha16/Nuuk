import { motion } from "motion/react";

export function ProductShowcase() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Clean Air, Always
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Advanced filtration system removes 99.9% of allergens and pollutants.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden mb-16 shadow-[0_0_50px_rgba(34,211,238,0.15)]"
        >
          <img 
            src="/clean_air_fan_grid_1776664472913.png" 
            alt="Clean Air Filter Visualization" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="text-2xl md:text-3xl font-bold mb-2">HEPA 13</div>
            <div className="text-gray-500 text-sm">Medical grade filter</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="text-2xl md:text-3xl font-bold mb-2">Active Carbon</div>
            <div className="text-gray-500 text-sm">Odor removal</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="text-2xl md:text-3xl font-bold mb-2">UV-C Light</div>
            <div className="text-gray-500 text-sm">Kills airborne bacteria</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
