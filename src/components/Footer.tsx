import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/">
              <img src={logo} alt="MyoPREVA" className="h-10 mb-4 brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed text-background/60">
              Making myopia control accessible to all children through innovative neuro-optical technology.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/how-it-works", label: "How It Works" },
                { to: "/order", label: "Order Now" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-background/60 hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Warranty Info</li>
              <li>User Manuals</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>www.MyoPREVA.com</li>
              <li>MyoPREVA@gmail.com</li>
              <li>Patent: PCT/IB2025/060465</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/40">
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
