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
            <div className="relative w-full aspect-video rounded-4xl overflow-hidden bg-primary shadow-2xl border border-foreground/10">
              <iframe
                src="https://www.youtube.com/embed/6t_RZKTkMIk"
                title="La història de Custos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
