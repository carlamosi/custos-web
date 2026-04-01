import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Play } from "lucide-react";

const Historia = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="historia" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">La Nostra Història</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl heading-serif mb-6">
              Neix d'una necessitat real. Neix de casa.
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Custos no va néixer en un laboratori. Va néixer després d'un ensurt familiar que ens va fer adonar-nos que la tecnologia actual no estava resolent el problema real: la por constant de no saber si tot està bé.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Mireu aquest breu vídeo sobre com vam dissenyar una solució invisible que prioritza la dignitat i la privacitat per sobre de tot.
            </p>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full aspect-video rounded-4xl overflow-hidden bg-primary shadow-2xl group cursor-pointer border border-foreground/10">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80 z-10" />
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                alt="Custos Story Video Thumbnail"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out relative z-0"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-secondary ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
