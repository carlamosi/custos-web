import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Package, CreditCard, Check, Wifi, Smartphone, ShieldCheck } from "lucide-react";

const ProductePreus = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="producte" className="py-20 md:py-32 bg-sage/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="section-label">El Producte</span>
          <h2 className="text-4xl md:text-5xl heading-serif mb-6">
            Senzill com ha de ser. Just com ha de costar.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Kit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl bg-background border border-foreground/10 p-8 md:p-10 shadow-sm flex flex-col"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Package className="w-7 h-7" />
            </div>
            <span className="text-xs font-medium uppercase tracking-widest text-foreground/50 mb-2">Pagament únic</span>
            <h3 className="text-2xl heading-serif mb-1">Kit Custos</h3>
            <p className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-primary mb-6">149€</p>

            <ul className="space-y-3 flex-1">
              {[
                "Sensor de flux YF-S201",
                "Hub NodeMCU ESP8266 amb WiFi",
                "Instal·lació professional (fontaner inclòs)",
                "Configuració inicial completa",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/70">
                  <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs text-foreground/40 italic text-center">→ La màquina de cafè</p>
          </motion.div>

          {/* Subscripció */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-10 shadow-lg flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest bg-secondary/20 text-sage px-3 py-1 rounded-full">
              Recomanat
            </div>
            <div className="w-14 h-14 rounded-xl bg-sage/10 flex items-center justify-center text-sage mb-6">
              <CreditCard className="w-7 h-7" />
            </div>
            <span className="text-xs font-medium uppercase tracking-widest text-sage/50 mb-2">Mensual</span>
            <h3 className="text-2xl font-serif font-medium tracking-tight mb-1">Subscripció Custos</h3>
            <p className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-1">9,99€</p>
            <p className="text-sm text-sage/50 mb-6">/mes</p>

            <ul className="space-y-3 flex-1">
              {[
                "App mòbil iOS + Android",
                "Model d'IA actiu i personalitzat",
                "Alertes en temps real (avís · alerta · emergència)",
                "Suport prioritari",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-sage/70">
                  <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs text-sage/40 italic text-center">→ Les càpsules que mai s'acaben</p>
          </motion.div>
        </div>

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 md:mt-14 text-center"
        >
          <p className="text-base text-foreground/70 max-w-2xl mx-auto mb-8">
            Sense permanència. Sense lletra petita. Si en algun moment vols cancel·lar, ho fas en un clic.
            <span className="block mt-1 text-foreground/50 text-sm italic">Però sabem que no voldràs.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-foreground/40 font-medium">
            <span className="flex items-center gap-1.5"><Wifi className="w-3.5 h-3.5" /> WiFi domèstic</span>
            <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5" /> iOS 14+ / Android 10+</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Compliment GDPR</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductePreus;
