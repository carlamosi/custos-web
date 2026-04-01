import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Wallet, BarChart3, PlayCircle } from "lucide-react";

const words = ["Era", "un", "dimarts", "al", "matí.", null, "La", "iaia", "no", "havia", "trucat."];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      {/* SVG background */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 1000 1000" className="w-full h-full max-w-screen-xl animate-pulse opacity-60">
          <path d="M-200,500 C100,200 400,800 1200,500" fill="none" stroke="hsl(var(--sage))" strokeWidth="80" strokeLinecap="round" style={{ filter: "blur(40px)" }} />
          <path d="M-100,600 C200,300 500,900 1300,600" fill="none" stroke="hsl(var(--brand-green))" strokeWidth="40" strokeLinecap="round" className="opacity-30" style={{ filter: "blur(60px)" }} />
        </svg>
      </div>

      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] noise-overlay" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col items-start">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.1] max-w-4xl">
          {words.map((word, i) =>
            word === null ? (
              <br key={i} className="hidden md:block" />
            ) : (
              <span
                key={i}
                className="inline-block mr-[0.3em] transition-all duration-600 ease-out"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${100 + i * 60}ms`,
                }}
              >
                {word}
              </span>
            )
          )}
        </h1>

        <motion.div
          className="mt-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Custos és la primera solució que aprèn la rutina de la persona que estimes i t'avisa si alguna cosa no va bé. Sense càmeres. Sense que ella hagi de fer res.
          </p>
          <p className="mt-4 text-xs md:text-sm text-foreground/50 font-medium tracking-wide">
            Sensor d'aigua intel·ligent · IA personalitzada per llar · Alerta a l'app en menys de 5 minuts
          </p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <a href="#la-solucio" className="btn-primary w-full sm:w-auto text-center group">
              <span className="relative z-10">Descobreix com funciona</span>
              <div className="shimmer-overlay" />
            </a>
            <a href="#historia" className="text-sm font-medium text-foreground/70 hover:text-secondary transition-colors duration-200 flex items-center justify-center gap-2 w-full sm:w-auto">
              Mira la nostra història <PlayCircle className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust strip */}
      <motion.div
        className="absolute bottom-8 left-0 w-full px-6 lg:px-12 hidden md:block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center text-xs text-foreground/50 font-medium">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary" /> 94% viuen amb por de no saber</span>
          <span className="hidden md:inline text-foreground/20">|</span>
          <span className="flex items-center gap-2"><Wallet className="w-4 h-4 text-secondary" /> 71% pagaria per una solució real</span>
          <span className="hidden md:inline text-foreground/20">|</span>
          <span className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-secondary" /> Tecnologia validada precisió &gt;95%</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
