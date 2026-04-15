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
    const detectBackgroundLuminance = () => {
      // Get element at navbar position (80px from top)
      const navbarY = 80;
      const element = document.elementFromPoint(window.innerWidth / 2, navbarY);
      
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        
        // Parse RGB values
        const rgbMatch = bgColor.match(/\d+/g);
        if (rgbMatch && rgbMatch.length >= 3) {
          const [r, g, b] = rgbMatch.map(Number);
          // Calculate luminance using standard formula
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          // Dark if luminance < 0.5
          setIsDarkSection(luminance < 0.5);
          return;
        }
      }
      
      // Fallback: check for dark sections
      const darkSections = document.querySelectorAll(".surface-dark");
      let isOverDark = false;
      
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarY && rect.bottom > navbarY) {
          isOverDark = true;
        }
      });
      
      setIsDarkSection(isOverDark);
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      detectBackgroundLuminance();
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  // Dynamic color classes based on section
  const textColorClass = isDarkSection ? "text-white" : "text-slate-900";
  const textLightClass = isDarkSection ? "text-slate-200" : "text-slate-600";
  const hoverGlowClass = isDarkSection 
    ? "hover:text-blue-300 hover:shadow-[0_0_8px_rgba(96,165,250,0.4)]" 
    : "hover:text-blue-600";
  const underlineColorClass = isDarkSection ? "after:bg-blue-400" : "after:bg-blue-600";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDarkSection
            ? "bg-slate-900/70 backdrop-blur-xl py-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-b border-blue-400/20"
            : "bg-white/70 backdrop-blur-xl py-3 shadow-md border-b border-slate-200/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="MyoPREVA"
            className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-semibold transition-all duration-300 ${
                location.pathname === link.to 
                  ? `${textColorClass} font-bold` 
                  : `${textColorClass} ${hoverGlowClass}`
              } after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-[2.5px] after:rounded-full after:transition-all after:duration-300 after:shadow-lg ${
                location.pathname === link.to
                  ? `after:w-full ${underlineColorClass} after:shadow-[0_0_12px_rgba(59,130,246,0.6)]`
                  : `after:w-0 ${underlineColorClass} hover:after:w-full`
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/get-started"
            className={`btn-shine px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              isDarkSection
                ? "gradient-primary text-white hover:shadow-[0_0_24px_rgba(59,130,246,0.6)] hover:scale-110"
                : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-[0_0_24px_rgba(37,99,235,0.5)] hover:scale-110"
            }`}
          >
            Get Started
          </Link>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors duration-300 ${textColorClass} hover:text-blue-400`}
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
        <div className={`mx-4 mt-4 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-xl transition-all duration-300 ${
          isDarkSection 
            ? "bg-slate-800/90 border border-blue-400/20" 
            : "bg-white/90 border border-slate-200/50"
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300 ${
                location.pathname === link.to 
                  ? isDarkSection 
                    ? "text-blue-300 font-bold bg-blue-400/10" 
                    : "text-blue-600 font-bold bg-blue-100"
                  : isDarkSection 
                    ? "text-slate-200 hover:text-white hover:bg-blue-400/5" 
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/get-started"
            className={`px-6 py-3 rounded-full text-sm font-semibold text-center transition-all duration-300 ${
              isDarkSection
                ? "gradient-primary text-white hover:shadow-[0_0_16px_rgba(59,130,246,0.5)]"
                : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-[0_0_16px_rgba(37,99,235,0.5)]"
            }`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
