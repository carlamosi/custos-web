import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import logoIcon from "@/assets/logo_color.svg";

const NotificationMockup = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      className="flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Phone frame */}
      <div className="relative w-[320px] md:w-[360px]">
        {/* Notification card — slides in from top */}
        <motion.div
          className="rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] border border-foreground/5 p-4 mx-auto"
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          {/* Header row */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src={logoIcon} alt="" className="w-6 h-6 rounded-md" />
            <span className="text-xs font-semibold tracking-wide text-foreground/90 uppercase">Custos</span>
            <span className="ml-auto text-[10px] text-foreground/40 font-medium">ara</span>
          </div>

          {/* Content */}
          <p className="text-sm font-medium text-foreground leading-snug">
            La Maria no ha obert l'aixeta des de les 7:00.
          </p>
          <p className="text-xs text-foreground/60 mt-1 leading-relaxed">
            Pot ser un bon moment per trucar.
          </p>

          {/* Action buttons */}
          <div className="flex gap-2 mt-3">
            <div className="flex-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-lg py-2 text-center">
              Trucar Maria
            </div>
            <div className="flex-1 bg-foreground/5 text-foreground/60 text-xs font-medium rounded-lg py-2 text-center">
              Veure detalls
            </div>
          </div>
        </motion.div>

        {/* Subtle time/context below */}
        <motion.p
          className="text-center text-xs text-foreground/40 mt-4 font-medium"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          Alerta real · Menys de 5 minuts
        </motion.p>
      </div>
    </motion.div>
  );
};

export default NotificationMockup;
