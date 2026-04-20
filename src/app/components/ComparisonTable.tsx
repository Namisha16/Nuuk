import { Check } from "lucide-react";

export function ComparisonTable() {
  const features = [
    { name: "Smart App Control", v2: true, v1: false },
    { name: "Oscillation", v2: "120° H / 45° V", v1: "90° H" },
    { name: "Noise Level", v2: "< 30dB", v1: "< 45dB" },
    { name: "Filtration", v2: "HEPA 13 + Carbon", v1: "Standard" },
    { name: "Speeds", v2: "12 Levels", v1: "3 Levels" },
    { name: "Timer", v2: "Weekly Schedule", v1: "8 Hours" },
  ];

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-[1000px] mx-auto px-8 md:px-16">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-black">
          Compare HĀLO
        </h2>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="py-6 px-6 font-semibold text-gray-500 text-sm uppercase tracking-wider w-2/5">Features</th>
                <th className="py-6 px-6 font-bold text-black text-center w-3/10">v2 LĪNKD</th>
                <th className="py-6 px-6 font-medium text-gray-400 text-center w-3/10">v1 Original</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {features.map((feature, idx) => (
                <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                  <td className="py-5 px-6 text-gray-700 font-medium">{feature.name}</td>
                  <td className="py-5 px-6 text-center">
                    {typeof feature.v2 === "boolean" ? (
                      feature.v2 ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">-</span>
                    ) : (
                      <span className="text-black font-semibold">{feature.v2}</span>
                    )}
                  </td>
                  <td className="py-5 px-6 text-center">
                    {typeof feature.v1 === "boolean" ? (
                      feature.v1 ? <Check className="w-5 h-5 text-gray-400 mx-auto" /> : <span className="text-gray-300">-</span>
                    ) : (
                      <span className="text-gray-500">{feature.v1}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
