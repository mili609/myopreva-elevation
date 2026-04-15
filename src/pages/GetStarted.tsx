import { useState } from "react";
import { User, Stethoscope, Upload, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "patient" | "practitioner";

export default function GetStarted() {
  const [tab, setTab] = useState<Tab | null>(null);

  return (
    <div className="pt-24">
      {/* Hero — DARK */}
      <section className="py-20 relative overflow-hidden surface-dark">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, hsla(210,100%,52%,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, hsla(168,60%,44%,0.08) 0%, transparent 60%)" }} />
        <div className="absolute top-40 -right-32 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full" style={{ background: "hsla(210, 100%, 52%, 0.1)", border: "1px solid hsla(210, 100%, 52%, 0.2)" }}>Welcome</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6" style={{ color: "hsl(220 20% 95%)" }}>
              Get Started with <span className="gradient-text">MyoPREVA</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(220 15% 65%)" }}>
              Choose your pathway to join our community of patients and practitioners dedicated to advancing myopia control.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content — LIGHT */}
      <section className="py-20 bg-background min-h-[60vh]">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {!tab && (
              <motion.div
                key="selection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ScrollReveal>
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.button
                      onClick={() => setTab("patient")}
                      className="group relative overflow-hidden glass-strong rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-neon border border-primary/10 hover:border-primary/30"
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 shadow-lg">
                          <User size={32} className="text-primary-foreground" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Patient Access</h3>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          Submit your clinical data and get started with MyoPREVA treatment in minutes.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-primary text-sm font-semibold">
                          Begin <ChevronRight size={16} />
                        </div>
                      </div>
                    </motion.button>

                    <motion.button
                      onClick={() => setTab("practitioner")}
                      className="group relative overflow-hidden glass-strong rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-neon border border-accent/10 hover:border-accent/30"
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 shadow-lg" style={{ background: "linear-gradient(135deg, hsl(168, 60%, 44%), hsl(180, 65%, 50%))" }}>
                          <Stethoscope size={32} className="text-white" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Practitioner Registration</h3>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          Register as a certified practitioner and expand your myopia control practice.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-accent text-sm font-semibold">
                          Register <ChevronRight size={16} />
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </ScrollReveal>
              </motion.div>
            )}

            {tab && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto"
              >
                <button
                  onClick={() => setTab(null)}
                  className="text-sm text-primary font-medium mb-8 hover:underline flex items-center gap-1 transition-colors hover:text-primary/80"
                >
                  ← Back to options
                </button>
                
                <motion.div 
                  className="glass-strong rounded-3xl p-8 md:p-12 shadow-neon border border-primary/10 overflow-hidden relative"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                  <div className="relative z-10">
                    {tab === "patient" ? <PatientForm /> : <PractitionerForm />}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

function PatientForm() {
  const [dragActive, setDragActive] = useState(false);
  return (
    <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
      <div>
        <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">Patient Access Form</h3>
        <p className="text-sm text-muted-foreground">Complete your information to begin treatment</p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div>
        <label className="block text-sm font-semibold mb-3 text-foreground">Upload Fundus Photos</label>
        <div
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer relative overflow-hidden ${
            dragActive ? "border-primary bg-primary/8" : "border-border hover:border-primary/50 hover:bg-primary/3"
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
        >
          <motion.div animate={dragActive ? { scale: 1.1 } : { scale: 1 }} transition={{ duration: 0.2 }}>
            <Upload size={40} className="text-primary mx-auto mb-4" />
            <p className="text-sm font-semibold text-foreground mb-1">Drag & drop files here</p>
            <p className="text-xs text-muted-foreground">DICOM, PNG, JPEG (File size &lt; 5MB)</p>
          </motion.div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <InputField label="Patient ID" placeholder="Enter patient ID" />
        <InputField label="Last Name" placeholder="Enter last name" />
      </div>
      <InputField label="Email Address" placeholder="patient@email.com" type="email" />

      <div className="pt-2">
        <h4 className="font-heading font-semibold text-sm text-foreground mb-6">Clinical Measurements</h4>
        <div className="grid grid-cols-2 gap-5 mb-2">
          <InputField label="R. Refraction (D)" placeholder="-2.50" />
          <InputField label="R. Axial Length (mm)" placeholder="24.5" />
          <InputField label="L. Refraction (D)" placeholder="-2.75" />
          <InputField label="L. Axial Length (mm)" placeholder="24.3" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3 text-foreground">Cycloplegia Applied?</label>
        <div className="flex gap-6">
          {["Yes", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer text-sm text-foreground hover:text-primary transition-colors">
              <input type="radio" name="cycloplegia" value={opt} className="accent-primary w-4 h-4 cursor-pointer" />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3 text-foreground">Treatment Plan</label>
        <select className="w-full glass-strong bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all hover:border-primary/30">
          <option>MyoPREVA Premium</option>
          <option>MyoPREVA Standard</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3 text-foreground">Other Combination Treatment?</label>
        <textarea
          className="w-full glass-strong bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all hover:border-primary/30 min-h-[100px] resize-none"
          placeholder="Describe any additional treatments..."
        />
      </div>

      <motion.button 
        type="submit" 
        className="w-full btn-shine gradient-primary text-primary-foreground py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-glow hover:scale-[1.02] mt-6"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        Continue
      </motion.button>
    </form>
  );
}

function PractitionerForm() {
  return (
    <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
      <div>
        <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">Practitioner Registration</h3>
        <p className="text-sm text-muted-foreground">Join our network of certified practitioners</p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="grid md:grid-cols-2 gap-5">
        <InputField label="First Name" placeholder="Enter first name" />
        <InputField label="Last Name" placeholder="Enter last name" />
      </div>
      <InputField label="Email Address" placeholder="doctor@clinic.com" type="email" />

      <div className="pt-2">
        <h4 className="font-heading font-semibold text-sm text-foreground mb-6">Practice Information</h4>
        <InputField label="Practice Name" placeholder="Enter practice name" />
        <div className="mt-5">
          <InputField label="Practice Address" placeholder="Enter full address" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3 text-foreground">Your Profession</label>
        <select className="w-full glass-strong bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all hover:border-primary/30">
          <option>Ophthalmologist</option>
          <option>Optometrist</option>
          <option>Optician</option>
        </select>
      </div>

      <InputField label="Your Country" placeholder="Enter your country" />

      <motion.button 
        type="submit" 
        className="w-full btn-shine gradient-primary text-primary-foreground py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-glow hover:scale-[1.02] mt-6"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        Register
      </motion.button>
    </form>
  );
}

function InputField({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-3 text-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full glass-strong bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all hover:border-primary/30"
      />
    </div>
  );
}
