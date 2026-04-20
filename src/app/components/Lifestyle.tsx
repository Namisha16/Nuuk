import { motion } from "motion/react";

export function Lifestyle() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-black">
          Inspired living
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="aspect-square rounded-2xl overflow-hidden"
          >
            <img 
              src="https://cdn.shopify.com/s/files/1/0582/3971/3322/files/1_31e6fc06-913f-401e-a7a7-85ec588a5a4e.jpg?v=1757781659" 
              alt="HĀLO in living room" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-square rounded-2xl overflow-hidden"
          >
            <img 
              src="https://cdn.shopify.com/s/files/1/0582/3971/3322/files/2_097a4258-10bb-453c-a604-f99e42bdbc10.jpg?v=1757781659" 
              alt="HĀLO in bedroom" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
