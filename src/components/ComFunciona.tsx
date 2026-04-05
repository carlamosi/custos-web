import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Settings, BarChart3, ShieldCheck, Bell } from "lucide-react";
import { ReactNode } from "react";

const steps = [
  { icon: <Settings className="w-7 h-7 text-secondary" />, title: "Instal·lació", text: "Un professional instal·la el sensor a la canonada interior. Menys de vint minuts. Sense obres. Cost inclòs.", dark: false },
  { icon: <BarChart3 className="w-7 h-7 text-secondary" />, title: "Aprenentatge", text: "Durant dues setmanes, la IA aprèn la rutina de consum d'aquella persona concreta. No compara amb mitjanes.", dark: false },
  { icon: <ShieldCheck className="w-7 h-7 text-secondary" />, title: "Vigilància silenciosa", text: "Monitoratge completament autònom. La persona protegida no fa res ni ho sap. Viu igual que sempre.", dark: false },
  { icon: <Bell className="w-7 h-7 text-primary-foreground" />, title: "Alerta a l'app", text: "Si el patró s'altera de manera significativa, reps una alerta graduada a l'app. Tu values i decideixes.", dark: true },
];

const Step = ({ icon, title, text, dark, index }: { icon: ReactNode; title: string; text: string; dark: boolean; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center md:items-start text-center md:text-left"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
    >
      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-sm mb-6 z-10 relative ${dark ? "bg-primary shadow-md" : "bg-white border border-foreground/5"}`}>
        <span className={`absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-sage text-foreground text-xs font-medium rounded-full flex items-center justify-center border-2 ${dark ? "border-primary" : "border-white"}`}>
          {index + 1}
        </span>
        {icon}
      </div>
      <h3 className="text-lg font-medium tracking-tight mb-3">{title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">{text}</p>
    </motion.div>
  );
};

const ComFunciona = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="com-funciona" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">El Procés</span>
          <h2 className="text-3xl md:text-4xl heading-serif mb-6">
            Quatre passos. Vint minuts d'instal·lació. Tota la tranquil·litat.
          </h2>
        </motion.div>

        <div className="mt-16 md:mt-24 relative">
          <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 -z-10 overflow-hidden">
            <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-secondary to-transparent animate-flow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 relative">
            {steps.map((step, i) => (
              <Step key={i} icon={step.icon} title={step.title} text={step.text} dark={step.dark} index={i} />
            ))}
          </div>
        </div>



      </div>
    </section>
  );
};

export default ComFunciona;
