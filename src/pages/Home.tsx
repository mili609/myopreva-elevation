import { Link } from "react-router-dom";
import { Shield, Eye, Users, Award, ArrowRight, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroChild from "@/assets/hero-child.jpg";
import product from "@/assets/product.jpg";

const stats = [
  { value: "1.4B+", label: "People affected by myopia globally" },
  { value: "50%", label: "Expected prevalence by 2050" },
  { value: "90%", label: "Myopia rate in East Asian youth" },
  { value: "PCT", label: "International patent pending" },
];

const features = [
  {
    icon: Shield,
    title: "Patented Technology",
    desc: "PCT/IB2025/060465 — breakthrough neuro-optical innovation from Singapore.",
  },
  {
    icon: Eye,
    title: "Precision Optics",
    desc: "Volume-of-defocus approach for superior myopia control outcomes.",
  },
  {
    icon: Users,
    title: "Universal Access",
    desc: "Retrofittable design makes advanced myopia control accessible to all children.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "Developed with rigorous clinical standards and peer-reviewed research.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero — DARK */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden surface-dark">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 20%, hsla(210,100%,52%,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, hsla(168,60%,44%,0.06) 0%, transparent 50%)" }} />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6 shadow-glow">
                  Neuro-Optical Innovation from Singapore
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "hsl(220 20% 95%)" }}>
                  Protecting Children's{" "}
                  <span className="gradient-text">Vision</span> for a Brighter
                  Future
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "hsl(220 15% 60%)" }}>
                  Making myopia control accessible to all children through
                  breakthrough precision ophthalmic care.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/how-it-works"
                    className="btn-shine gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-glow hover:scale-105 flex items-center gap-2"
                  >
                    Discover the Science <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/get-started"
                    className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 border" style={{ borderColor: "hsla(220,20%,50%,0.3)", color: "hsl(220 20% 85%)", background: "hsla(220,20%,50%,0.05)" }}
                  >
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-inset" style={{ boxShadow: "0 25px 80px -15px hsla(210,100%,52%,0.15)", ringColor: "hsla(220,20%,50%,0.1)" }}>
                  <img
                    src={heroChild}
                    alt="Child receiving eye examination at clinic"
                    className="w-full h-auto object-cover"
                    width={1024}
                    height={768}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-dark-strong rounded-2xl p-4 animate-float shadow-neon">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                      <Shield size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm" style={{ color: "hsl(220 20% 95%)" }}>Patented Security</p>
                      <p className="text-xs" style={{ color: "hsl(220 15% 55%)" }}>PCT Protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats — LIGHT */}
      <section className="py-20 relative z-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-strong rounded-2xl p-6 text-center hover-lift group">
                  <p className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Myopia Matters — DARK */}
      <section className="py-24 relative surface-dark overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, hsla(210,100%,52%,0.06) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Understanding the Crisis</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: "hsl(220 20% 95%)" }}>
                Why Myopia Matters
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: "hsl(220 15% 55%)" }}>
                Myopia is reaching epidemic proportions worldwide. Without intervention, children face progressive vision loss and increased risk of serious eye conditions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-dark rounded-2xl p-6 h-full hover-lift group cursor-pointer border" style={{ borderColor: "hsla(220,20%,50%,0.08)" }}>
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <f.icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "hsl(220 20% 92%)" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(220 15% 55%)" }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product — LIGHT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src={product} alt="MyoPREVA ophthalmic lenses" className="w-full" loading="lazy" width={800} height={600} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why Choose MyoPREVA</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                Precision-Engineered for Every Child
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MyoPREVA™ leverages a patented retrofittable film technology that can be applied to any existing spectacle lens, making advanced myopia control universally accessible without the need for specialty lenses.
              </p>
              <ul className="space-y-3 mb-8">
                {["Retrofittable to existing lenses", "Volume-of-defocus technology", "Clinically validated approach", "Affordable and accessible"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <ChevronRight size={16} className="text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/order"
                className="btn-shine gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                Order Now <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA — DARK */}
      <section className="py-24 surface-dark relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, hsla(210,100%,52%,0.08) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border" style={{ background: "linear-gradient(135deg, hsla(222,28%,20%,0.8), hsla(222,35%,14%,0.8))", borderColor: "hsla(210,100%,52%,0.15)" }}>
              <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 50%, hsla(210,100%,52%,0.15), transparent 50%), radial-gradient(circle at 70% 50%, hsla(168,60%,44%,0.1), transparent 50%)" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(220 20% 95%)" }}>
                  Ready to Protect Your Child's Vision?
                </h2>
                <p className="max-w-lg mx-auto mb-8" style={{ color: "hsl(220 15% 60%)" }}>
                  Join thousands of families and practitioners choosing MyoPREVA for advanced myopia control.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/get-started"
                    className="btn-shine gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-glow hover:scale-105"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    to="/order"
                    className="border px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105" style={{ borderColor: "hsla(220,20%,50%,0.3)", color: "hsl(220 20% 85%)" }}
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
