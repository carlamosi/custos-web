import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Ripple background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-secondary/15"
            initial={{ width: 20, height: 20, opacity: 0.4 }}
            animate={{ width: [20, 500 + i * 180], height: [20, 500 + i * 180], opacity: [0.4, 0] }}
            transition={{ duration: 5, delay: i * 1.6, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-8xl md:text-9xl font-serif font-medium text-foreground/10 select-none">
          404
        </span>

        <h1 className="mt-4 text-2xl md:text-3xl font-serif font-medium tracking-tight text-foreground leading-snug">
          Aquesta pàgina no existeix.
        </h1>

        <p className="mt-3 text-lg md:text-xl font-serif text-secondary font-medium">
          Però la persona que estimes, sí.
        </p>

        <p className="mt-4 text-base text-foreground/60 leading-relaxed">
          I mereix que algú vetlli per ella.
        </p>

        <Link
          to="/"
          className="btn-primary mt-10 inline-flex items-center gap-3 group"
        >
          <ArrowLeft className="w-4 h-4 relative z-10 group-hover:-translate-x-1 transition-transform" />
          <span className="relative z-10">Torna a l'inici</span>
          <div className="shimmer-overlay" />
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
