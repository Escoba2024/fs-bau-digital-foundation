import { Link } from "@tanstack/react-router";
import { HardHat, Mail, Phone, MapPin } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/70 bg-[color:var(--surface)]/40">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <span className="grid place-items-center size-9 rounded-md bg-primary text-primary-foreground">
              <HardHat className="size-5" />
            </span>
            <span className="font-display text-lg font-bold">FS-BAU GmbH</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Meisterbetrieb für Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen — regional verwurzelt, überregional aktiv.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">Leistungen</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/leistungen"
                  hash={s.slug}
                  className="hover:text-foreground transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">Unternehmen</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/ueber-uns" className="hover:text-foreground">Über uns</Link></li>
            <li><Link to="/kontakt" className="hover:text-foreground">Kontakt & Anfrage</Link></li>
            <li><Link to="/impressum" className="hover:text-foreground">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5"><MapPin className="size-4 mt-0.5 text-primary shrink-0" /> <span>{SITE.address.street}<br />{SITE.address.zip} {SITE.address.city}</span></li>
            <li className="flex gap-2.5"><Phone className="size-4 mt-0.5 text-primary shrink-0" /> <span>{SITE.phone}</span></li>
            <li className="flex gap-2.5"><Mail className="size-4 mt-0.5 text-primary shrink-0" /> <a className="hover:text-foreground" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} FS-BAU GmbH — Meisterbetrieb · {SITE.region}</p>
          <p>Tiefbau · Erdbau · Abbruch · GalaBau</p>
        </div>
      </div>
    </footer>
  );
}
