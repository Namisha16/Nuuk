import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SmartStory } from "./components/SmartStory";
import { AirflowVisualization } from "./components/AirflowVisualization";
import { ProductShowcase } from "./components/ProductShowcase";
import { TechSpecs } from "./components/TechSpecs";
import { ShopBanner } from "./components/ShopBanner";
import { ComparisonTable } from "./components/ComparisonTable";
import { Lifestyle } from "./components/Lifestyle";
import { PremiumCTA } from "./components/PremiumCTA";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <SmartStory />
      <AirflowVisualization />
      <ProductShowcase />
      <TechSpecs />
      <ShopBanner />
      <ComparisonTable />
      <Lifestyle />
      <PremiumCTA />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}