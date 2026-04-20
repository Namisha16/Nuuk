import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export function Reviews() {
  const reviews = [
    {
      name: "Priya K.",
      rating: 5,
      text: "Actually silent. I run it on speed 6 while sleeping and can't hear a thing. Game changer for Mumbai summers.",
      location: "Mumbai",
      verified: true,
    },
    {
      name: "Arjun M.",
      rating: 5,
      text: "The app scheduling is brilliant. Turns on 10 minutes before I'm home. Premium build quality, worth every rupee.",
      location: "Bengaluru",
      verified: true,
    },
    {
      name: "Neha S.",
      rating: 5,
      text: "Looks like a piece of art. Guests always ask about it. The 3D airflow actually works—whole room gets even cooling.",
      location: "Delhi",
      verified: true,
    },
    {
      name: "Rohan D.",
      rating: 5,
      text: "Replaced my noisy pedestal fan. HĀLO is in a different league. The mood light is a nice touch for late-night work.",
      location: "Pune",
      verified: true,
    },
  ];

  return (
    <section className="py-48 bg-gradient-to-b from-white via-[#fafafa] to-white relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] leading-[1.1] mb-10 font-bold text-black">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#FF0033] text-[#FF0033]"
                />
              ))}
            </div>
            <span className="text-black/35 tracking-wide">4.9 / 5</span>
            <span className="w-1 h-1 rounded-full bg-black/15" />
            <span className="text-black/35 tracking-wide">2,347 reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2rem] p-10 lg:p-12 border border-black/[0.06] hover:border-black/[0.12] transition-all duration-500 hover:shadow-2xl hover:shadow-black/[0.03]"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500">
                <Quote className="w-16 h-16 fill-black" />
              </div>

              <div className="relative space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-lg tracking-tight">{review.name}</p>
                      {review.verified && (
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-green-50 border border-green-200 rounded-full">
                          <svg className="w-3 h-3 fill-green-600" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span className="text-[10px] text-green-700 tracking-wide uppercase">Verified</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-black/30 tracking-wide">{review.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FF0033] text-[#FF0033]"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-black/60 leading-[1.75] text-base lg:text-lg">
                  "{review.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all reviews link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-black/[0.03] hover:bg-black/[0.06] rounded-full transition-all duration-300">
            <span className="text-sm tracking-wide">View all 2,347 reviews</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
