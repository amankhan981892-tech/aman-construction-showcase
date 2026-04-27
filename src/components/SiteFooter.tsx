import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, HardHat } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-dark)] text-primary-foreground/90 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <HardHat className="h-5 w-5" />
            </span>
            <span className="text-base font-bold tracking-wide">AMAN CONSTRUCTION & INTERIOR</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 max-w-md">
            Building dependable structures and crafting beautiful interiors across Greater Noida and the NCR. Honest work, on time, every time.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent" /><span>C-218/219 G, Sector Omicron-I, Greater Noida (G.B. Nagar)</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-accent" /><a href="tel:+919818925378" className="hover:text-accent">+91 98189 25378</a></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-accent" /><a href="tel:+919953473724" className="hover:text-accent">+91 99534 73724</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-accent" /><a href="mailto:muntyajkhan5546@gmail.com" className="hover:text-accent break-all">muntyajkhan5546@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Aman Construction & Interior. All rights reserved.</p>
          <p>Crafted with care in Greater Noida.</p>
        </div>
      </div>
    </footer>
  );
}
