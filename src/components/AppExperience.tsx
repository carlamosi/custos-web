import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle2, AlertTriangle, Coffee, Bath, Phone, Settings } from "lucide-react";

const AppExperience = () => {
  const [anomaly, setAnomaly] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experiencia-app" className="py-20 md:py-32 bg-primary relative overflow-hidden text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            ref={ref}
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase block mb-4">L'App Custos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6 leading-tight">
              La teva tranquil·litat, <br className="hidden md:block" />a la butxaca.
            </h2>
            <p className="text-lg text-sage/80 mb-10 leading-relaxed">
              La nostra aplicació processa les dades recollides de l'aigua en temps real. Visualitza l'activitat de la llar de manera clara i rep alertes instantànies si el patró habitual es trenca.
            </p>

            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium tracking-tight">Mode de l'App</span>
                <button
                  onClick={() => setAnomaly(!anomaly)}
                  className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ${
                    anomaly ? "bg-destructive" : "bg-secondary"
                  }`}
                  role="switch"
                  aria-checked={anomaly}
                  aria-label="Toggle app state"
                >
                  <span
                    className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition duration-300 ${
                      anomaly ? "translate-x-7" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className={`font-medium transition-colors ${!anomaly ? "text-secondary" : "text-primary-foreground/40"}`}>
                  Tot en ordre
                </span>
                <span className="text-primary-foreground/20">/</span>
                <span className={`font-medium transition-colors ${anomaly ? "text-destructive" : "text-primary-foreground/40"}`}>
                  Anomalia detectada
                </span>
              </div>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-[300px] h-[600px] bg-background rounded-[3rem] border-[12px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col shrink-0 text-foreground">
              {/* Status bar */}
              <div className="h-10 w-full flex justify-between items-center px-6 pt-2 text-[10px] font-medium absolute top-0 z-20">
                <span>09:41</span>
                <div className="flex gap-1.5 items-center text-xs">📶 📡 🔋</div>
              </div>

              <div className="flex-grow pt-14 pb-6 px-5 flex flex-col relative z-10 w-full h-full bg-background">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-serif font-medium tracking-tighter text-xl">CUSTOS</h3>
                  <Settings className="w-5 h-5 text-foreground/60" />
                </div>

                <p className="text-xs font-medium uppercase tracking-widest text-foreground/50 mb-2">Monitoritzant</p>
                <h4 className="text-xl font-medium tracking-tight mb-6">Casa de la iaia</h4>

                {/* Normal state */}
                <div className={`flex flex-col transition-opacity duration-500 ${anomaly ? "opacity-0 absolute pointer-events-none" : "opacity-100"}`}>
                  <div className="bg-gradient-to-br from-secondary to-emerald-700 rounded-3xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-medium">Tot en ordre</span>
                    </div>
                    <p className="text-sm text-white/80 mt-4">La rutina s'està complint segons el patró habitual.</p>
                    <p className="text-xs text-white/60 mt-2">Última detecció: fa 15 min.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-foreground/5 mb-6">
                    <h5 className="text-xs font-medium text-foreground/60 mb-4">Activitat d'avui</h5>
                    <div className="h-24 flex items-end justify-between gap-1">
                      {[10, 5, 60, 20, 30, 40, 10, 5, 15].map((h, i) => (
                        <div key={i} className={`w-full rounded-t-sm ${[2, 5].includes(i) ? "bg-secondary" : i === 3 ? "bg-secondary/40" : "bg-sage"}`} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[9px] text-foreground/40 font-medium">
                      <span>06:00</span><span>09:00</span><span>Ara</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-medium text-foreground/60 mb-3">Últims esdeveniments</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <Coffee className="w-4 h-4 text-secondary" />
                          <span className="font-medium">Aixeta cuina</span>
                        </div>
                        <span className="text-xs text-foreground/50">09:26</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <Bath className="w-4 h-4 text-secondary" />
                          <span className="font-medium">Dutxa principal</span>
                        </div>
                        <span className="text-xs text-foreground/50">08:15</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Anomaly state */}
                <div className={`flex flex-col h-full transition-opacity duration-500 ${anomaly ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
                  <div className="bg-gradient-to-br from-destructive to-red-700 rounded-3xl p-6 text-white shadow-[0_10px_25px_-5px_rgba(229,62,62,0.4)] mb-6 animate-pulse">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <span className="font-medium">Alerta de Patró</span>
                    </div>
                    <p className="text-sm text-white/90 mt-4 leading-snug">S'esperava ús d'aigua entre les 08:00 i les 09:00. Sense activitat detectada.</p>
                    <p className="text-xs text-white/70 mt-3 font-medium">Tractant-se de rutina de matí, recomanem verificar.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-foreground/5 mb-6">
                    <h5 className="text-xs font-medium text-foreground/60 mb-4">Activitat d'avui</h5>
                    <div className="h-24 flex items-end justify-between gap-1">
                      {[10, 5, 60, 20, 30, 5, 5, 5, 5].map((h, i) => (
                        <div
                          key={i}
                          className={`w-full rounded-t-sm ${
                            i >= 2 && i <= 4
                              ? "border border-dashed border-destructive bg-destructive/5"
                              : i <= 1
                              ? "bg-sage"
                              : "bg-background"
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[9px] text-foreground/40 font-medium">
                      <span>06:00</span><span className="text-destructive font-medium">Patró absent</span><span>Ara</span>
                    </div>
                  </div>

                  <div className="mt-auto space-y-2">
                    <button className="w-full bg-primary text-primary-foreground rounded-xl py-3 text-sm font-medium flex justify-center items-center gap-2">
                      <Phone className="w-4 h-4" /> Trucar a la iaia
                    </button>
                    <button className="w-full bg-white border border-foreground/10 text-foreground/70 rounded-xl py-3 text-sm font-medium">
                      Falsa alarma
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppExperience;
