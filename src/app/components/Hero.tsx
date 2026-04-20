import { motion } from "motion/react";
import { Check, Truck, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-8 md:px-16 max-w-[1600px] mx-auto bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0582/3971/3322/files/1_d5ce7348-96a9-4c3c-88f7-9b4836fc8041.jpg?v=1757781659"
            alt="Living room with fan"
            className="w-full h-auto object-cover rounded-sm aspect-[4/3]"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-500">
              New Arrival
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              The HĀLO v2 LĪNKD
            </h1>
            <p className="text-xl text-gray-600">
              Clean air. Quiet operation.
            </p>
          </div>

          <div className="text-4xl font-semibold tracking-tight">
            ₹13,499
          </div>

          <div className="bg-green-50 border border-green-200 border-dashed rounded-lg p-4">
            <p className="text-green-800 text-sm">
              <span className="font-semibold">Extra 5% off</span> on all prepaid orders. Code: <span className="font-bold">HALO5</span>
            </p>
            <p className="text-green-800 text-sm mt-1">
              <span className="font-semibold">Buy now, pay later</span> with 0% EMI up to 6 months.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-[#FF0033] text-white py-4 rounded-full font-medium text-lg hover:bg-red-600 transition-colors">
              Add to cart
            </button>
            <button className="flex-1 bg-black text-white py-4 rounded-full font-medium text-lg hover:bg-gray-900 transition-colors">
              Buy now
            </button>
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-100">
            <label className="text-sm font-medium text-gray-700">Check delivery</label>
            <div className="flex gap-2 max-w-sm">
              <input 
                type="text" 
                placeholder="Enter PIN code" 
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button className="bg-gray-100 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                Check
              </button>
            </div>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-2">
              <Check className="w-3 h-3" /> Delivery available in 2-3 days
            </p>
          </div>
        </motion.div>
      </div>

      {/* Features below hero */}
      <div className="grid grid-cols-3 gap-8 mt-24 border-t border-gray-100 pt-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">&lt; 30dB Quiet</h3>
            <p className="text-gray-500 text-sm mt-1">Ultra-silent operation</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">3D Airflow</h3>
            <p className="text-gray-500 text-sm mt-1">Multi-directional oscillation</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Smart Control</h3>
            <p className="text-gray-500 text-sm mt-1">App & Voice enabled</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
