import { motion } from "motion/react";

export function PremiumCTA() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-[800px] mx-auto px-8 md:px-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">
          Get on our VIP waitlist
        </h2>
        <p className="text-gray-600 mb-8">
          Be the first to know about new products and exclusive offers.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
            required
          />
          <button 
            type="submit" 
            className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition-colors"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
