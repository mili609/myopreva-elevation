import { useState, useCallback } from "react";
import { Upload, User, Stethoscope } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import doctorConsultation from "@/assets/doctor-consultation.jpg";
import doctorTablet from "@/assets/doctor-tablet.jpg";

type Tab = "patient" | "practitioner";

export default function OrderNow() {
  const [tab, setTab] = useState<Tab>("patient");

  return (
    <div className="pt-24">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Order MyoPREVA</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
                Have Access to <span className="gradient-text">MyoPREVA</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Be part of the expert panel to fit MyoPREVA™
              </p>
            </div>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal>
            <div className="flex justify-center mb-12">
              <div className="glass-strong rounded-full p-1.5 inline-flex gap-1">
                <button
                  onClick={() => setTab("patient")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    tab === "patient"
                      ? "gradient-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <User size={16} /> I am a Patient
                </button>
                <button
                  onClick={() => setTab("practitioner")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    tab === "practitioner"
                      ? "gradient-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Stethoscope size={16} /> I am a Practitioner
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <div
                key={tab}
                className="glass-strong rounded-3xl p-8 md:p-10 animate-in fade-in duration-500"
              >
                {tab === "patient" ? <PatientForm /> : <PractitionerForm />}
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:block">
              <ScrollReveal>
                <div className="rounded-3xl overflow-hidden shadow-xl sticky top-32">
                  <img
                    src={tab === "patient" ? doctorConsultation : doctorTablet}
                    alt={tab === "patient" ? "Doctor consultation" : "Doctor with tablet"}
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PatientForm() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <h3 className="font-heading text-xl font-bold mb-6">Patient Order Form</h3>

      {/* Upload */}
      <div>
        <label className="block text-sm font-medium mb-2">Upload Fundus Photos</label>
        <div
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer ${
            dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
        >
          <Upload size={32} className="text-primary mx-auto mb-3" />
          <p className="text-sm font-medium">Drag & drop files here</p>
          <p className="text-xs text-muted-foreground mt-1">DICOM, PNG, JPEG (File size &lt; 5MB)</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <InputField label="Patient ID" placeholder="Enter patient ID" />
        <InputField label="Last Name" placeholder="Enter last name" />
      </div>
      <InputField label="Email Address" placeholder="patient@email.com" type="email" />

      <div>
        <h4 className="font-heading font-semibold text-sm mb-3">Clinical Measurements</h4>
        <div className="grid grid-cols-2 gap-4">
          <InputField label="R. Refraction (D)" placeholder="e.g. -2.50" />
          <InputField label="R. Axial Length (mm)" placeholder="e.g. 24.5" />
          <InputField label="L. Refraction (D)" placeholder="e.g. -2.75" />
          <InputField label="L. Axial Length (mm)" placeholder="e.g. 24.3" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Cycloplegia Applied?</label>
        <div className="flex gap-4">
          {["Yes", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm">
              <input type="radio" name="cycloplegia" value={opt} className="accent-primary w-4 h-4" />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Treatment Plan</label>
        <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
          <option>MyoPREVA Premium</option>
          <option>MyoPREVA Standard</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Other Combination Treatment?</label>
        <textarea
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all min-h-[80px] resize-none"
          placeholder="Describe any additional treatments..."
        />
      </div>

      <button
        type="submit"
        className="w-full gradient-primary text-primary-foreground py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
      >
        Continue to Order
      </button>
    </form>
  );
}

function PractitionerForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <h3 className="font-heading text-xl font-bold mb-6">Practitioner Registration</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <InputField label="First Name" placeholder="Enter first name" />
        <InputField label="Last Name" placeholder="Enter last name" />
      </div>
      <InputField label="Email Address" placeholder="doctor@clinic.com" type="email" />

      <h4 className="font-heading font-semibold text-sm pt-2">Practice Information</h4>
      <InputField label="Practice Name" placeholder="Enter practice name" />
      <InputField label="Practice Address" placeholder="Enter full address" />

      <div>
        <label className="block text-sm font-medium mb-2">Your Profession</label>
        <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
          <option>Ophthalmologist</option>
          <option>Optometrist</option>
          <option>Optician</option>
        </select>
      </div>

      <InputField label="Your Country" placeholder="Enter your country" />

      <button
        type="submit"
        className="w-full gradient-primary text-primary-foreground py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
      >
        Register
      </button>
    </form>
  );
}

function InputField({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
      />
    </div>
  );
}
