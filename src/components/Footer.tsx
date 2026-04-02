import { Droplets } from "lucide-react";

const Footer = () => (
  <footer className="bg-background pt-16 pb-8 border-t border-foreground/10">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="w-6 h-6 text-secondary" />
            <span className="font-serif font-medium tracking-tighter text-xl">CUSTOS</span>
          </div>
          <p className="text-sm text-foreground/60 italic font-medium">Guardians of the ones you love.</p>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest mb-4 md:mb-6">Navegació</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><a href="#com-funciona" className="hover:text-secondary transition-colors">Com funciona</a></li>
            <li><a href="#experiencia-app" className="hover:text-secondary transition-colors">L'App</a></li>
            <li><a href="#historia" className="hover:text-secondary transition-colors">Història</a></li>
            <li><a href="#equip" className="hover:text-secondary transition-colors">Equip</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest mb-4 md:mb-6">Legal</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><a href="#" className="hover:text-secondary transition-colors">Política de privacitat</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Avís legal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest mb-4 md:mb-6">Contacte</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><a href="https://custos-guardian.vercel.app/" className="hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">custos-guardian.vercel.app</a></li>
            <li>Terrassa, Barcelona</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-foreground/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-foreground/40 font-medium">
        <p>© 2026 Custos. Tots els drets reservats.</p>
        <p className="mt-2 md:mt-0">Terrassa, Barcelona.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
