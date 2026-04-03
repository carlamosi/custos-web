import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/logo_color.svg";
import logoFull from "@/assets/nombre-completo.svg";

const navLinks = [
  { href: "/", label: "Inici" },
  { href: "/producte", label: "Producte" },
  { href: "/impacte", label: "Impacte" },
  { href: "/qui-som", label: "Qui som" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-background/90 border-b border-foreground/5 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logoIcon} alt="Custos" className="h-8 w-8 group-hover:scale-105 transition-transform duration-200" />
          <img src={logoFull} alt="Custos" className="h-5 hidden sm:block" />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`nav-link ${location.pathname === l.href ? "text-secondary" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/producte" className="btn-primary text-sm px-6 py-2.5 group">
            <span className="relative z-10">Prova Custos</span>
            <div className="shimmer-overlay" />
          </Link>
        </div>

        <button
          className="lg:hidden p-2 relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tanca menú" : "Obre menú"}
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

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-[45] bg-background transition-all duration-300 lg:hidden flex flex-col ${
          menuOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-4"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="pt-24 px-8 flex flex-col gap-2 flex-1 overflow-y-auto pb-8"
          style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom, 0px))" }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-2xl font-serif tracking-tight font-medium border-b border-foreground/10 w-full pb-4 pt-2 hover:text-secondary transition-colors ${
                location.pathname === l.href ? "text-secondary" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/producte" className="btn-primary w-full text-center mt-6">
            Prova Custos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
