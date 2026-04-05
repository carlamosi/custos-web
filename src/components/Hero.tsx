import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Wallet, BarChart3, ChevronDown } from "lucide-react";

const words = ["Avui", "no", "ha", "obert", "l'aixeta."];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      {/* Water ripple animation */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-end justify-center overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute bottom-[10%] rounded-full border border-secondary/20"
            initial={{ width: 40, height: 40, opacity: 0.6 }}
            animate={{ width: [40, 600 + i * 200], height: [40, 600 + i * 200], opacity: [0.5, 0] }}
            transition={{ duration: 4, delay: i * 1.3, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-30">
        <svg viewBox="0 0 1000 1000" className="w-full h-full max-w-screen-xl">
          <path d="M-200,500 C100,200 400,800 1200,500" fill="none" stroke="hsl(var(--sage))" strokeWidth="80" strokeLinecap="round" style={{ filter: "blur(60px)" }} />
        </svg>
      </div>

      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] noise-overlay" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col items-start">
        {/* Headline — fast stagger: total ~0.5s */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.1] max-w-4xl">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.3em] transition-all duration-500 ease-out"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${80 + i * 50}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* New punchy subtitle */}
        <motion.p
          className="mt-4 text-2xl md:text-3xl lg:text-4xl font-serif text-secondary max-w-3xl font-medium"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Custos ho sap. Tu també.
        </motion.p>

        {/* Description — shorter, scannable */}
        <motion.div
          className="mt-6 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Un sensor invisible que aprèn la rutina de qui estimes i t'avisa si alguna cosa canvia. Sense càmeres. Sense intrusió. Sense que hagi de fer res.
          </p>

          {/* CTAs — appear fast */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.4 }}
          >
            <a href="#la-solucio" className="btn-primary w-full sm:w-auto text-center group">
              <span className="relative z-10">Protegeix qui estimes</span>
              <div className="shimmer-overlay" />
            </a>
            <a href="#historia" className="text-sm font-medium text-foreground/60 hover:text-secondary transition-colors duration-200 flex items-center gap-1.5">
              Per què ho fem <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust strip — visible on ALL devices */}
      <motion.div
        className="absolute bottom-16 md:bottom-8 left-0 w-full px-6 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-8 items-start sm:items-center text-xs text-foreground/50 font-medium">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary" /> 94% viuen amb por de no saber</span>
          <span className="hidden sm:inline text-foreground/20">|</span>
          <span className="flex items-center gap-2"><Wallet className="w-4 h-4 text-secondary" /> 71% pagaria per una solució real</span>
          <span className="hidden sm:inline text-foreground/20">|</span>
          <span className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-secondary" /> Tecnologia validada precisió &gt;95%</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#el-problema"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-foreground/30 hover:text-secondary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
