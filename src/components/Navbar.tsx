import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/how-it-works", label: "How It Works" },
];

// TASK 2: Route-based navbar theme config
const ROUTE_THEME = {
  "/": "dynamic",
  "/about": "light",
  "/how-it-works": "light",
  "/get-started": "light",
} as Record<string, "dynamic" | "light" | "dark">;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);
  const location = useLocation();

  const currentPath = location.pathname;
  const themeMode = ROUTE_THEME[currentPath] || "light";

  // TASK 1: Dynamic background detection for scroll-based switching
  useEffect(() => {
    const detectBackground = () => {
      if (themeMode === "dynamic") {
        const darkSections = document.querySelectorAll(".surface-dark");
        let isOverDark = false;

        darkSections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 0) {
            isOverDark = true;
          }
        });

        setIsDarkBg(isOverDark);
      } else if (themeMode === "light") {
        setIsDarkBg(false);
      } else {
        setIsDarkBg(true);
      }
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      detectBackground();
    };

    detectBackground();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [themeMode]);

  // TASK 1: Explicit color definitions - NO OPACITY
  const textColor = isDarkBg ? "#FFFFFF" : "#111111";
  const hoverColor = isDarkBg ? "#60A5FA" : "#000000";
  const activeColor = isDarkBg ? "#60A5FA" : "#3B82F6";
  
  const bgColor = scrolled
    ? isDarkBg
      ? "rgba(15, 23, 42, 0.95)"
      : "rgba(255, 255, 255, 0.95)"
    : "transparent";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: bgColor,
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background-color 0.2s ease, backdrop-filter 0.2s ease",
        borderBottom: scrolled
          ? isDarkBg
            ? "1px solid rgba(59, 130, 246, 0.2)"
            : "1px solid rgba(200, 214, 225, 0.3)"
          : "none",
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity">
          <img src={logo} alt="MyoPREVA" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Navigation - TASK 1: Explicit text color, NO opacity */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-sm font-bold transition-colors duration-200"
                style={{
                  color: isActive ? activeColor : textColor,
                  opacity: 1,
                  letterSpacing: "0.5px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLAnchorElement).style.color = hoverColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLAnchorElement).style.color = textColor;
                  }
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-[-8px] left-0 w-full h-0.5 rounded-full"
                    style={{
                      backgroundColor: activeColor,
                      boxShadow: `0 0 8px ${activeColor}80`,
                    }}
                  />
                )}
              </Link>
            );
          })}

          {/* CTA Button */}
          <Link
            to="/get-started"
            className="px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
              boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
              opacity: 1,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 14px rgba(59, 130, 246, 0.4)";
            }}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          style={{
            color: textColor,
            opacity: 1,
            transition: "color 0.2s ease",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="border-t px-6 py-4 flex flex-col gap-2"
          style={{
            backgroundColor: isDarkBg ? "rgba(15, 23, 42, 0.98)" : "rgba(248, 250, 252, 0.98)",
            borderTopColor: isDarkBg ? "rgba(59, 130, 246, 0.2)" : "rgba(200, 214, 225, 0.3)",
            backdropFilter: "blur(8px)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-bold py-2.5 px-4 rounded-lg transition-colors duration-200"
                style={{
                  color: isActive ? activeColor : textColor,
                  backgroundColor: isActive
                    ? isDarkBg
                      ? "rgba(59, 130, 246, 0.15)"
                      : "rgba(59, 130, 246, 0.1)"
                    : "transparent",
                  opacity: 1,
                  letterSpacing: "0.5px",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/get-started"
            className="px-6 py-3 rounded-full text-sm font-bold text-white text-center transition-all duration-200 mt-2"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
              boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
              opacity: 1,
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
