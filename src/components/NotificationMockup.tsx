import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import logoIcon from "@/assets/logo_color.svg";
import { Phone } from "lucide-react";

const NotificationMockup = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xs sm:text-sm text-foreground/50 font-medium mb-5 sm:mb-6 flex items-center gap-2">
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Així es veu a la teva app
      </p>

      {/* Phone bezel — fluid width with max constraint */}
      <div className="relative w-full max-w-[300px] sm:max-w-[340px] bg-foreground/[0.03] rounded-[2rem] sm:rounded-[2.5rem] border border-foreground/10 p-2.5 sm:p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-5 sm:h-6 bg-foreground/[0.03] rounded-b-xl sm:rounded-b-2xl border-x border-b border-foreground/10" />

        {/* Screen */}
        <div className="bg-background rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden pt-8 sm:pt-10 pb-5 sm:pb-6 px-3 sm:px-4 min-h-[240px] sm:min-h-[280px] flex flex-col">
          {/* Status bar */}
          <div className="flex justify-between text-[9px] sm:text-[10px] text-foreground/40 font-medium px-1 mb-4 sm:mb-6">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3.5 sm:w-4 h-1.5 sm:h-2 border border-foreground/30 rounded-sm relative">
                <div className="absolute inset-[1px] right-[2px] bg-secondary rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Notification card */}
          <motion.div
            className="rounded-xl sm:rounded-2xl bg-white shadow-[0_4px_20px_-6px_rgba(0,0,0,0.1)] border border-foreground/5 p-3 sm:p-3.5"
            initial={{ opacity: 0, y: -20, scale: 0.92 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* App header */}
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
              <img src={logoIcon} alt="" className="w-4 h-4 sm:w-5 sm:h-5 rounded-md" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-foreground/80 uppercase">Custos</span>
              <span className="ml-auto text-[9px] sm:text-[10px] text-foreground/35 font-medium">ara</span>
            </div>

            {/* Message */}
            <p className="text-xs sm:text-[13px] font-semibold text-foreground leading-snug">
              ⚠️ La Maria no ha obert l'aixeta des de les 7:00
            </p>
            <p className="text-[10px] sm:text-[11px] text-foreground/55 mt-1 leading-relaxed">
              Avui no s'ha detectat cap activitat d'aigua. Pot ser un bon moment per trucar.
            </p>

            {/* Action buttons */}
            <div className="flex gap-1.5 sm:gap-2 mt-2.5 sm:mt-3">
              <motion.div
                className="flex-1 bg-secondary text-secondary-foreground text-[10px] sm:text-[11px] font-semibold rounded-lg sm:rounded-xl py-1.5 sm:py-2 text-center cursor-default"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1.1, duration: 0.3 }}
              >
                📞 Trucar
              </motion.div>
              <motion.div
                className="flex-1 bg-foreground/5 text-foreground/60 text-[10px] sm:text-[11px] font-medium rounded-lg sm:rounded-xl py-1.5 sm:py-2 text-center cursor-default"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                Detalls
              </motion.div>
            </div>
          </motion.div>

          {/* Older notification */}
          <motion.div
            className="rounded-lg sm:rounded-xl bg-foreground/[0.02] border border-foreground/5 p-2.5 sm:p-3 mt-2.5 sm:mt-3"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 0.6 } : {}}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
              <img src={logoIcon} alt="" className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-sm opacity-50" />
              <span className="text-[9px] sm:text-[10px] text-foreground/40 font-medium">ahir, 8:12</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-foreground/40">
              ✅ Tot normal. Rutina habitual.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationMockup;
