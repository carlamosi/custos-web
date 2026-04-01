import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { AlertTriangle, Camera, Watch } from "lucide-react";

const cards = [
  {
    icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
    title: "El botó de pànic no serveix si perd el coneixement",
    text: "Els accidents més greus impossibiliten qualsevol acció voluntària. El botó no es prem sol.",
  },
  {
    icon: <Camera className="w-6 h-6 text-foreground/40" />,
    title: "Les càmeres vulneren la dignitat de la seva llar",
    text: "El 78% de les famílies rebutja instal·lar càmeres. Setanta anys construint un espai propi no es poden vigilar com un magatzem.",
  },
  {
    icon: <Watch className="w-6 h-6 text-foreground/40" />,
    title: "La polsera acaba al calaix",
    text: "Un wearable que no es porta no protegeix ningú. I trucar cada dia és un pedaç que no tapa la ferida: l'angoixa continua.",
  },
];

const ElProblema = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="el-problema" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">El Problema</span>
          <p className="text-2xl md:text-3xl font-serif font-medium tracking-tight max-w-3xl leading-snug">
            No és por irracional. És que no existeix cap manera fiable de saber si la persona que estimes s'ha llevat aquest matí. I les solucions que existeixen ens han fallat a totes.
          </p>
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const { ref: cRef, isVisible: cVis } = useScrollReveal();
            return (
              <motion.div
                key={i}
                ref={cRef}
                className="card-custos"
                initial={{ opacity: 0, y: 30 }}
                animate={cVis ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-3">{card.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ElProblema;
