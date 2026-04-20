import { motion } from "motion/react";

export function PremiumBadge() {
  return (
    <section className="py-20 bg-white border-y border-black/5">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center">
              <svg className="w-8 h-8 stroke-black/60" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm tracking-wide mb-1">Free Shipping</p>
              <p className="text-xs text-black/40">Across India</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center">
              <svg className="w-8 h-8 stroke-black/60" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-sm tracking-wide mb-1">2-Year Warranty</p>
              <p className="text-xs text-black/40">Comprehensive coverage</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center">
              <svg className="w-8 h-8 stroke-black/60" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </div>
            <div>
              <p className="text-sm tracking-wide mb-1">30-Day Returns</p>
              <p className="text-xs text-black/40">No questions asked</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center">
              <svg className="w-8 h-8 stroke-black/60" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm tracking-wide mb-1">Expert Support</p>
              <p className="text-xs text-black/40">7 days a week</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
