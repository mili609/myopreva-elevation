import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/how-it-works", label: "How It Works" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Detect if navbar is over dark or light section
      const heroSection = document.querySelector(".surface-dark");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // If navbar top is above the bottom of dark section, it's on dark section
        setIsDarkSection(heroRect.bottom > 120);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // Check initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const textColorClass = isDarkSection ? "text-white" : "text-slate-800";
  const linkHoverClass = isDarkSection ? "hover:text-blue-300" : "hover:text-slate-600";
  const underlineColorClass = isDarkSection ? "after:bg-blue-400" : "after:bg-blue-600";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDarkSection
            ? "glass-dark-strong py-3 shadow-neon backdrop-blur-xl"
            : "bg-white/70 py-3 shadow-sm backdrop-blur-lg border-b border-slate-200/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="MyoPREVA"
            className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-semibold transition-all duration-300 ${
                location.pathname === link.to ? `${textColorClass} font-bold` : `${textColorClass} ${linkHoverClass}`
              } after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-[3px] after:rounded-full after:transition-all after:duration-300 ${
                location.pathname === link.to
                  ? `after:w-full ${underlineColorClass} after:shadow-lg`
                  : `after:w-0 ${underlineColorClass} hover:after:w-full`
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/get-started"
            className={`btn-shine px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105 ${
              isDarkSection
                ? "gradient-primary text-primary-foreground"
                : "bg-slate-800 text-white hover:bg-slate-900"
            }`}
          >
            Get Started
          </Link>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors ${textColorClass}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`mx-4 mt-2 rounded-2xl p-6 flex flex-col gap-4 ${
          isDarkSection 
            ? "glass-dark-strong" 
            : "bg-white/80 backdrop-blur-xl border border-slate-200/50"
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-semibold py-2 transition-colors ${
                location.pathname === link.to 
                  ? isDarkSection ? "text-blue-400 font-bold" : "text-blue-600 font-bold"
                  : isDarkSection ? "text-slate-200" : "text-slate-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/get-started"
            className={`px-6 py-3 rounded-full text-sm font-semibold text-center transition-all ${
              isDarkSection
                ? "gradient-primary text-primary-foreground"
                : "bg-slate-800 text-white hover:bg-slate-900"
            }`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
