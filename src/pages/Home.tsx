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
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-sage-50/30" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                  Neuro-Optical Innovation from Singapore
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Protecting Children's{" "}
                  <span className="gradient-text">Vision</span> for a Brighter
                  Future
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                  Making myopia control accessible to all children through
                  breakthrough precision ophthalmic care.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/how-it-works"
                    className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-glow hover:scale-105 flex items-center gap-2"
                  >
                    Discover the Science <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/get-started"
                    className="bg-card border border-border text-foreground px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={heroChild}
                    alt="Child receiving eye examination at clinic"
                    className="w-full h-auto object-cover"
                    width={1024}
                    height={768}
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                      <Shield size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm">Patented Security</p>
                      <p className="text-xs text-muted-foreground">PCT Protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center hover-lift">
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

      {/* Why Myopia Matters */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Understanding the Crisis</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4">
                Why Myopia Matters
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Myopia is reaching epidemic proportions worldwide. Without intervention, children face progressive vision loss and increased risk of serious eye conditions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-6 h-full hover-lift group cursor-pointer">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <f.icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src={product} alt="MyoPREVA ophthalmic lenses" className="w-full" loading="lazy" width={800} height={600} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why Choose MyoPREVA</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
                Precision-Engineered for Every Child
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MyoPREVA™ leverages a patented retrofittable film technology that can be applied to any existing spectacle lens, making advanced myopia control universally accessible without the need for specialty lenses.
              </p>
              <ul className="space-y-3 mb-8">
                {["Retrofittable to existing lenses", "Volume-of-defocus technology", "Clinically validated approach", "Affordable and accessible"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <ChevronRight size={16} className="text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/order"
                className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                Order Now <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="gradient-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50" />
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Protect Your Child's Vision?
                </h2>
                <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
                  Join thousands of families and practitioners choosing MyoPREVA for advanced myopia control.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/get-started"
                    className="bg-card text-foreground px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    to="/order"
                    className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-primary-foreground/10"
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
