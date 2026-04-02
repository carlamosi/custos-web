import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ElProblema from "@/components/ElProblema";
import LaSolucio from "@/components/LaSolucio";
import PerQueCustos from "@/components/PerQueCustos";
import AppExperience from "@/components/AppExperience";
import ComFunciona from "@/components/ComFunciona";
import Impacte from "@/components/Impacte";
import ProductePreus from "@/components/ProductePreus";
import Historia from "@/components/Historia";
import Equip from "@/components/Equip";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative overflow-x-hidden selection:bg-secondary/20 selection:text-foreground">
    {/* Noise overlay */}
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] noise-overlay" />
    
    <Navbar />
    <Hero />
    <ElProblema />
    <LaSolucio />
    <PerQueCustos />
    <AppExperience />
    <ComFunciona />
    <Impacte />
    <ProductePreus />
    <Historia />
    <Equip />
    <FAQ />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
