export function TechSpecs() {
  const specs = [
    { label: "Dimensions", value: "32cm (W) × 85cm (H)" },
    { label: "Weight", value: "3.8 kg" },
    { label: "Power", value: "45W max consumption" },
    { label: "Noise Level", value: "<30dB (whisper quiet)" },
    { label: "Oscillation", value: "120° horizontal, 45° vertical" },
    { label: "Airflow Coverage", value: "Up to 450 sq ft" },
    { label: "App Control", value: "iOS & Android compatible" },
    { label: "Filtration", value: "HEPA 13, Active Carbon, UV-C" },
    { label: "Cable Length", value: "2m fabric-braided cord" },
    { label: "Warranty", value: "2-year comprehensive" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-8 md:px-16">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
          Technical Specifications
        </h2>
        
        <div className="space-y-4">
          {specs.map((spec, i) => (
            <div key={i} className="flex justify-between py-4 border-b border-gray-100 last:border-0">
              <span className="text-gray-500">{spec.label}</span>
              <span className="font-medium">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
