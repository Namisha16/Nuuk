export function ShopBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 py-16 flex justify-center items-center relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full flex flex-col md:flex-row items-center justify-between z-10">
        <div className="text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            HĀLO v2 LĪNKD
          </h2>
          <p className="text-black/80 text-xl font-medium">₹13,499</p>
        </div>
        
        <div className="flex-1 flex justify-center max-h-[300px] relative -my-16 pointer-events-none">
          <img 
            src="https://cdn.shopify.com/s/files/1/0582/3971/3322/files/5_bf7011cb-7029-447e-8d0d-d57bacd1be58.jpg?v=1757781659" 
            alt="HĀLO Fan" 
            className="h-[400px] w-auto object-contain scale-125 md:scale-150 transform -translate-y-12 mix-blend-multiply"
          />
        </div>

        <div className="mt-8 md:mt-0 z-10">
          <button className="bg-black text-white px-12 py-4 rounded-full font-medium text-lg hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
