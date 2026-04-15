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
    const detectSection = () => {
      const navbarHeight = 80;
      
      // Get all dark sections on the page
      const darkSections = document.querySelectorAll(".surface-dark");
      
      // Check if navbar is over any dark section
      let isOverDark = false;
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Navbar is over dark section if navbar top is within section
        if (rect.top <= navbarHeight && rect.bottom > 0) {
          isOverDark = true;
        }
      });
      
      setIsDarkSection(isOverDark);
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      detectSection();
    };

    // Initial detection
    detectSection();
    
    // Listen to scroll with high frequency
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", detectSection, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", detectSection);
    };
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  // HARD COLOR VALUES - NO OPACITY TRICKS
  const textColor = isDarkSection ? "#FFFFFF" : "#111827"; // White or dark charcoal
  const linkHoverColor = isDarkSection ? "#38BDF8" : "#1E40AF"; // Cyan or dark blue
  const activeColor = isDarkSection ? "#38BDF8" : "#2563EB"; // Cyan or bright blue
  const navBgColor = scrolled 
    ? (isDarkSection ? "rgba(15, 23, 42, 0.85)" : "rgba(255, 255, 255, 0.85)")
    : "transparent";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: navBgColor,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled 
          ? isDarkSection 
            ? "1px solid rgba(59, 130, 246, 0.2)"
            : "1px solid rgba(226, 232, 240, 0.5)"
          : "none",
        boxShadow: scrolled
          ? isDarkSection
            ? "0 4px 20px rgba(0, 0, 0, 0.3)"
            : "0 4px 12px rgba(0, 0, 0, 0.08)"
          : "none",
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          <img
            src={logo}
            alt="MyoPREVA"
            className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-sm font-semibold transition-all duration-300 group"
                style={{
                  color: isActive ? activeColor : textColor,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = linkHoverColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = textColor;
                  }
                }}
              >
                {link.label}
                <span
                  className="absolute bottom-[-6px] left-0 h-[2.5px] rounded-full transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    width: isActive ? "100%" : "0%",
                    backgroundColor: activeColor,
                    boxShadow: isActive
                      ? `0 0 12px ${activeColor}40`
                      : "none",
                  }}
                />
              </Link>
            );
          })}
          <Link
            to="/get-started"
            className="px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 text-white font-medium hover:scale-110 cursor-pointer"
            style={{
              background: isDarkSection
                ? "linear-gradient(135deg, #3B82F6, #1E40AF)"
                : "linear-gradient(135deg, #2563EB, #1E40AF)",
              boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = isDarkSection
                ? "0 0 24px rgba(59, 130, 246, 0.6)"
                : "0 0 24px rgba(37, 99, 235, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(59, 130, 246, 0.3)";
            }}
          >
            Get Started
          </Link>
        </nav>

        <button
          className="md:hidden p-2 transition-colors duration-300"
          style={{ color: textColor }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="mx-4 mb-4 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-xl border transition-all duration-300"
          style={{
            backgroundColor: isDarkSection
              ? "rgba(30, 41, 59, 0.95)"
              : "rgba(255, 255, 255, 0.95)",
            borderColor: isDarkSection
              ? "rgba(59, 130, 246, 0.2)"
              : "rgba(226, 232, 240, 0.5)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300"
                style={{
                  color: isActive ? activeColor : textColor,
                  backgroundColor: isActive
                    ? isDarkSection
                      ? "rgba(59, 130, 246, 0.1)"
                      : "rgba(37, 99, 235, 0.1)"
                    : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/get-started"
            className="px-6 py-3 rounded-full text-sm font-semibold text-center transition-all duration-300 text-white cursor-pointer"
            style={{
              background: isDarkSection
                ? "linear-gradient(135deg, #3B82F6, #1E40AF)"
                : "linear-gradient(135deg, #2563EB, #1E40AF)",
              boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
