import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Building2, PaintRoller, Hammer, Ruler, ShieldCheck, Users, ArrowRight } from "lucide-react";
import interiorImg from "@/assets/service-interior.jpg";

const services = [
  { icon: Building2, t: "Civil Construction", d: "Residential, commercial and industrial buildings — designed and constructed to last for generations.", points: ["Foundations & RCC structures", "Brickwork & plastering", "Site supervision"] },
  { icon: PaintRoller, t: "Interior Design", d: "Tailored interiors blending function and aesthetics for homes, offices and retail spaces.", points: ["Modular kitchens & wardrobes", "False ceilings & lighting", "Furnishings & finishes"] },
  { icon: Hammer, t: "Renovation & Repair", d: "Refresh, modernise or repair existing structures with minimal disruption to your routine.", points: ["Bathroom & kitchen upgrades", "Waterproofing", "Structural repairs"] },
  { icon: Ruler, t: "Architectural Planning", d: "Smart, code-compliant drawings and layouts — handled end-to-end including local approvals.", points: ["2D/3D drawings", "Vastu-compliant layouts", "Authority approvals"] },
  { icon: ShieldCheck, t: "Turnkey Projects", d: "One team, one contract — from raw plot to handover-ready space.", points: ["Single point of accountability", "Fixed-price options", "Quality-assured delivery"] },
  { icon: Users, t: "Project Consultation", d: "Free site visits and honest assessments before you commit a single rupee.", points: ["Cost estimation", "Material guidance", "Timeline planning"] },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aman Construction & Interior" },
      { name: "description", content: "Civil construction, interior design, renovation, architectural planning and turnkey projects across Greater Noida and the NCR." },
      { property: "og:title", content: "Our Services — Aman Construction & Interior" },
      { property: "og:description", content: "Construction, interiors, renovation and turnkey project services in Greater Noida." },
      { property: "og:image", content: interiorImg },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Services</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-3xl">Everything you need to build, renovate, or reimagine a space.</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">Whether it's a single-room makeover or a multi-storey build, our team handles it with the same care and accountability.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.t} className="rounded-xl border border-border bg-card p-7 hover:shadow-[var(--shadow-soft)] transition">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><s.icon className="h-5 w-5" /></div>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-secondary/60 border border-border p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Not sure where to start?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Tell us about your space — we'll visit, advise, and share an honest plan with no obligation.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Book a free consultation <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
