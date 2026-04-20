import { motion } from "motion/react";
import { Apple } from "lucide-react";

export function SmartStory() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src="https://cdn.shopify.com/s/files/1/0582/3971/3322/files/10_3c116381-39e1-4aca-93f9-1a9bc9d5833f.jpg?v=1757781659" 
              alt="HĀLO App Interface" 
              className="max-w-[320px] w-full drop-shadow-2xl rounded-[3rem] mix-blend-multiply"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-lg"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Control from anywhere.
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Schedule, adjust speeds, and monitor air quality directly from your smartphone.
            </p>

            <div className="pt-4">
              <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition-colors">
                <Apple className="w-6 h-6 fill-current" />
                <div className="text-left flex flex-col items-start leading-tight">
                  <span className="text-[10px]">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
