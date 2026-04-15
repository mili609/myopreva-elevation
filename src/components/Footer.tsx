import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="surface-dark pt-20 pb-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[80px] bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/">
              <img src={logo} alt="MyoPREVA" className="h-10 mb-4 brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(220 15% 55%)" }}>
              Making myopia control accessible to all children through innovative neuro-optical technology.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4" style={{ color: "hsl(220 20% 92%)" }}>Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/how-it-works", label: "How It Works" },
                { to: "/order", label: "Order Now" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary transition-colors duration-300" style={{ color: "hsl(220 15% 55%)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4" style={{ color: "hsl(220 20% 92%)" }}>Support</h4>
            <ul className="space-y-3 text-sm" style={{ color: "hsl(220 15% 55%)" }}>
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Warranty Info</li>
              <li>User Manuals</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4" style={{ color: "hsl(220 20% 92%)" }}>Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: "hsl(220 15% 55%)" }}>
              <li>www.MyoPREVA.com</li>
              <li>MyoPREVA@gmail.com</li>
              <li>Patent: PCT/IB2025/060465</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ borderColor: "hsla(220, 15%, 40%, 0.2)", color: "hsl(220 15% 40%)" }}>
          <p>© 2026 MyoPREVA. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
