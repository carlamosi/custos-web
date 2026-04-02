import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowLeft, Wrench, Cpu, Wifi, BarChart3, Code, TestTube, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo_color.svg";
import logoFull from "@/assets/nombre-completo.svg";

const steps = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Selecció del sensor",
    subtitle: "Pas 1 — Hardware",
    description:
      "Vam triar el sensor de flux d'aigua YF-S201 per la seva fiabilitat, cost accessible i compatibilitat amb microcontroladors. Mesura el cabal amb un rotor intern que genera polsos proporcionals al flux.",
    details: ["Sensor YF-S201 (hall effect)", "Rang: 1–30 L/min", "Precisió: ±10%", "Alimentació: 5V DC"],
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Muntatge del hardware",
    subtitle: "Pas 2 — Electrònica",
    description:
      "Vam connectar el sensor al microcontrolador NodeMCU ESP8266. La soldadura dels pins, la connexió dels cables i el muntatge en una caixa estanca van ser els primers passos físics del prototip.",
    details: ["NodeMCU ESP8266 WiFi", "Breadboard + cables jumper", "Resistència pull-up 10kΩ", "Caixa estanca IP65"],
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Programació del firmware",
    subtitle: "Pas 3 — Software embegut",
    description:
      "Vam programar el ESP8266 amb Arduino IDE per llegir els polsos del sensor, calcular el cabal en temps real i enviar les dades via WiFi a la nostra base de dades al núvol.",
    details: ["Arduino IDE + C++", "Interrupció per comptar polsos", "HTTP POST cada 5 segons", "OTA updates remots"],
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Connexió al núvol",
    subtitle: "Pas 4 — Backend",
    description:
      "Les dades del sensor es transmeten en temps real a una base de dades Supabase. Cada lectura inclou timestamp, cabal instantani i volum acumulat, permetent l'anàlisi històrica de patrons.",
    details: ["Supabase (PostgreSQL)", "API REST segura", "Timestamps UTC", "Retenció de dades il·limitada"],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Dashboard en temps real",
    subtitle: "Pas 5 — Visualització",
    description:
      "Vam construir una dashboard web amb Next.js i Recharts que mostra les dades del sensor en temps real: gràfics de cabal, consum acumulat, i indicadors d'estat del sistema.",
    details: ["Next.js + React", "Recharts per gràfics", "Actualització en temps real", "Responsive design"],
  },
  {
    icon: <TestTube className="w-8 h-8" />,
    title: "Calibratge i proves",
    subtitle: "Pas 6 — Validació",
    description:
      "Vam calibrar el sensor amb volums coneguts d'aigua i vam fer proves de fiabilitat durant setmanes. Vam ajustar els algoritmes de detecció per minimitzar falsos positius i negatius.",
    details: ["Calibratge amb 1L, 5L, 10L", "Proves de 14 dies continus", "Precisió final >95%", "Test de latència <5s"],
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Model d'IA per detecció d'anomalies",
    subtitle: "Pas 7 — Intel·ligència artificial",
    description:
      "Finalment, vam implementar el model de detecció d'anomalies basat en PCA i k-NN que aprèn la rutina de consum d'aigua i detecta desviacions significatives, generant alertes graduades.",
    details: ["PCA + k-NN", "Aprenentatge de 14 dies", "3 nivells d'alerta", "Personalització per llar"],
  },
];

const StepCard = ({ step, index }: { step: (typeof steps)[number]; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute left-1/2 -translate-x-px top-full w-0.5 h-16 bg-gradient-to-b from-secondary/40 to-transparent" />
      )}

      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}>
        {/* Photo placeholder */}
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/3] rounded-2xl bg-sage/60 border border-foreground/10 flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 text-secondary">
                {step.icon}
              </div>
              <p className="text-sm text-foreground/50 font-medium">Foto del procés</p>
              <p className="text-xs text-foreground/30 mt-1">Puja la imatge real d'aquest pas</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <span className="text-xs font-medium uppercase tracking-widest text-secondary mb-2 block">
            {step.subtitle}
          </span>
          <h3 className="text-2xl md:text-3xl heading-serif mb-4">{step.title}</h3>
          <p className="text-base text-foreground/70 leading-relaxed mb-6">{step.description}</p>
          <div className="flex flex-wrap gap-2">
            {step.details.map((d, i) => (
              <span
                key={i}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-sage/80 text-foreground/70 border border-foreground/5"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ComHoHemFet = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="relative overflow-x-hidden selection:bg-secondary/20 selection:text-foreground bg-background min-h-screen">
      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] noise-overlay" />

      {/* Nav */}
      <nav className="sticky top-0 z-40 py-4 backdrop-blur-xl bg-background/90 border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logoIcon} alt="Custos" className="h-8 w-8" />
            <img src={logoFull} alt="Custos" className="h-5 hidden sm:block" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna a l'inici
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-sage/30">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto px-6 lg:px-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Del laboratori a casa teva</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl heading-serif mb-6 mt-3">
            Com hem construït el prototip de Custos
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Pas a pas, des de la idea fins al sensor funcionant. Aquesta és la història tècnica darrere del nostre
            sistema de monitorització d'aigua.
          </p>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-16 md:space-y-24">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* CTA to dashboard */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl heading-serif mb-6">Vols veure'l en acció?</h2>
          <p className="text-lg text-sage/70 mb-10">
            La dashboard del nostre prototip funciona en temps real. Obre-la i veu les dades del sensor al moment.
          </p>
          <a
            href="https://custos-dashboard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-light text-base md:text-lg group inline-flex items-center gap-3"
          >
            <span className="relative z-10">Obre la Dashboard en temps real</span>
            <BarChart3 className="w-5 h-5 relative z-10" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8 border-t border-foreground/10 text-center text-xs text-foreground/40 font-medium">
        <p>© 2026 Custos. Terrassa, Barcelona.</p>
      </footer>
    </div>
  );
};

export default ComHoHemFet;
