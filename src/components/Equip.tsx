import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import carlaImg from "@/assets/carla.png";
import cloeImg from "@/assets/cloe.png";

const team = [
  {
    name: "Júlia Garcia",
    role: "CEO & Cofundadora",
    bio: "Lidera la visió de negoci de Custos i les aliances que la fan possible. Creu que la millor tecnologia és la que arriba just a temps per canviar-ho tot.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Carla Monté",
    role: "CTO & Cofundadora",
    bio: "Arquitecta del sistema que aprèn cada llar com si la conegués de tota la vida. Converteix dades de consum d'aigua en tranquil·litat familiar real.",
    img: carlaImg,
  },
  {
    name: "Cloe Monté",
    role: "CMO & Cofundadora",
    bio: "Construeix la veu de Custos: propera, honesta, i sempre al costat de les famílies que busquen una solució real. Perquè el millor màrqueting és la veritat ben explicada.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  },
];

const TeamMember = ({ name, role, bio, img, index }: { name: string; role: string; bio: string; img: string; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
    >
      <div className="aspect-square rounded-4xl overflow-hidden mb-6 bg-sage relative">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-serif font-medium tracking-tight mb-1">{name}</h3>
      <p className="text-xs font-medium tracking-widest text-secondary uppercase mb-3">{role}</p>
      <p className="text-sm text-foreground/70 leading-relaxed">{bio}</p>
    </motion.div>
  );
};

const Equip = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="equip" className="py-20 md:py-32 bg-background relative border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">L'Equip</span>
          <h2 className="text-3xl md:text-4xl heading-serif">
            Persones cuidant de persones
          </h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            No érem investigadores ni doctores. Érem tres noies joves que van viure el que milers de famílies viuen cada dia. I no van acceptar que no hi hagués resposta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, i) => (
            <TeamMember key={i} {...member} index={i} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-foreground/40 font-medium">EST. 2026 | Terrassa, Barcelona</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Equip;
