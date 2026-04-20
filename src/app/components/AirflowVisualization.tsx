import { motion } from "motion/react";

export function AirflowVisualization() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-16 max-w-lg">
          It's all about that <span className="text-[#FF0033]">HĀLO</span> airflow
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side: two square diagrams */}
          <div className="flex gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-4 w-48 h-48 sm:w-64 sm:h-64 flex flex-col justify-between"
            >
              <div className="text-red-500 font-bold text-3xl">120°</div>
              <img src="/airflow_diagram_1_1776664392771.png" alt="Airflow Horizontal" className="w-full h-full object-contain" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-4 w-48 h-48 sm:w-64 sm:h-64 flex flex-col justify-between relative"
            >
              <div className="text-red-500 font-bold text-3xl z-10">180°</div>
              <img src="/airflow_diagram_1_1776664392771.png" alt="Airflow Vertical" className="w-full h-full object-contain scale-x-[-1]" />
            </motion.div>
          </div>

          {/* Right side: round feature image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center ml-auto max-w-sm mt-12 md:mt-0"
          >
            <div className="rounded-full overflow-hidden w-64 h-64 shadow-2xl mb-8 relative border border-gray-100">
              <img src="/fan_close_up_round_1776664529828.png" alt="HĀLO Fan Close Up" className="w-full h-full object-cover" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-bold text-2xl tracking-tight">hulo sound</h3>
              <p className="text-[#FF0033] font-bold text-xl">&lt; 30dB</p>
              <p className="text-gray-600 font-medium">3D air circulator</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
