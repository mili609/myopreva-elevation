import { Link } from "react-router-dom";
import { Target, Lightbulb, HeartPulse, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import clinicInterior from "@/assets/clinic-interior.jpg";
import researchLab from "@/assets/research-lab.jpg";
import doctorConsultation from "@/assets/doctor-consultation.jpg";

const sections = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To democratize myopia control by developing affordable, retrofittable neuro-optical solutions that can be universally adopted across all healthcare settings.",
    image: clinicInterior,
    imageAlt: "Modern ophthalmology clinic interior",
    dark: false,
  },
  {
    icon: Lightbulb,
    title: "Innovation Story",
    desc: "Born from years of ophthalmic research in Singapore, MyoPREVA represents a paradigm shift in how we approach childhood myopia. Our patented film technology transforms any spectacle lens into a myopia control device.",
    image: researchLab,
    imageAlt: "Research laboratory",
    dark: true,
  },
  {
    icon: HeartPulse,
    title: "Clinical Precision",
    desc: "Every MyoPREVA product is designed with meticulous attention to optical precision. Our volume-of-defocus approach has been developed through extensive clinical research and validated through rigorous testing protocols.",
    image: doctorConsultation,
    imageAlt: "Doctor consulting with patient",
    dark: false,
  },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero — DARK */}
      <section className="py-24 relative overflow-hidden surface-dark">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, hsla(210,100%,52%,0.08) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About MyoPREVA</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6" style={{ color: "hsl(220 20% 95%)" }}>
              A Legacy of <span className="gradient-text">Clarity</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(220 15% 58%)" }}>
              Pioneering neuro-optical innovation from Singapore to protect children's vision worldwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={i} className={`py-24 ${section.dark ? "surface-dark" : "bg-background"}`}>
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="rounded-3xl overflow-hidden shadow-xl" style={section.dark ? { boxShadow: "0 25px 60px -15px hsla(0,0%,0%,0.4)" } : {}}>
                  <img src={section.image} alt={section.imageAlt} className="w-full h-80 object-cover" loading="lazy" width={800} height={600} />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <section.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold" style={{ color: section.dark ? "hsl(220 20% 95%)" : undefined }}>{section.title}</h2>
                </div>
                <p className="leading-relaxed text-lg" style={{ color: section.dark ? "hsl(220 15% 58%)" : "hsl(220 10% 44%)" }}>{section.desc}</p>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Timeline — LIGHT */}
      <section className="py-28 bg-gradient-to-b from-background via-slate-50 to-background relative">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, hsla(210, 100%, 52%, 0.08), transparent 50%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full" style={{ background: "hsla(210, 100%, 52%, 0.08)", border: "1px solid hsla(210, 100%, 52%, 0.15)" }}>Our Journey</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 text-foreground">
                Innovation Through the Years
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {[
              { year: "2015", title: "Research Begins", desc: "Initial research into neuro-optical innovations for myopia control" },
              { year: "2019", title: "Breakthrough Discovery", desc: "Patent-pending film technology validated through clinical trials" },
              { year: "2022", title: "Clinical Launch", desc: "First clinical applications with practitioner partnerships" },
              { year: "2025", title: "Global Expansion", desc: "Scaling operations to serve families worldwide" },
            ].map((milestone, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative mb-12 pb-12 border-b border-slate-200 last:border-b-0 hover-scale">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-glow">
                        {i + 1}
                      </div>
                      {i < 3 && <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent mt-2" />}
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-semibold text-primary mb-1">{milestone.year}</p>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote — DARK */}
      <section className="py-24 surface-dark relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, hsla(168,60%,44%,0.05) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="glass-dark-strong rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto relative border" style={{ borderColor: "hsla(210,100%,52%,0.1)" }}>
              <Quote size={48} className="text-primary/20 mx-auto mb-6" />
              <blockquote className="font-heading text-xl md:text-2xl font-medium leading-relaxed mb-6" style={{ color: "hsl(220 20% 90%)" }}>
                "Every child deserves clear vision. MyoPREVA is our commitment to making world-class myopia control accessible to families everywhere, regardless of their location or economic circumstances."
              </blockquote>
              <p className="text-primary font-semibold">Founder, MyoPREVA</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — LIGHT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Join Our Mission</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Whether you're a parent or practitioner, discover how MyoPREVA can make a difference.
            </p>
            <Link
              to="/get-started"
              className="btn-shine gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm inline-block transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              Get Started
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
