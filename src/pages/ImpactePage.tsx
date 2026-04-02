import Navbar from "@/components/Navbar";
import Impacte from "@/components/Impacte";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const ImpactePage = () => (
  <div className="relative overflow-x-hidden selection:bg-secondary/20 selection:text-foreground">
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] noise-overlay" />
    <Navbar />
    <div className="pt-20" />
    <Impacte />
    <FinalCTA />
    <Footer />
  </div>
);

export default ImpactePage;
