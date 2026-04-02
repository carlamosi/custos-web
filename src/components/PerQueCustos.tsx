import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Check, X, Minus } from "lucide-react";

const criteria = [
  "Funciona si la persona perd el coneixement",
  "Respecta totalment la privacitat",
  "No requereix cap acció del major",
  "IA personalitzada per a cada persona",
  "Cost mensual",
];

type CellValue = boolean | "partial" | string;

const competitors: { name: string; values: CellValue[] }[] = [
  { name: "Botó de pànic", values: [false, true, false, false, "25€"] },
  { name: "Càmeres", values: [true, false, true, false, "20€"] },
  { name: "Wearable", values: [false, true, false, false, "40€"] },
  { name: "Alexa", values: ["partial", false, true, false, "15€"] },
];

const custosValues: CellValue[] = [true, true, true, true, "9,99€"];

const CellIcon = ({ value }: { value: CellValue }) => {
  if (value === true) return <Check className="w-5 h-5 text-secondary mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-destructive/60 mx-auto" />;
  if (value === "partial") return <Minus className="w-5 h-5 text-foreground/40 mx-auto" />;
  return <span className="text-sm font-semibold">{value}</span>;
};

const PerQueCustos = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="per-que-custos" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="section-label">Per què Custos</span>
          <h2 className="text-4xl md:text-5xl heading-serif mb-6">
            Hem provat tot el que existeix. Res funcionava.
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
            Per això hem construït Custos. L'únic sistema que compleix tots cinc criteris alhora.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="rounded-2xl border border-foreground/10 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-sage/50">
                  <th className="text-left py-4 px-6 font-medium text-foreground/60 text-xs uppercase tracking-widest">Criteri</th>
                  {competitors.map((c) => (
                    <th key={c.name} className="py-4 px-4 font-medium text-foreground/60 text-center text-xs uppercase tracking-widest">{c.name}</th>
                  ))}
                  <th className="py-4 px-4 font-semibold text-secondary text-center text-xs uppercase tracking-widest bg-secondary/10 border-l-2 border-secondary/30">Custos</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c, i) => (
                  <tr key={c} className="border-t border-foreground/5 hover:bg-sage/20 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground/80">{c}</td>
                    {competitors.map((comp) => (
                      <td key={comp.name} className="py-4 px-4 text-center">
                        <CellIcon value={comp.values[i]} />
                      </td>
                    ))}
                    <td className="py-4 px-4 text-center bg-secondary/5 border-l-2 border-secondary/30">
                      <CellIcon value={custosValues[i]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden space-y-4"
        >
          {criteria.map((c, i) => (
            <div key={c} className="rounded-xl border border-foreground/10 p-5 bg-background shadow-sm">
              <h4 className="font-medium text-sm mb-4 text-foreground/80">{c}</h4>
              <div className="space-y-2">
                {competitors.map((comp) => (
                  <div key={comp.name} className="flex items-center justify-between text-sm">
                    <span className="text-foreground/50">{comp.name}</span>
                    <CellIcon value={comp.values[i]} />
                  </div>
                ))}
                <div className="flex items-center justify-between text-sm pt-2 border-t border-secondary/20 mt-2">
                  <span className="font-semibold text-secondary">Custos</span>
                  <CellIcon value={custosValues[i]} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 md:mt-14 rounded-2xl bg-sage/50 border border-secondary/20 p-8 text-center"
        >
          <p className="text-lg md:text-xl font-medium text-foreground/90">
            Custos és l'únic sistema que compleix <span className="text-secondary font-semibold">tots cinc criteris</span> alhora. Per <span className="text-secondary font-semibold">9,99€ al mes</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PerQueCustos;
