import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { AirflowVisualization } from "./components/AirflowVisualization";
import { FeaturesStrip } from "./components/FeaturesStrip";
import { ProductShowcase } from "./components/ProductShowcase";
import { TechSpecs } from "./components/TechSpecs";
import { Lifestyle } from "./components/Lifestyle";
import { ComparisonTable } from "./components/ComparisonTable";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <AirflowVisualization />
        <FeaturesStrip />
        <ProductShowcase />
        <TechSpecs />
        <Lifestyle />
        <ComparisonTable />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}