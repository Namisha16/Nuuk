import { Check } from "lucide-react";
import { motion } from "motion/react";

export function ComparisonTable() {
  const features = [
    { name: "Smart App Control", v2: true, v1: false },
    { name: "Oscillation", v2: "120° H / 90° V", v1: "90° H" },
    { name: "Noise Level", v2: "< 30dB", v1: "< 45dB" },
    { name: "Speed Levels", v2: "12 Speeds", v1: "3 Speeds" },
    { name: "Engine Type", v2: "BLDC Motor", v1: "AC Motor" },
    { name: "Weekly Scheduling", v2: true, v1: false },
  ];

  return (
    <section className="py-32 bg-brand-bg">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-20 text-black">
          Compare Models
        </h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-black/5 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="py-8 px-10 font-bold uppercase tracking-widest text-xs opacity-50">Feature</th>
                  <th className="py-8 px-10 text-center">
                    <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Current</div>
                    <div className="text-lg font-black tracking-tight">HĀLO V2</div>
                  </th>
                  <th className="py-8 px-10 text-center">
                    <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Previous</div>
                    <div className="text-lg font-black tracking-tight opacity-40">HĀLO V1</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {features.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-10 text-sm font-bold text-gray-400 uppercase tracking-widest">{feature.name}</td>
                    <td className="py-6 px-10 text-center">
                      {typeof feature.v2 === "boolean" ? (
                        feature.v2 ? <div className="bg-brand-green w-8 h-8 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand-green/20">
                          <Check className="w-4 h-4 text-white stroke-[3]" />
                        </div> : <span className="text-gray-200">/</span>
                      ) : (
                        <span className="text-base font-black text-black tracking-tight">{feature.v2}</span>
                      )}
                    </td>
                    <td className="py-6 px-10 text-center opacity-40">
                      {typeof feature.v1 === "boolean" ? (
                        feature.v1 ? <Check className="w-5 h-5 text-gray-400 mx-auto" /> : <span className="text-gray-200">—</span>
                      ) : (
                        <span className="text-sm font-bold text-gray-500">{feature.v1}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
