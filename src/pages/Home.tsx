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
      {/* Hero — DARK with premium gradients */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden surface-dark">
        {/* Enhanced background with layered gradients */}
        <div className="absolute inset-0" style={{ 
          background: "linear-gradient(135deg, hsla(222, 40%, 12%, 1) 0%, hsla(222, 35%, 15%, 1) 50%, hsla(210, 45%, 12%, 1) 100%), radial-gradient(ellipse at 30% 20%, hsla(210,100%,52%,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, hsla(168,60%,44%,0.1) 0%, transparent 50%)" 
        }} />
        
        {/* Enhanced glow orbs */}
        <div className="absolute top-32 -right-20 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-accent/6 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.75s" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-neon text-primary-foreground" style={{ background: "linear-gradient(135deg, hsla(210, 100%, 52%, 0.8), hsla(168, 60%, 44%, 0.6))" }}>
                  Neuro-Optical Innovation from Singapore
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "hsl(220 20% 98%)" }}>
                  Protecting Children's{" "}
                  <span className="gradient-text animate-pulse">Vision</span> for a Brighter
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
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-primary/10" style={{ boxShadow: "0 25px 80px -15px hsla(210,100%,52%,0.15)" }}>
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
      <section className="py-24 relative z-10 bg-gradient-to-b from-background via-background to-slate-50">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 20% 50%, hsla(210, 100%, 52%, 0.05), transparent 50%), radial-gradient(ellipse at 80% 50%, hsla(168, 60%, 44%, 0.03), transparent 50%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group glass-strong rounded-2xl p-8 text-center hover-lift cursor-pointer border border-primary/5 hover:border-primary/20 transition-all duration-300">
                  <p className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground group-hover:text-muted-foreground transition-colors">{stat.label}</p>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "radial-gradient(ellipse at center, hsla(210, 100%, 52%, 0.05), transparent 70%)" }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Myopia Matters — DARK */}
      <section className="py-28 relative surface-dark overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(222, 40%, 12%, 1) 0%, hsla(210, 40%, 15%, 1) 100%), radial-gradient(ellipse at 50% 0%, hsla(210,100%,52%,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, hsla(168,60%,44%,0.06) 0%, transparent 60%)" }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full" style={{ background: "hsla(210, 100%, 52%, 0.08)", border: "1px solid hsla(210, 100%, 52%, 0.15)" }}>Understanding the Crisis</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6" style={{ color: "hsl(220 20% 96%)" }}>
                Why Myopia Matters
              </h2>
              <p className="max-w-2xl mx-auto text-lg" style={{ color: "hsl(220 15% 60%)" }}>
                Myopia is reaching epidemic proportions worldwide. Without intervention, children face progressive vision loss and increased risk of serious eye conditions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group glass-dark-strong rounded-2xl p-7 h-full hover-lift cursor-pointer border border-primary/10 hover:border-primary/25 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 shadow-lg">
                      <f.icon size={26} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-3" style={{ color: "hsl(220 20% 94%)" }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "hsl(220 15% 60%)" }}>{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product — LIGHT */}
      <section className="py-28 bg-gradient-to-b from-slate-50 via-background to-background relative">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at top right, hsla(210, 100%, 52%, 0.08), transparent 60%), radial-gradient(ellipse at bottom left, hsla(168, 60%, 44%, 0.05), transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift group">
                <div className="relative overflow-hidden">
                  <img src={product} alt="MyoPREVA ophthalmic lenses" className="w-full group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full" style={{ background: "hsla(210, 100%, 52%, 0.1)", border: "1px solid hsla(210, 100%, 52%, 0.2)" }}>Why Choose MyoPREVA</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 text-foreground">
                Precision-Engineered for Every Child
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                MyoPREVA™ leverages a patented retrofittable film technology that can be applied to any existing spectacle lens, making advanced myopia control universally accessible without the need for specialty lenses.
              </p>
              <ul className="space-y-4 mb-10">
                {["Retrofittable to existing lenses", "Volume-of-defocus technology", "Clinically validated approach", "Affordable and accessible"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-base text-foreground group/item hover:translate-x-2 transition-transform duration-300">
                    <ChevronRight size={20} className="text-primary flex-shrink-0 group-hover/item:text-primary/80" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/get-started"
                className="btn-shine gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base inline-flex items-center gap-2 transition-all duration-300 hover:shadow-glow hover:scale-105 hover-lift"
              >
                Get Started <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials — LIGHT */}
      <section className="py-28 relative bg-gradient-to-b from-background via-slate-50 to-background">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, hsla(210, 100%, 52%, 0.08), transparent 50%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full" style={{ background: "hsla(210, 100%, 52%, 0.08)", border: "1px solid hsla(210, 100%, 52%, 0.15)" }}>Trusted By Practitioners</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 text-foreground">
                Real Results From Real Experts
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Leading optometrists and ophthalmologists trust MyoPREVA for effective myopia control
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { name: "Dr. Sarah Chen", title: "Optometrist", quote: "MyoPREVA transformed how we manage myopia. Our patients see real results." },
              { name: "Dr. James Wilson", title: "Ophthalmologist", quote: "The precision optics are unmatched. A game-changer for clinical practice." },
              { name: "Dr. Maria Santos", title: "Pediatric Eye Care", quote: "Finally, a solution that's accessible and effective for all patients." },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-strong rounded-2xl p-8 hover-lift cursor-pointer border border-primary/10 hover:border-primary/20 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-primary">★</span>
                      ))}
                    </div>
                    <p className="text-foreground italic mb-6 leading-relaxed text-base">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — DARK */}
      <section className="py-32 surface-dark relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(222, 40%, 12%, 1) 0%, hsla(210, 40%, 15%, 1) 100%), radial-gradient(ellipse at 50% 50%, hsla(210,100%,52%,0.1) 0%, transparent 60%)" }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/6 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border hover-lift shadow-neon transition-all duration-300" style={{ background: "linear-gradient(135deg, hsla(222,28%,20%,0.9), hsla(222,35%,14%,0.9)), linear-gradient(135deg, hsla(210,100%,52%,0.05), hsla(168,60%,44%,0.03))", borderColor: "hsla(210,100%,52%,0.2)" }}>
              <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 50%, hsla(210,100%,52%,0.1), transparent 60%), radial-gradient(circle at 70% 50%, hsla(168,60%,44%,0.08), transparent 60%)" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "hsl(220 20% 98%)" }}>
                  Ready to Protect Your Child's Vision?
                </h2>
                <p className="max-w-2xl mx-auto mb-12 text-lg" style={{ color: "hsl(220 15% 65%)" }}>
                  Join thousands of families and practitioners choosing MyoPREVA for advanced myopia control today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/get-started"
                    className="btn-shine gradient-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-glow hover:scale-105 inline-flex items-center gap-2"
                  >
                    Get Started Today <ArrowRight size={18} />
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
