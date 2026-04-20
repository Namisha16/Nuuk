import { Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-12 mb-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold tracking-tight uppercase">HĀLO</h2>
          </div>
          
          <div className="flex flex-wrap gap-8 text-sm font-medium text-gray-300 mb-8 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Shop</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 HĀLO. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
