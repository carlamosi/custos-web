import { Droplets } from "lucide-react";
import { Link } from "react-router-dom";

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
            <li><Link to="/" className="hover:text-secondary transition-colors">Inici</Link></li>
            <li><Link to="/producte" className="hover:text-secondary transition-colors">El Producte</Link></li>
            <li><Link to="/qui-som" className="hover:text-secondary transition-colors">Qui som</Link></li>
            <li><Link to="/com-ho-hem-fet" className="hover:text-secondary transition-colors">Com ho hem fet</Link></li>
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
            <li><a href="mailto:hola@custos.cat" className="hover:text-secondary transition-colors">hola@custos.cat</a></li>
            <li><span>Terrassa, Barcelona</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-foreground/10 pt-6 text-center text-xs text-foreground/40 font-medium">
        <p>© 2026 Custos. Terrassa, Barcelona.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
