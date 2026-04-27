import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, CheckCircle2, Building2, PaintRoller, Hammer, Ruler, ShieldCheck, Users, Phone } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import villaImg from "@/assets/project-villa.jpg";
import officeImg from "@/assets/project-office.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Construction & Interior — Builders in Greater Noida" },
      { name: "description", content: "Aman Construction & Interior delivers reliable construction and elegant interior design services in Greater Noida, NCR. Get a free quote today." },
      { property: "og:title", content: "Aman Construction & Interior — Builders in Greater Noida" },
      { property: "og:description", content: "Construction and interior design services in Greater Noida. Honest, on-time, master-crafted." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Construction site at golden hour with cranes"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Greater Noida · Since 2012
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Building spaces that <span className="text-accent">stand the test of time.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-primary-foreground/85 max-w-xl">
              From foundation to finishing — we craft homes, offices, and interiors with honest workmanship and an eye for detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "120+", l: "Projects Delivered" },
            { n: "12+", l: "Years of Experience" },
            { n: "85+", l: "Happy Clients" },
            { n: "40+", l: "Skilled Craftsmen" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-primary">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">What we do</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">A complete partner for construction & interiors</h2>
          <p className="mt-4 text-muted-foreground">From breaking ground to handing over the keys, we handle every step with the same care and craftsmanship.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Building2, t: "Civil Construction", d: "Residential, commercial and industrial buildings built to last." },
            { icon: PaintRoller, t: "Interior Design", d: "Bespoke interiors that balance function, comfort and style." },
            { icon: Hammer, t: "Renovation & Repair", d: "Modernise existing spaces with minimal disruption." },
            { icon: Ruler, t: "Architectural Planning", d: "Smart layouts, drawings and approvals handled end-to-end." },
            { icon: ShieldCheck, t: "Turnkey Projects", d: "One contract, one team — from concept to completion." },
            { icon: Users, t: "Project Consultation", d: "Honest advice, transparent costing and timelines you can trust." },
          ].map((s) => (
            <div key={s.t} className="group rounded-xl border border-border bg-card p-6 hover:shadow-[var(--shadow-soft)] transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT FEATURE */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <img src={interiorImg} alt="Modern interior living room" loading="lazy" width={1280} height={960} className="rounded-xl shadow-[var(--shadow-soft)] object-cover w-full h-full" />
            <div className="absolute -bottom-6 -right-4 hidden md:block bg-card border border-border rounded-lg p-4 shadow-[var(--shadow-soft)] w-56">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground">On-time handovers across our last 30 projects.</div>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Why choose us</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">Quality you can feel in every corner.</h2>
            <p className="mt-4 text-muted-foreground">Backed by a hands-on team of engineers, designers and master craftsmen, we treat every project as if it were our own home.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Transparent pricing — no hidden costs",
                "Vetted materials from trusted brands",
                "Dedicated project manager on every site",
                "Clear timelines with weekly progress updates",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Recent Work</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">Projects we're proud of</h2>
          </div>
          <Link to="/projects" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { img: villaImg, t: "Modern Villa", l: "Greater Noida" },
            { img: officeImg, t: "Corporate Office", l: "Sector 62, Noida" },
            { img: kitchenImg, t: "Designer Kitchen", l: "Omicron, Greater Noida" },
          ].map((p) => (
            <div key={p.t} className="group rounded-xl overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" width={1280} height={960} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{p.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.l}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-[var(--brand-dark)] text-primary-foreground p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Have a project in mind? Let's talk.</h2>
            <p className="mt-2 text-primary-foreground/75">Free consultation and on-site visit across Greater Noida & NCR.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919818925378" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90">
              <Phone className="h-4 w-4" /> Call 98189 25378
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold hover:bg-white/10">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
