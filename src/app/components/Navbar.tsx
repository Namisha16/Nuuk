import { ShoppingBag, Search, Menu } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl border-b border-black/5 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <h1 className="text-xl md:text-2xl tracking-[0.1em] font-extrabold text-black">NUUK</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {["Products", "Technology", "About", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium tracking-wide text-black hover:opacity-70 transition-opacity"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button
              className="p-2 hover:bg-black/5 rounded-full transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-red rounded-full" />
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
