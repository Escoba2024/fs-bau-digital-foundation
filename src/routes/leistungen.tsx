import { createFileRoute, Link } from "@tanstack/react-router";
import { Hammer, Layers, Mountain, Sprout, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTiefbau from "@/assets/hero-tiefbau.jpg";
import heroErdbau from "@/assets/hero-erdbau.jpg";
import heroAbbruch from "@/assets/hero-abbruch.jpg";
import heroGalabau from "@/assets/hero-galabau.jpg";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen Tiefbau Altenkirchen: Erdbau, Abbruch, GalaBau | FS-BAU GmbH" },
      { name: "description", content: "Tiefbau in Altenkirchen, Erdbau, Abbruch und GalaBau aus einer Hand. Kanalbau, Hausanschlüsse, Baugruben und Pflasterarbeiten vom Meisterbetrieb FS-BAU GmbH." },
      { name: "keywords", content: "Tiefbau Altenkirchen, Kanalbau, Hausanschluss, Erdbau Westerwald, Abbruchunternehmen, GalaBau" },
      { property: "og:title", content: "Tiefbau Altenkirchen & weitere Leistungen — FS-BAU GmbH" },
      { property: "og:description", content: "Vier Gewerke aus einer Hand: Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen. Fachlich fundiert, termintreu ausgeführt." },
      { property: "og:url", content: "https://westerwald-builder-pro.lovable.app/leistungen" },
    ],
    links: [{ rel: "canonical", href: "https://westerwald-builder-pro.lovable.app/leistungen" }],
  }),
  component: ServicesPage,
});

type Service = {
  slug: string;
  title: string;
  lead: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string[];
  bullets: string[];
  audiences: { label: string; text: string }[];
};

const SERVICES: Service[] = [
  {
    slug: "tiefbau",
    title: "Tiefbau",
    icon: Layers,
    image: heroTiefbau,
    lead: "Kanalbau, Hausanschlüsse, Leitungs- und Wegebau — vom Aufmaß bis zur Abnahme.",
    description: [
      "Tiefbau ist das Fundament jeder Erschließung. Die FS-BAU GmbH plant und realisiert Tiefbauarbeiten für Wohn-, Gewerbe- und Infrastrukturprojekte im Kreis Altenkirchen und überregional. Wir verstehen die örtlichen Bodenverhältnisse im Westerwald und arbeiten eng mit Netzbetreibern, Kommunen und Planungsbüros zusammen.",
      "Unsere Leistung umfasst die offene Bauweise im Kanal- und Leitungsbau, den Bau von Hausanschlüssen für alle Medien sowie den anschließenden Wegebau. Aufgrabungen werden DIN-gerecht wiederhergestellt — inklusive lagegerechter Dokumentation und Bestandsplänen.",
    ],
    bullets: [
      "Kanalbau: Misch-, Trenn- und Schmutzwassersysteme inkl. Schachtbau",
      "Hausanschlüsse für Strom, Wasser, Gas, Telekommunikation und Glasfaser",
      "Wegebau: Straßen-, Hof- und Zufahrtsbau inkl. Frostschutz- und Tragschichten",
      "Leitungsbau und Querungen in offener Bauweise",
      "Schachtbau, Schachtsanierung und Anbindung an Bestandsnetze",
      "Abnahme- und Bestandsdokumentation für Auftraggeber und Netzbetreiber",
    ],
    audiences: [
      { label: "Privat", text: "Komplettanschluss bei Neubau und Sanierung — von der Grundstücksgrenze bis zum Haus." },
      { label: "Gewerbe", text: "Erschließung neuer Gewerbeflächen, Erweiterung bestehender Hof- und Lagerflächen." },
      { label: "Kommune", text: "Kanalbau, Sanierung im Bestand und kommunaler Straßenbau nach ZTV-konformer Ausführung." },
    ],
  },
  {
    slug: "erdbau",
    title: "Erdbau",
    icon: Mountain,
    image: heroErdbau,
    lead: "Baugrubenaushub, Geländemodellierung und Bodenverbesserung — präzise, sicher, termintreu.",
    description: [
      "Im Erdbau liefern wir die Grundlage für jedes Bauvorhaben: vom geböschten oder verbauten Baugrubenaushub über die Geländemodellierung bis zur Verdichtung des Planums. Wir arbeiten mit moderner Vermessungstechnik und 3D-Steuerung, damit Maße und Höhen vom ersten Spatenstich an stimmen.",
      "Bodenaustausch, Bodenverbesserung und der Einbau von Frostschutzschichten gehören ebenso zu unserem Leistungsumfang wie das fachgerechte Anlegen von Lärm- und Sichtschutzwällen. Aushub-, Recycling- und Fremdmaterialien disponieren wir transparent und nachweispflichtig.",
    ],
    bullets: [
      "Baugrubenaushub inklusive Verbau (Trägerbohlwand, Spundwand in Kooperation)",
      "Geländemodellierung, Profilierung und Wallbau",
      "Bodenaustausch und Bodenverbesserung mit Bindemitteln",
      "Verdichtungsarbeiten und Frostschutzschicht-Einbau",
      "Erdmassentransport mit eigener Logistik",
      "Vermessung, 3D-Maschinensteuerung und Massenbilanz",
    ],
    audiences: [
      { label: "Privat", text: "Baugrube und Kellerabdichtung für Ein- und Zweifamilienhäuser, Geländeanpassung." },
      { label: "Gewerbe", text: "Großflächiger Aushub für Hallen, Logistikzentren und Stellplatzanlagen." },
      { label: "Kommune", text: "Erdbau für Schulen, Sporthallen, Kindergärten und Verkehrsflächen." },
    ],
  },
  {
    slug: "abbruch",
    title: "Abbruch",
    icon: Hammer,
    image: heroAbbruch,
    lead: "Selektiver Rückbau, Entkernung und fachgerechte Entsorgung — sauber dokumentiert.",
    description: [
      "Vom kleinen Nebengebäude bis zum Gewerbeobjekt: Wir führen Abbrucharbeiten kontrolliert und nach den Vorgaben der Gewerbeabfallverordnung aus. Selektiver Rückbau ist für uns Standard — Wertstoffe werden direkt auf der Baustelle getrennt, dokumentiert und einer hohen Verwertungsquote zugeführt.",
      "Vor dem Abbruch erfolgt eine Schadstofferkundung. Bei belasteten Bauteilen arbeiten wir mit zertifizierten Sanierungsfachbetrieben zusammen und übernehmen die Koordination. So bleibt der Bauablauf auch bei Bestandsobjekten planbar.",
    ],
    bullets: [
      "Selektiver Rückbau von Wohn- und Gewerbegebäuden",
      "Entkernung von Innenausbauten, Dächern und Haustechnik",
      "Beton- und Stahlbetonrückbau mit Hydraulikscheren und Brechern",
      "Schadstoffsanierung in Kooperation mit zertifizierten Fachbetrieben",
      "Sortierung und Entsorgung nach Gewerbeabfallverordnung",
      "Recyclingnachweise und vollständige Entsorgungsdokumentation",
    ],
    audiences: [
      { label: "Privat", text: "Rückbau von Garagen, Anbauten und Bestandsgebäuden vor Neubau." },
      { label: "Gewerbe", text: "Rückbau von Produktions-, Lager- und Verwaltungsgebäuden im laufenden Betrieb." },
      { label: "Kommune", text: "Abbruch im Bestand, Rückbau im Schul- und Verwaltungsbereich, Brückenrückbau in Kooperation." },
    ],
  },
  {
    slug: "galabau",
    title: "GalaBau — Garten- und Landschaftsbau",
    icon: Sprout,
    image: heroGalabau,
    lead: "Pflasterarbeiten, Stützmauern und Außenanlagen mit handwerklicher Präzision.",
    description: [
      "Im Garten- und Landschaftsbau verbinden wir Tiefbau-Know-how mit gestalterischem Anspruch. Hof- und Einfahrtspflasterungen, Terrassen, Stützmauern und Außenanlagen entstehen auf einem fachgerecht hergestellten Unterbau — das ist die Grundlage für Langlebigkeit.",
      "Wir setzen Naturstein- und Betonsteinpflaster, planen Drainagen und Versickerungsanlagen, errichten L-Steine, Gabionen und Trockenmauern und kümmern uns um Zaun- und Toranlagen. Bepflanzungs- und Begrünungskonzepte stimmen wir mit Landschaftsplanern und Gärtnereien ab.",
    ],
    bullets: [
      "Pflasterarbeiten mit Natur- und Betonstein",
      "Stützmauersysteme: L-Steine, Gabionen, Trockenmauern",
      "Außenanlagen, Hof- und Einfahrtsgestaltung",
      "Drainagen, Versickerungsanlagen und Entwässerung",
      "Zaun- und Toranlagen",
      "Bepflanzungs- und Begrünungskonzepte in Kooperation",
    ],
    audiences: [
      { label: "Privat", text: "Komplette Außenanlagen für Eigenheime: Einfahrt, Terrasse, Garten, Stützmauern." },
      { label: "Gewerbe", text: "Repräsentative Außenflächen, Stellplätze und Begrünungskonzepte für Firmensitze." },
      { label: "Kommune", text: "Spielplatzflächen, Schulhöfe, Verkehrsbegleitgrün und öffentliche Außenanlagen." },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border/70 bg-[color:var(--surface)]/40">
        <div className="container-page py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Leistungen</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold max-w-3xl">
            Tiefbau in Altenkirchen — vier Gewerke aus einer Hand.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen und
            Westerwald. Eine Bauleitung, ein verlässliches Team vom Meisterbetrieb
            FS-BAU — vom Aufmaß bis zur Abnahme.
          </p>

          <nav className="mt-8 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm hover:border-primary/60 hover:text-primary transition-colors"
              >
                <s.icon className="size-3.5" /> {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`scroll-mt-24 ${i % 2 === 1 ? "bg-[color:var(--surface)]/30" : ""}`}
        >
          <div className="container-page py-20 md:py-24 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="grid place-items-center size-12 rounded-lg bg-primary text-primary-foreground shadow-glow">
                <s.icon className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold">{s.title}</h2>
              <p className="mt-3 text-primary text-sm">{s.lead}</p>

              <ul className="mt-8 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-8 shadow-glow">
                <Link to="/kontakt"> {s.title} anfragen <ArrowRight className="size-4" /></Link>
              </Button>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-2xl border border-border aspect-[16/10] mb-8">
                <img
                  src={s.image}
                  alt={`${s.title} — FS-BAU GmbH`}
                  width={1600}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" aria-hidden />
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {s.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {s.audiences.map((a) => (
                  <div key={a.label} className="rounded-xl border border-border bg-background p-5">
                    <p className="text-xs uppercase tracking-wider text-primary">{a.label}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border/70">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl font-bold">Ihr Projekt — unser Handwerk.</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Ob Hausanschluss, Baugrube, Rückbau oder Außenanlage — sprechen Sie mit dem Meisterbetrieb FS-BAU.
          </p>
          <Button asChild size="lg" className="mt-6 shadow-glow">
            <Link to="/kontakt">Anfrage starten <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
