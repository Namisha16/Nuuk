import { motion } from "motion/react";
import { Package, Truck, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export function DeliveryInfo() {
  const [pincode, setPincode] = useState("");
  const [checkingDelivery, setCheckingDelivery] = useState(false);
  const [deliveryAvailable, setDeliveryAvailable] = useState<boolean | null>(
    null
  );

  const handleCheckDelivery = () => {
    setCheckingDelivery(true);
    // Simulate API call
    setTimeout(() => {
      setDeliveryAvailable(true);
      setCheckingDelivery(false);
    }, 1000);
  };

  return (
    <section className="py-40 bg-gradient-to-b from-white to-[#fafafa] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Delivery Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] leading-[1.05]">
                Fast, secure delivery across India
              </h2>
              <p className="text-lg text-black/40 max-w-xl tracking-wide leading-relaxed">
                Premium packaging, careful handling, and real-time tracking for
                your peace of mind.
              </p>
            </div>

            {/* Pincode Checker */}
            <div className="space-y-4">
              <label className="text-sm text-black/60 tracking-wide">
                Check delivery availability
              </label>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
                  <input
                    type="text"
                    placeholder="Enter pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-black/10 rounded-full focus:outline-none focus:border-black/30 transition-colors text-base"
                    maxLength={6}
                  />
                </div>
                <button
                  onClick={handleCheckDelivery}
                  disabled={pincode.length !== 6 || checkingDelivery}
                  className="px-8 py-4 bg-black text-white rounded-full hover:bg-black/80 transition-all active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {checkingDelivery ? "Checking..." : "Check"}
                </button>
              </div>

              {deliveryAvailable !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-2xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-green-800 mb-1">
                        Delivery available in your area
                      </p>
                      <p className="text-xs text-green-700">
                        Expected delivery: 2-3 business days
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Delivery Features */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {[
                {
                  icon: Package,
                  title: "Premium Packaging",
                  desc: "Double-layered protection",
                },
                {
                  icon: Truck,
                  title: "Express Shipping",
                  desc: "2-3 day delivery",
                },
                {
                  icon: MapPin,
                  title: "Live Tracking",
                  desc: "Real-time updates",
                },
                {
                  icon: Calendar,
                  title: "Flexible Delivery",
                  desc: "Choose your slot",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-black/60" />
                  </div>
                  <div>
                    <p className="text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-black/40">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-white rounded-[3rem] flex items-center justify-center border border-black/5 relative overflow-hidden">
              {/* Animated delivery illustration */}
              <div className="relative w-full h-full p-16">
                {/* Map background */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="150" fill="none" stroke="black" strokeWidth="1" />
                    <circle cx="200" cy="200" r="100" fill="none" stroke="black" strokeWidth="1" />
                    <circle cx="200" cy="200" r="50" fill="none" stroke="black" strokeWidth="1" />
                  </svg>
                </div>

                {/* Package */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-48 h-48 mx-auto bg-white rounded-3xl shadow-2xl border border-black/10 flex items-center justify-center"
                >
                  <Package className="w-20 h-20 text-black/20" />
                </motion.div>

                {/* Tracking dots */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 2, 3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.6,
                    }}
                  >
                    <div className="w-32 h-32 rounded-full border-2 border-[#FF0033]/20" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
