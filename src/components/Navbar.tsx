import { Droplets } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#com-funciona", label: "Com funciona" },
  { href: "#experiencia-app", label: "L'App" },
  { href: "#historia", label: "La història" },
  { href: "#equip", label: "L'Equip" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 py-4 ${
        scrolled
          ? "backdrop-blur-xl bg-background/90 border-b border-foreground/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Droplets className="w-6 h-6 text-secondary group-hover:scale-105 transition-transform" />
          <span className="font-serif font-medium tracking-tighter text-xl">CUSTOS</span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#comenca" className="btn-primary text-sm px-6 py-2.5 group">
            <span className="relative z-10">Prova Custos</span>
            <div className="shimmer-overlay" />
          </a>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Obre menú"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-background pt-24 px-6 flex flex-col items-start gap-6 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-serif tracking-tight font-medium border-b border-foreground/10 w-full pb-4"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#comenca"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full text-center mt-4"
          >
            Prova Custos
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
