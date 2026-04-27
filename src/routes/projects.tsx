import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import villaImg from "@/assets/project-villa.jpg";
import officeImg from "@/assets/project-office.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import heroImg from "@/assets/hero-construction.jpg";
import designImg from "@/assets/service-design.jpg";

const projects = [
  { img: villaImg, t: "Contemporary Villa", l: "Greater Noida", c: "Residential" },
  { img: officeImg, t: "Boardroom & Workspace", l: "Sector 62, Noida", c: "Commercial" },
  { img: kitchenImg, t: "Walnut Designer Kitchen", l: "Omicron-I", c: "Interior" },
  { img: interiorImg, t: "Sunlit Living Room", l: "Pari Chowk", c: "Interior" },
  { img: heroImg, t: "Apartment Complex", l: "Yamuna Expressway", c: "Construction" },
  { img: designImg, t: "Architectural Planning", l: "Multiple Sites", c: "Design" },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aman Construction & Interior" },
      { name: "description", content: "Explore recent construction and interior design projects by Aman Construction & Interior across Greater Noida and the NCR." },
      { property: "og:title", content: "Our Projects — Aman Construction & Interior" },
      { property: "og:description", content: "A selection of homes, offices and interiors we've crafted." },
      { property: "og:image", content: villaImg },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Portfolio</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-3xl">Spaces we've built and shaped.</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">A glimpse of our recent work across construction and interior design.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.t} className="group rounded-xl overflow-hidden border border-border bg-card">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.t} loading="lazy" width={1280} height={960} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-5">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-accent">{p.c}</span>
              <h3 className="mt-1 font-semibold text-foreground">{p.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.l}</p>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
