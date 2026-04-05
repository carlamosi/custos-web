import Navbar from "@/components/Navbar";
import AppExperience from "@/components/AppExperience";
import NotificationMockup from "@/components/NotificationMockup";
import PerQueCustos from "@/components/PerQueCustos";
import ProductePreus from "@/components/ProductePreus";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Producte = () => (
  <div className="relative overflow-x-hidden selection:bg-secondary/20 selection:text-foreground">
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] noise-overlay" />
    <Navbar />
    <div className="pt-20" />
    <AppExperience />
    <section className="py-16 md:py-24 bg-sage/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <NotificationMockup />
      </div>
    </section>
    <PerQueCustos />
    <ProductePreus />
    <FAQ />
    <Footer />
  </div>
);

export default Producte;
