import { ShoppingBag, User, Menu } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl tracking-[0.2em] font-bold text-[#FF0033]">HĀLO</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a
              href="#"
              className="text-sm font-medium tracking-wide text-black hover:text-[#FF0033] transition-colors"
            >
              Products
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-wide text-black hover:text-[#FF0033] transition-colors"
            >
              Tech
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-wide text-black hover:text-[#FF0033] transition-colors"
            >
              Support
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-wide text-black hover:text-[#FF0033] transition-colors"
            >
              Reviews
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button
              className="hidden md:block p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="User account"
            >
              <User className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button
              className="p-2 hover:bg-black/5 rounded-full transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF0033] rounded-full" />
            </button>
            <button
              className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
