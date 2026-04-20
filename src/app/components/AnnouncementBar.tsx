import { motion } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.4 }}
      className="relative bg-gradient-to-r from-[#FF0033] via-[#ff1a47] to-[#FF0033] text-white py-3 px-6 z-50"
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-center gap-4 relative">
        <motion.div
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-white"
        />
        <p className="text-sm md:text-base tracking-wide text-center">
          <span className="hidden sm:inline">🎉 </span>
          <strong>Limited Time Offer:</strong> Get ₹3,500 off + Free Premium
          Remote
          <span className="hidden md:inline"> — Ends in 48 hours</span>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
