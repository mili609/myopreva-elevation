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
  },
  {
    icon: Lightbulb,
    title: "Innovation Story",
    desc: "Born from years of ophthalmic research in Singapore, MyoPREVA represents a paradigm shift in how we approach childhood myopia. Our patented film technology transforms any spectacle lens into a myopia control device.",
    image: researchLab,
    imageAlt: "Research laboratory",
  },
  {
    icon: HeartPulse,
    title: "Clinical Precision",
    desc: "Every MyoPREVA product is designed with meticulous attention to optical precision. Our volume-of-defocus approach has been developed through extensive clinical research and validated through rigorous testing protocols.",
    image: doctorConsultation,
    imageAlt: "Doctor consulting with patient",
  },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 to-background" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About MyoPREVA</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              A Legacy of <span className="gradient-text">Clarity</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pioneering neuro-optical innovation from Singapore to protect children's vision worldwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={i} className="py-20">
          <div className="container mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "direction-rtl" : ""}`}>
              <ScrollReveal className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src={section.image} alt={section.imageAlt} className="w-full h-80 object-cover" loading="lazy" width={800} height={600} />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                    <section.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">{section.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">{section.desc}</p>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Founder Quote */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass-strong rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto relative">
              <Quote size={48} className="text-primary/20 mx-auto mb-6" />
              <blockquote className="font-heading text-xl md:text-2xl font-medium leading-relaxed mb-6 text-foreground">
                "Every child deserves clear vision. MyoPREVA is our commitment to making world-class myopia control accessible to families everywhere, regardless of their location or economic circumstances."
              </blockquote>
              <p className="text-primary font-semibold">Founder, MyoPREVA</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Whether you're a parent or practitioner, discover how MyoPREVA can make a difference.
            </p>
            <Link
              to="/get-started"
              className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm inline-block transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              Get Started
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
