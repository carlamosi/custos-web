import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import logoIcon from "@/assets/logo_color.svg";
import { Phone } from "lucide-react";

const NotificationMockup = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm text-foreground/50 font-medium mb-6 flex items-center gap-2">
        <Phone className="w-4 h-4" /> Així es veu a la teva app
      </p>

      {/* Phone bezel */}
      <div className="relative w-[300px] md:w-[340px] bg-foreground/[0.03] rounded-[2.5rem] border border-foreground/10 p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/[0.03] rounded-b-2xl border-x border-b border-foreground/10" />

        {/* Screen */}
        <div className="bg-background rounded-[2rem] overflow-hidden pt-10 pb-6 px-4 min-h-[280px] flex flex-col">
          {/* Status bar */}
          <div className="flex justify-between text-[10px] text-foreground/40 font-medium px-1 mb-6">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-2 border border-foreground/30 rounded-sm relative">
                <div className="absolute inset-[1px] right-[2px] bg-secondary rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Notification card — slides down */}
          <motion.div
            className="rounded-2xl bg-white shadow-[0_4px_20px_-6px_rgba(0,0,0,0.1)] border border-foreground/5 p-3.5"
            initial={{ opacity: 0, y: -20, scale: 0.92 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* App header */}
            <div className="flex items-center gap-2 mb-2">
              <img src={logoIcon} alt="" className="w-5 h-5 rounded-md" />
              <span className="text-[11px] font-semibold tracking-wide text-foreground/80 uppercase">Custos</span>
              <span className="ml-auto text-[10px] text-foreground/35 font-medium">ara</span>
            </div>

            {/* Message */}
            <p className="text-[13px] font-semibold text-foreground leading-snug">
              ⚠️ La Maria no ha obert l'aixeta des de les 7:00
            </p>
            <p className="text-[11px] text-foreground/55 mt-1 leading-relaxed">
              Avui no s'ha detectat cap activitat d'aigua. Pot ser un bon moment per trucar.
            </p>

            {/* Action buttons */}
            <div className="flex gap-2 mt-3">
              <motion.div
                className="flex-1 bg-secondary text-secondary-foreground text-[11px] font-semibold rounded-xl py-2 text-center cursor-default"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1.1, duration: 0.3 }}
              >
                📞 Trucar Maria
              </motion.div>
              <motion.div
                className="flex-1 bg-foreground/5 text-foreground/60 text-[11px] font-medium rounded-xl py-2 text-center cursor-default"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                Veure detalls
              </motion.div>
            </div>
          </motion.div>

          {/* Subtle second older notification */}
          <motion.div
            className="rounded-xl bg-foreground/[0.02] border border-foreground/5 p-3 mt-3"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 0.6 } : {}}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <img src={logoIcon} alt="" className="w-4 h-4 rounded-sm opacity-50" />
              <span className="text-[10px] text-foreground/40 font-medium">ahir, 8:12</span>
            </div>
            <p className="text-[11px] text-foreground/40">
              ✅ Tot normal. La Maria ha seguit la seva rutina habitual.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationMockup;
