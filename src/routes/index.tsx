import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  HardHat,
  ShieldCheck,
  MapPin,
  Clock,
  Hammer,
  Layers,
  Mountain,
  Sprout,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { SERVICES, AUDIENCES } from "@/lib/site";
import heroHome from "@/assets/hero-home.jpg";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  tiefbau: Layers,
  erdbau: Mountain,
  abbruch: Hammer,
  galabau: Sprout,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiefbau Altenkirchen | Erdbau & Abbruch | FS-BAU GmbH" },
      { name: "description", content: "Tiefbau in Altenkirchen & Westerwald: Meisterbetrieb FS-BAU GmbH für Kanalbau, Hausanschlüsse, Erdbau, Abbruch und GalaBau — für Privat, Gewerbe und Kommunen." },
      { name: "keywords", content: "Tiefbau Altenkirchen, Tiefbauunternehmen Westerwald, Kanalbau Altenkirchen, Erdbau, Abbruch, GalaBau, Meisterbetrieb" },
      { property: "og:title", content: "Tiefbau Altenkirchen | Erdbau & Abbruch | FS-BAU GmbH" },
      { property: "og:description", content: "Tiefbau, Erdbau, Abbruch und GalaBau aus dem Kreis Altenkirchen. Präzise geplant, termintreu ausgeführt — regional und überregional." },
      { property: "og:url", content: "https://westerwald-builder-pro.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://westerwald-builder-pro.lovable.app/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroHome}
          alt="Baustelle im Westerwald — Bagger im Erdbau bei Dämmerung"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--background) 55%, transparent) 0%, color-mix(in oklab, var(--background) 85%, transparent) 60%, var(--background) 100%)" }}
          aria-hidden
        />
        <div
          className="absolute -top-40 -right-40 size-[640px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 60%)" }}
          aria-hidden
        />
        <div className="container-page relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-[color:var(--surface)]/60 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <ShieldCheck className="size-3.5 text-primary" />
              Meisterbetrieb · Kreis Altenkirchen · Westerwald
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
              <span className="text-gradient-primary">Tiefbau</span> in Altenkirchen
              <span className="block">& Westerwald.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              FS-BAU GmbH — Ihr Meisterbetrieb für Tiefbau, Erdbau, Abbruch
              und GalaBau im Kreis Altenkirchen. Präzise geplant, termintreu
              ausgeführt — für private Auftraggeber, Gewerbe und Kommunen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/kontakt">Projekt anfragen <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/leistungen">Leistungen entdecken</Link>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                { k: "Meisterbetrieb", v: "geprüfte Bauleitung" },
                { k: "Region", v: "Altenkirchen + überregional" },
                { k: "4 Gewerke", v: "aus einer Hand" },
                { k: "Termintreu", v: "verlässlich geliefert" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-xs uppercase tracking-wider text-primary">{s.k}</dt>
                  <dd className="mt-1 text-sm text-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="container-page py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Unsere Gewerke</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Vier Kernkompetenzen — ein Ansprechpartner.</h2>
          </div>
          <Link to="/leistungen" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5">
            Alle Leistungen ansehen <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.slug];
            return (
              <Link
                key={s.slug}
                to="/leistungen"
                hash={s.slug}
                className="group relative flex flex-col rounded-2xl border border-border bg-[color:var(--surface)] p-6 transition-all hover:border-primary/60 hover:bg-[color:var(--surface-elevated)]"
              >
                <span className="grid place-items-center size-11 rounded-lg bg-primary/10 text-primary mb-5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary">
                  Mehr erfahren <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MEISTER USPs */}
      <section className="border-y border-border/70 bg-[color:var(--surface)]/50">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Warum FS-BAU GMBH</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Meisterqualität, die man auf der Baustelle sieht.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Als Meisterbetrieb stehen wir mit unserem Namen für jede ausgeführte Leistung.
              Geprüfte Bauleitung, qualifizierte Eigenmitarbeiter und ein moderner Maschinenpark
              sind für uns Grundvoraussetzung — nicht Bonus.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HardHat, title: "Meisterqualifikation", text: "Bauleitung durch geprüften Bau-Meister. Verbindliche Qualitätsstandards auf jeder Baustelle." },
              { icon: MapPin, title: "Regional verwurzelt", text: "Aus dem Kreis Altenkirchen — kurze Wege, schnelle Reaktion, persönliche Ansprechpartner." },
              { icon: ShieldCheck, title: "Sicher & vergabekonform", text: "SCC/SiGeKo-konforme Arbeitsweise, geeignet für Ausschreibungen der öffentlichen Hand." },
              { icon: Clock, title: "Termintreu", text: "Realistische Bauzeitenpläne und verbindliche Zusagen — kein Wunschdenken, sondern Handwerk." },
            ].map((u) => (
              <div key={u.title} className="rounded-xl border border-border bg-background/60 p-6">
                <u.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold">{u.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="container-page py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Für wen wir bauen</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Private, Gewerbe und Kommunen.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vom Einfamilienhaus-Anschluss bis zur kommunalen Kanalbau-Maßnahme — wir
            passen Organisation, Dokumentation und Maschineneinsatz an Ihr Vorhaben an.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <div key={a.key} className="rounded-2xl border border-border bg-[color:var(--surface)] p-7">
              <h3 className="font-display text-xl font-semibold">{a.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              <ul className="mt-5 space-y-2">
                {a.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="anfrage" className="border-t border-border/70 bg-[color:var(--surface)]/40">
        <div className="container-page py-20 md:py-24 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Direkte Anfrage</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Sprechen Sie mit dem Meisterbetrieb.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Beschreiben Sie kurz Ihr Vorhaben — wir melden uns innerhalb von
              1–2 Werktagen mit einer ehrlichen Ersteinschätzung. Keine Schein-Angebote,
              kein Verkaufsdruck.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Antwort innerhalb von 1–2 Werktagen", "Vor-Ort-Termin nach Abstimmung", "Transparente Kostenstruktur"].map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-primary mt-0.5" /> <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
