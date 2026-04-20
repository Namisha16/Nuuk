import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 mb-20">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight">NUUK</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Reinventing home comfort through silent technology and minimalist design. Based in India.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Shop</h3>
            <ul className="space-y-4 text-sm font-medium">
              {["HĀLO v2", "HĀLO v1", "LĪNKD Mini", "Accessories"].map(link => (
                <li key={link}><a href="#" className="text-gray-300 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Support</h3>
            <ul className="space-y-4 text-sm font-medium">
              {["Help Center", "Order Status", "Warranty Info", "Return Policy"].map(link => (
                <li key={link}><a href="#" className="text-gray-300 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Company</h3>
            <ul className="space-y-4 text-sm font-medium">
              {["Our Story", "Technology", "Sustainability", "Careers"].map(link => (
                <li key={link}><a href="#" className="text-gray-300 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-600">
          <p>© 2024 NUUK TECHNOLOGIES PVT LTD.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
