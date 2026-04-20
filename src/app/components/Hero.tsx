import { motion } from "motion/react";
import { Check, Info } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [selectedEmi, setSelectedEmi] = useState(12);

  const emiOptions = [
    { months: 3, amount: 4500, label: "No cost EMI" },
    { months: 6, amount: 2250, label: "No cost EMI" },
    { months: 12, amount: 1125, label: "Most Popular", highlighted: true },
    { months: 18, amount: 750, label: "Lowest EMI" },
  ];

  return (
    <section className="pt-24 md:pt-32 pb-16 px-6 md:px-10 max-w-[1400px] mx-auto bg-white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 space-y-8"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase text-black">
                HĀLO V2 LINKD
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black leading-[1.1]">
              India's Most <br className="hidden md:block" /> Silent Air Circulator
            </h1>
            
            <div className="flex items-baseline gap-4">
              <span className="text-3xl md:text-4xl font-bold text-black">₹13,499</span>
              <span className="text-xl text-gray-400 line-through">₹16,999</span>
              <span className="text-sm font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">20% OFF</span>
            </div>
          </div>

          {/* EMI Card */}
          <div className="bg-brand-mint rounded-2xl p-5 md:p-6 space-y-4 border border-brand-green/20 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-bold text-black">0% Interest EMI Available</span>
              </div>
              <Info className="w-4 h-4 text-gray-400 cursor-help" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {emiOptions.map((option) => (
                <button
                  key={option.months}
                  onClick={() => setSelectedEmi(option.months)}
                  className={`relative p-3 rounded-xl border-2 transition-all text-left ${
                    selectedEmi === option.months
                      ? "bg-white border-brand-green shadow-md scale-[1.02]"
                      : "bg-white/50 border-transparent hover:bg-white/80"
                  }`}
                >
                  {option.highlighted && (
                    <span className="absolute -top-2 left-2 px-2 py-0.5 bg-brand-green text-[10px] font-bold text-white rounded-full leading-none">
                      {option.label}
                    </span>
                  )}
                  <div className="text-sm font-bold text-black">₹{option.amount}/mo</div>
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">
                    {option.months} Months {!option.highlighted && `• ${option.label}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-black text-white py-4 rounded-full font-bold text-base hover:bg-gray-900 transition-all active:scale-[0.98]">
              Buy Now
            </button>
            <button className="flex-1 bg-brand-red text-white py-4 rounded-full font-bold text-base hover:bg-red-600 transition-all active:scale-[0.98]">
              Add to Cart
            </button>
          </div>

          <p className="text-center md:text-left text-xs text-gray-500 font-medium">
            *Delivery within 2-4 business days across India
          </p>
        </motion.div>

        {/* Right: Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent rounded-full -z-10" />
          <img
            src="https://cdn.shopify.com/s/files/1/0582/3971/3322/files/1_d5ce7348-96a9-4c3c-88f7-9b4836fc8041.jpg?v=1757781659"
            alt="NUUK HĀLO v2"
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </motion.div>
      </div>

      {/* Features strip below hero */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-gray-100">
        {[
          { title: "Quiet", desc: "<30dB Silence", icon: "🔇" },
          { title: "Airflow", desc: "10m Distance", icon: "💨" },
          { title: "Control", desc: "App & Remote", icon: "📱" },
          { title: "Energy", desc: "BLDC Engine", icon: "⚡" }
        ].map((feat, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl">
              {feat.icon}
            </div>
            <div>
              <h3 className="font-bold text-sm text-black">{feat.title}</h3>
              <p className="text-xs text-gray-500">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
