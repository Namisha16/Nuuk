import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 900);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop - Side sticky */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{
          x: isVisible ? 0 : 120,
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-2xl border border-black/[0.08] rounded-[2rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] p-10 w-96"
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-black/25">
              HĀLO v2 LĪNKD
            </p>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <p className="text-4xl tracking-[-0.02em]">₹13,499</p>
                <span className="text-sm text-black/25 line-through">₹16,999</span>
              </div>
              <p className="text-sm text-black/35 tracking-wide">
                or ₹1,125/mo · 0% interest
              </p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="space-y-3">
            <button className="group relative w-full bg-[#FF0033] text-white py-4 rounded-full transition-all hover:bg-[#e6002e] hover:shadow-2xl hover:shadow-[#FF0033]/30 active:scale-[0.97] overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </button>
            <button className="w-full bg-black text-white py-4 rounded-full hover:bg-black/80 transition-all hover:shadow-2xl hover:shadow-black/20 active:scale-[0.97]">
              Buy Now
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-black/30 pt-2">
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>4.9/5</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-black/15" />
            <span>Free shipping</span>
          </div>
        </div>
      </motion.div>

      {/* Mobile - Bottom sticky */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : 120,
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-2xl border-t border-black/[0.08] shadow-[0_-10px_60px_-15px_rgba(0,0,0,0.15)]"
      >
        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs text-black/30 tracking-wide mb-1">HĀLO v2</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl tracking-tight">₹13,499</p>
                <span className="text-xs text-black/30">EMI available</span>
              </div>
            </div>
            <div className="text-right text-xs text-black/30">
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 fill-[#FF0033]" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-black/60">4.9/5</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-white border-2 border-black text-black py-4 rounded-full hover:bg-black hover:text-white transition-all active:scale-[0.97] flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Add</span>
            </button>
            <button className="flex-1 bg-[#FF0033] text-white py-4 rounded-full hover:bg-[#e6002e] transition-all active:scale-[0.97]">
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
