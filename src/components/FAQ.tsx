import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "La meva mare ho sabrà?",
    a: "No. El sensor s'instal·la dins la canonada i és completament invisible. La persona protegida no ha de fer res, ni ho sap. Viu exactament igual que sempre.",
  },
  {
    q: "I si no té WiFi a casa?",
    a: "El sistema necessita una connexió WiFi bàsica. Si no en té, el fontaner pot instal·lar un router senzill durant la visita d'instal·lació. El cost d'una connexió bàsica és d'uns 20€/mes.",
  },
  {
    q: "Què passa si marxa de vacances o a l'hospital?",
    a: "Des de l'app pots pausar la monitorització temporalment. El sistema entendrà que no hi ha activitat normal i no generarà alertes falses. Quan torni, es reactiva amb un clic.",
  },
  {
    q: "Com de fiable és? No rebrè alertes falses contínuament?",
    a: "El model d'IA aprèn durant 14 dies la rutina exacta de cada persona. La precisió documentada és superior al 95%. Les alertes són graduades: avís lleu, alerta moderada i emergència. Tu valores i decideixes.",
  },
  {
    q: "I si es trenca el sensor o deixa de funcionar?",
    a: "El sistema monitoritza el seu propi estat. Si el sensor deixa d'enviar dades, reps una notificació immediata. El suport tècnic està inclòs a la subscripció.",
  },
  {
    q: "Quines dades recolliu exactament?",
    a: "Només dades de flux d'aigua: quan s'obre i es tanca l'aixeta, i el volum aproximat. No recollim àudio, vídeo ni cap dada personal. Compliment total del GDPR.",
  },
  {
    q: "Puc instal·lar-lo jo mateix/a?",
    a: "Recomanem la instal·lació professional, que està inclosa al preu del kit. Un fontaner ho fa en menys de 20 minuts. Però si tens experiència en fontaneria, et proporcionem les instruccions.",
  },
  {
    q: "Funciona amb qualsevol tipus de canonada?",
    a: "El sensor és compatible amb canonades estàndard de ½ a 1 polzada, que són les més habituals en habitatges residencials a Espanya. El fontaner verificarà la compatibilitat durant la instal·lació.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="section-label">Preguntes freqüents</span>
          <h2 className="text-4xl md:text-5xl heading-serif mb-6">
            Tot el que vols saber
          </h2>
          <p className="text-lg text-foreground/70">
            Les respostes a les preguntes que les famílies ens fan més sovint.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-foreground/10 bg-sage/20 px-6 data-[state=open]:bg-sage/40 transition-colors"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/70 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
