import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aman Construction & Interior" },
      { name: "description", content: "Contact Aman Construction & Interior in Greater Noida. Call +91 98189 25378 or email muntyajkhan5546@gmail.com for a free consultation." },
      { property: "og:title", content: "Contact Aman Construction & Interior" },
      { property: "og:description", content: "Get in touch for a free consultation in Greater Noida and NCR." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:muntyajkhan5546@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Contact</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-3xl">Let's build something great together.</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">Free consultation and on-site visit. Drop us a message or call directly — we usually respond within a few hours.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          {[
            { icon: MapPin, t: "Office Address", d: "C-218/219 G, Sector Omicron-I, Greater Noida (G.B. Nagar), Uttar Pradesh" },
            { icon: Phone, t: "Call Us", d: "+91 98189 25378  ·  +91 99534 73724", href: "tel:+919818925378" },
            { icon: Mail, t: "Email", d: "muntyajkhan5546@gmail.com", href: "mailto:muntyajkhan5546@gmail.com" },
            { icon: Clock, t: "Working Hours", d: "Mon – Sat · 9:00 AM – 7:00 PM" },
          ].map((c) => (
            <div key={c.t} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0"><c.icon className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold text-foreground">{c.t}</div>
                {c.href ? (
                  <a href={c.href} className="mt-1 text-sm text-muted-foreground hover:text-primary break-all">{c.d}</a>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={submit} className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]">
          <h2 className="text-xl font-bold text-foreground">Send us a message</h2>
          <p className="text-sm text-muted-foreground mt-1">Tell us briefly about your project.</p>

          <div className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Phone" type="tel" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <div>
              <label className="text-sm font-medium text-foreground">Project details</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell us about your space, budget and timeline…"
              />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Send Message
            </button>
            {sent && <p className="text-sm text-accent">Opening your email app… If nothing happens, please call us directly.</p>}
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}{required && <span className="text-accent"> *</span>}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
