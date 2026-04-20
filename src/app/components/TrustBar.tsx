import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";
import { motion } from "motion/react";

export function TrustBar() {
  const items = [
    { icon: Truck, text: "Free Shipping" },
    { icon: Shield, text: "2-Year Warranty" },
    { icon: RotateCcw, text: "30-Day Returns" },
    { icon: Headphones, text: "Expert Support" },
  ];

  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-gray-400 stroke-[1.5]" />
              </div>
              <span className="text-sm font-bold text-black tracking-tight">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
