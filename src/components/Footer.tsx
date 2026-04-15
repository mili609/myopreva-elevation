import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Send } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="surface-dark relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-primary/4 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b" style={{ borderColor: "hsla(220, 20%, 40%, 0.1)" }}>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold mb-3" style={{ color: "hsl(220 20% 95%)" }}>Stay Updated</h3>
            <p className="mb-6" style={{ color: "hsl(220 15% 60%)" }}>Subscribe to get the latest news about MyoPREVA and myopia control innovations</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <img src={logo} alt="MyoPREVA" className="h-10 brightness-0 invert hover:opacity-80 transition-opacity" />
              </Link>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(220 15% 55%)" }}>
                Pioneering neuro-optical innovation from Singapore to protect children's vision worldwide.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Send, href: "#" },
                  { icon: Mail, href: "mailto:MyoPREVA@gmail.com" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 text-slate-400 hover:text-primary"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-heading font-semibold mb-6" style={{ color: "hsl(220 20% 92%)" }}>Product</h4>
              <ul className="space-y-3 text-sm">
                {["Technology", "Clinical Evidence", "Patent Info", "Certifications"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                      style={{ color: "hsl(220 15% 55%)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-semibold mb-6" style={{ color: "hsl(220 20% 92%)" }}>Company</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "About Us", to: "/about" },
                  { label: "How It Works", to: "/how-it-works" },
                  { label: "Careers", to: "#" },
                  { label: "Blog", to: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      className="hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                      style={{ color: "hsl(220 15% 55%)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-heading font-semibold mb-6" style={{ color: "hsl(220 20% 92%)" }}>Support</h4>
              <ul className="space-y-3 text-sm">
                {["Contact Us", "FAQ", "User Manuals", "Warranty", "Returns"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                      style={{ color: "hsl(220 15% 55%)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold mb-6" style={{ color: "hsl(220 20% 92%)" }}>Contact</h4>
              <ul className="space-y-3 text-sm" style={{ color: "hsl(220 15% 55%)" }}>
                <li>
                  <a href="mailto:MyoPREVA@gmail.com" className="hover:text-primary transition-colors">MyoPREVA@gmail.com</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">www.MyoPREVA.com</a>
                </li>
                <li className="pt-2 text-xs" style={{ color: "hsl(220 15% 40%)" }}>
                  Patent: PCT/IB2025/060465
                </li>
                <li className="text-xs" style={{ color: "hsl(220 15% 40%)" }}>
                  Developed in Singapore
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Divider */}
          <div className="premium-divider mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs" style={{ color: "hsl(220 15% 40%)" }}>© 2025 MyoPREVA. All rights reserved. Made with innovation for vision.</p>
            <div className="flex flex-wrap gap-6 text-xs">
              <a href="#" className="hover:text-primary transition-colors" style={{ color: "hsl(220 15% 55%)" }}>Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors" style={{ color: "hsl(220 15% 55%)" }}>Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors" style={{ color: "hsl(220 15% 55%)" }}>Cookie Settings</a>
              <a href="#" className="hover:text-primary transition-colors" style={{ color: "hsl(220 15% 55%)" }}>Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
