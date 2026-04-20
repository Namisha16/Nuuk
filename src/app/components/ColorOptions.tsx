import { motion } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";

export function ColorOptions() {
  const [selectedColor, setSelectedColor] = useState("black");

  const colors = [
    {
      id: "black",
      name: "Midnight Black",
      hex: "#1a1a1a",
      image: "https://cdn.shopify.com/s/files/1/0582/3971/3322/files/4_e3e45ecb-dafe-4d03-abd1-3d5443903ff6.jpg?v=1757781659",
    },
    {
      id: "white",
      name: "Arctic White",
      hex: "#f5f5f5",
      image: "https://cdn.shopify.com/s/files/1/0582/3971/3322/files/2_20427732-4406-476e-8ccd-1209cec482c0.jpg?v=1757781659",
    },
    {
      id: "silver",
      name: "Brushed Silver",
      hex: "#c0c0c0",
      image: "https://cdn.shopify.com/s/files/1/0582/3971/3322/files/3_c3404904-4270-4210-9cff-546720b19e58.jpg?v=1757781659",
    },
  ];

  return (
    <section className="py-48 bg-gradient-to-b from-white via-[#fafafa] to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-square">
              {colors.map((color) => (
                <motion.div
                  key={color.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: selectedColor === color.id ? 1 : 0,
                    scale: selectedColor === color.id ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-[3rem] flex items-center justify-center border border-black/5 overflow-hidden">
                    <img
                      src={color.image}
                      alt={color.name}
                      className="w-4/5 h-4/5 object-contain drop-shadow-2xl mix-blend-multiply"
                    />
                  </div>
                </motion.div>
              ))}

              {/* Floating color badge */}
              <motion.div
                key={selectedColor}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-black/5"
              >
                <p className="text-sm tracking-wide">
                  {colors.find((c) => c.id === selectedColor)?.name}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Color Selection */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] leading-[1.05]">
                Choose your finish
              </h2>
              <p className="text-lg text-black/40 max-w-lg tracking-wide leading-relaxed">
                HĀLO is available in three premium finishes. Each one designed to
                complement your interior aesthetic.
              </p>
            </div>

            <div className="space-y-4">
              {colors.map((color, index) => (
                <motion.button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group w-full flex items-center gap-6 p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedColor === color.id
                      ? "border-black bg-black/[0.02] shadow-lg"
                      : "border-black/10 hover:border-black/20 hover:bg-black/[0.01]"
                  }`}
                >
                  {/* Color Swatch */}
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-full border-2 border-black/10 shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                    {selectedColor === color.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <Check className="w-5 h-5 text-black" />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Color Info */}
                  <div className="flex-1 text-left">
                    <p
                      className={`text-lg tracking-tight transition-colors ${
                        selectedColor === color.id
                          ? "text-black"
                          : "text-black/60 group-hover:text-black/80"
                      }`}
                    >
                      {color.name}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <svg
                    className={`w-5 h-5 transition-all ${
                      selectedColor === color.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-sm text-black/30 tracking-wide">
                All finishes available for immediate shipping · Same premium quality
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
