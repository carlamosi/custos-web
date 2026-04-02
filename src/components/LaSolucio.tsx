import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Droplets, Brain, Zap, ExternalLink, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

const pillars = [
  {
    icon: <Droplets className="w-9 h-9 text-secondary" />,
    title: "Invisible per disseny",
    text: "El sensor s'instal·la a la canonada interior. No es veu. No es nota. La persona que estimes viu exactament igual que sempre.",
  },
  {
    icon: <Brain className="w-9 h-9 text-secondary" />,
    title: "Intel·ligència personalitzada",
    text: "El model d'IA aprèn els seus patrons, no les mitjanes d'un estudi. La signatura hídrica de la teva mare és única i irrepetible.",
  },
  {
    icon: <Zap className="w-9 h-9 text-secondary" />,
    title: "Alerta en menys de 5 minuts",
    text: "Quan el sistema detecta una desviació significativa, t'envia una notificació graduada a l'app. Tu decideixes si truques o agafes el cotxe.",
  },
];

const Pillar = ({ icon, title, text, index }: { icon: ReactNode; title: string; text: string; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
    >
      <div className="mb-4 md:mb-6">{icon}</div>
      <h3 className="text-xl font-medium tracking-tight mb-3 md:mb-4">{title}</h3>
      <p className="text-base text-foreground/70 leading-relaxed">{text}</p>
    </motion.div>
  );
};

const LaSolucio = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="la-solucio" className="py-20 md:py-32 bg-sage/40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">La Solució</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl heading-serif mb-6 md:mb-8">
            Custos no vigila. Cuida.
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
            Hem construït el primer sistema que aprèn la rutina concreta de la teva mare i detecta si alguna cosa ha canviat. Sense cap càmera. Sense micròfons. Sense que ella hagi de fer absolutament res.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {pillars.map((p, i) => (
            <Pillar key={i} icon={p.icon} title={p.title} text={p.text} index={i} />
          ))}
        </div>

        {/* Live prototype dashboard */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <span className="section-label">Prototip en temps real</span>
            <h3 className="text-2xl md:text-3xl heading-serif mt-2">
              El nostre sensor, funcionant ara mateix
            </h3>
            <p className="text-base text-foreground/70 mt-3 max-w-2xl mx-auto">
              Aquesta és la dashboard real del nostre prototip de cabalímetre. Dades en temps real, directament del sensor.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-foreground/10 shadow-lg bg-background">
            <iframe
              src="https://custos-dashboard.vercel.app/"
              title="Custos Dashboard — Prototip en temps real"
              className="w-full h-[500px] md:h-[600px]"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaSolucio;
