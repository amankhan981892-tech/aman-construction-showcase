import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Award, Heart, Target, Users } from "lucide-react";
import heroImg from "@/assets/service-design.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aman Construction & Interior" },
      { name: "description", content: "Learn about Aman Construction & Interior — a Greater Noida-based team delivering construction and interior projects with craftsmanship and integrity." },
      { property: "og:title", content: "About Aman Construction & Interior" },
      { property: "og:description", content: "A Greater Noida-based team built on craftsmanship, transparency and trust." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">About Us</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-3xl">Built on craftsmanship, trust and an honest day's work.</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">Aman Construction & Interior is a family-run firm based in Greater Noida, dedicated to delivering construction and interior projects that families and businesses can rely on for decades.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2 items-center">
        <img src={heroImg} alt="Architectural blueprints and tools" loading="lazy" width={1280} height={960} className="rounded-xl shadow-[var(--shadow-soft)] w-full object-cover" />
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
          <p className="mt-4 text-muted-foreground">Founded over a decade ago by Muntyaj Khan, Aman Construction & Interior began as a small contracting team in Greater Noida. Today, we're a multi-disciplinary team of engineers, designers, and skilled craftsmen — but the values haven't changed: do honest work, respect the budget, finish on time.</p>
          <p className="mt-4 text-muted-foreground">From compact apartments to commercial buildings, we approach every project with the same commitment to detail. We listen first, plan carefully, and build with materials we'd happily use in our own homes.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Work with us</Link>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-center">What we stand for</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: Award, t: "Craftsmanship", d: "Every joint, finish and detail done right." },
              { icon: Heart, t: "Integrity", d: "Transparent quotes and zero shortcuts." },
              { icon: Target, t: "Reliability", d: "Timelines we keep — and progress you can see." },
              { icon: Users, t: "Partnership", d: "We treat your project like our own." },
            ].map((v) => (
              <div key={v.t} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><v.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-semibold text-foreground">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
