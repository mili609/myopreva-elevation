import { Link } from "react-router-dom";
import { Film, Box, Layers, Globe, Play, ArrowRight, BarChart3, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import eyeScience from "@/assets/eye-science.jpg";
import heroChild from "@/assets/hero-child.jpg";

const steps = [
  {
    icon: Film,
    num: "01",
    title: "Retrofittable Film",
    desc: "A patented optical film that can be applied to any existing spectacle lens, transforming it into a myopia control device.",
  },
  {
    icon: Box,
    num: "02",
    title: "Volume of Defocus",
    desc: "Precisely engineered defocus zones create the optical signals needed to slow axial elongation of the eye.",
  },
  {
    icon: Layers,
    num: "03",
    title: "Application Versatility",
    desc: "Compatible with all lens types — single vision, bifocal, or progressive — for maximum clinical flexibility.",
  },
  {
    icon: Globe,
    num: "04",
    title: "Universal Access",
    desc: "Designed to be affordable and deployable across diverse healthcare settings worldwide.",
  },
];

const clinicalData = [
  { label: "Myopia Progression Reduction", value: "Up to 60%" },
  { label: "Axial Length Control", value: "Significant" },
  { label: "Patient Compliance", value: "High" },
  { label: "Lens Compatibility", value: "Universal" },
];

export default function HowItWorks() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={eyeScience} alt="Eye science" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">The Technology</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              The Science of <span className="gradient-text">Sight Control</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understanding how MyoPREVA's patented neuro-optical technology works to control myopia progression in children.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">A step-by-step look at our breakthrough approach.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="glass rounded-2xl p-6 h-full hover-lift group relative overflow-hidden">
                  <span className="absolute top-4 right-4 text-5xl font-heading font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-b from-background to-teal-50/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Watch</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4">See MyoPREVA in Action</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Discover how our technology is transforming myopia care.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <img
                  src={heroChild}
                  alt="MyoPREVA video preview"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-strong w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} className="text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clinical Data */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Clinical Evidence</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {clinicalData.map((d, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center hover-lift">
                  <BarChart3 size={24} className="text-primary mx-auto mb-3" />
                  <p className="font-heading text-2xl font-bold gradient-text mb-1">{d.value}</p>
                  <p className="text-xs text-muted-foreground">{d.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold mb-6">Ready to Learn More?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/order"
                className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                Order Now <ArrowRight size={16} />
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
      </section>
    </div>
  );
}
