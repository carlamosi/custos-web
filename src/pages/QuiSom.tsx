import Navbar from "@/components/Navbar";
import Historia from "@/components/Historia";
import Equip from "@/components/Equip";
import Footer from "@/components/Footer";

const QuiSom = () => (
  <div className="relative overflow-x-hidden selection:bg-secondary/20 selection:text-foreground">
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] noise-overlay" />
    <Navbar />
    <div className="pt-20" />
    <Historia />
    <Equip />
    <Footer />
  </div>
);

export default QuiSom;
