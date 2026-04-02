import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Heart, Shield, Building2 } from "lucide-react";
import { ReactNode } from "react";

const impacts = [
  {
    icon: <Heart className="w-8 h-8" />,
    label: "Impacte personal",
    title: "Per a les famílies",
    text: "Elimineu l'ansietat anticipatòria dels diumenges al vespre. Deixeu de trucar cada dia per verificar. Podeu viure la vostra vida amb la certesa que si alguna cosa passa, ho sabreu en menys de cinc minuts.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    label: "Impacte per al major",
    title: "Dignitat fins al final",
    text: "La persona que estimeu continua vivint a casa seva, amb total llibertat, sense saber que és protegida. Cap càmera. Cap dispositiu al damunt. Cap recordatori que ja no és plenament autònoma. Això és respecte real.",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    label: "Impacte social",
    title: "Envelliment actiu",
    text: "Cada mes que una persona gran pot quedar-se a casa seva en comptes d'anar a una residència representa 2.000–3.500€ menys de cost mensual per a la família i el sistema públic. I mesos addicionals de vida independent amb dignitat.",
  },
];

const ImpactCard = ({ impact, index }: { impact: (typeof impacts)[number]; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-2xl bg-sage/40 border border-foreground/5 p-8 md:p-10"
    >
      <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary mb-6">
        {impact.icon}
      </div>
      <span className="text-xs font-medium uppercase tracking-widest text-secondary mb-2 block">{impact.label}</span>
      <h3 className="text-2xl heading-serif mb-4">{impact.title}</h3>
      <p className="text-base text-foreground/70 leading-relaxed">{impact.text}</p>
    </motion.div>
  );
};

const ods = [
  { num: 3, label: "Salut" },
  { num: 10, label: "Desigualtats" },
  { num: 11, label: "Ciutats Inclusives" },
];

const Impacte = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="impacte" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <span className="section-label">Impacte</span>
          <h2 className="text-4xl md:text-5xl heading-serif mb-6">
            Una alerta a temps no és una notificació.
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed">
            És la diferència entre la recuperació total i el dany irreversible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {impacts.map((impact, i) => (
            <ImpactCard key={i} impact={impact} index={i} />
          ))}
        </div>

        {/* ODS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 md:mt-20 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-foreground/40 mr-2">Alineat amb els ODS:</span>
          {ods.map((o) => (
            <span
              key={o.num}
              className="text-xs font-semibold px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
            >
              ODS {o.num} — {o.label}
            </span>
          ))}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-16 rounded-2xl bg-primary text-primary-foreground p-8 md:p-10"
        >
          <p className="text-center text-sm font-medium uppercase tracking-widest text-sage/50 mb-6">De les 47 famílies enquestades</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {[
              { stat: "94%", text: "havia viscut la por de no saber" },
              { stat: "88%", text: "no coneixia cap solució sense càmeres" },
              { stat: "71%", text: "pagaria per una solució real" },
            ].map((s) => (
              <div key={s.stat}>
                <p className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-2">{s.stat}</p>
                <p className="text-sm text-sage/60">{s.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impacte;
