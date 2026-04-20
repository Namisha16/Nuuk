export function TechSpecs() {
  const specs = [
    { label: "Dimensions", value: "32cm (W) × 85cm (H)" },
    { label: "Weight", value: "3.8 kg" },
    { label: "Power", value: "45W max consumption" },
    { label: "Noise Level", value: "<30dB (Library Quiet)" },
    { label: "Oscillation", value: "120° H • 90° V" },
    { label: "Airflow Coverage", value: "Up to 450 sq ft" },
    { label: "App Control", value: "iOS & Android" },
    { label: "Cable Length", value: "2m Fabric Braided" },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-20 text-black">
          Tech Specs
        </h2>
        
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-2 border-t border-black/10">
          {specs.map((spec, i) => (
            <div key={i} className="flex justify-between items-center py-6 border-b border-black/5">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400">{spec.label}</span>
              <span className="text-base font-bold text-black">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
