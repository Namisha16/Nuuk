import { motion } from "motion/react";

export function SocialProof() {
  const logos = [
    "Forbes",
    "The Verge",
    "Architectural Digest",
    "GQ India",
    "Wired",
    "Dezeen",
  ];

  const awards = [
    {
      title: "Red Dot Award",
      year: "2025",
      category: "Product Design",
    },
    {
      title: "iF Design Award",
      year: "2025",
      category: "Excellence",
    },
    {
      title: "Good Design Award",
      year: "2024",
      category: "Innovation",
    },
  ];

  return (
    <section className="py-32 bg-white border-y border-black/5">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        {/* Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-center text-xs tracking-[0.3em] uppercase text-black/30 mb-12">
            Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl tracking-tight text-black/20 hover:text-black/40 transition-colors cursor-pointer font-serif italic"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-xs tracking-[0.3em] uppercase text-black/30 mb-12">
            Award Winning Design
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-8 rounded-2xl border border-black/5 hover:border-black/10 hover:bg-black/[0.01] transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h3 className="text-lg tracking-tight mb-1">{award.title}</h3>
                <p className="text-sm text-black/40 mb-1">{award.year}</p>
                <p className="text-xs text-black/30 tracking-wide">
                  {award.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
