import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="comenca" className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <svg viewBox="0 0 1000 1000" className="w-full h-full max-w-screen-xl animate-pulse">
          <path d="M-200,800 C100,600 400,900 1200,700" fill="none" stroke="hsl(var(--brand-green))" strokeWidth="60" strokeLinecap="round" style={{ filter: "blur(40px)" }} />
        </svg>
      </div>

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg md:text-xl text-sage/80 mb-8 md:mb-10 leading-relaxed">
          Era un dimarts al matí. La iaia no havia trucat.<br />
          Aquell moment no s'oblida.<br />
          Però tampoc ha de repetir-se.
        </p>

        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-6 leading-tight">
          Cuida les persones que estimes. En silenci. Amb dignitat.
        </h2>

        <p className="text-base md:text-lg text-sage/70 mb-10 md:mb-12 max-w-2xl mx-auto">
          El primer mes és sense cost. Instal·lació inclosa. Cancel·lació en un clic. El que no té preu és la tranquil·litat.
        </p>

        <button className="btn-hero-light text-base md:text-lg group">
          <span className="relative z-10">Comença ara — 149€ + 9,99€/mes</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-8 text-xs text-sage/50 font-medium tracking-wide px-4">
          Sense permanència · Sense càmeres · Sense que el teu familiar hagi de fer res
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
