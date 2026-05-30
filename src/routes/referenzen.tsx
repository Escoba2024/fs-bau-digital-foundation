import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Image as ImageIcon, CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReferenceProject {
  id: string;
  title: string;
  description: string;
  category: "tiefbau" | "erdbau" | "galabau";
  categoryLabel: string;
  image: string;
}

const PROJECTS: ReferenceProject[] = [
  {
    id: "erdbau-bagger-lkw",
    title: "Baugrubenaushub für Wohngebäude",
    description: "Aushub einer Baugrube mit einem Volvo ECR145EL Kettenbagger und Abtransport des Bodens mit 4-Achs-Kippern.",
    category: "erdbau",
    categoryLabel: "Erdbau",
    image: "/referenzen/erdbau-bagger-lkw.jpg",
  },
  {
    id: "erdbau-bagger-hang",
    title: "Geländemodellierung am Hang",
    description: "Präzise Hangregulierung und Erdbewegungen für ein neues Wohngebiet mit unserem Volvo Kompaktbagger.",
    category: "erdbau",
    categoryLabel: "Erdbau",
    image: "/referenzen/erdbau-bagger-hang.jpg",
  },
  {
    id: "tiefbau-kanalisation",
    title: "Kanalanschluss mit Rückstauklappen",
    description: "Fachgerechte Installation von Abwasserleitungen (RW/SW) und Schachtbauwerk inklusive Rückstausicherungen.",
    category: "tiefbau",
    categoryLabel: "Tiefbau",
    image: "/referenzen/tiefbau-kanalisation.jpg",
  },
  {
    id: "galabau-wegebau",
    title: "Wegebau & Pflastervorbereitung",
    description: "Vorbereitung eines Gehwegs an einem Wohngebäude mit Randsteineinfassung und Feinbettung aus Sand.",
    category: "galabau",
    categoryLabel: "GalaBau",
    image: "/referenzen/galabau-wegebau.jpg",
  },
  {
    id: "erdbau-feinplanum",
    title: "Unterbau & Feinplanum für Bodenplatte",
    description: "Kiesbettung mit Schnurgerüst-Ausrichtung als Fundamentvorbereitung für ein Einfamilienhaus.",
    category: "erdbau",
    categoryLabel: "Erdbau",
    image: "/referenzen/erdbau-feinplanum.jpg",
  },
  {
    id: "erdbau-rodung",
    title: "Baufeldräumung & Wurzelrodung",
    description: "Entfernung von Hecken, Baumstümpfen und Wurzelwerk zur Vorbereitung des Grundstücks für die Bebauung.",
    category: "erdbau",
    categoryLabel: "Erdbau",
    image: "/referenzen/erdbau-rodung.jpg",
  },
];

const CATEGORIES = [
  { id: "all", label: "Alle Referenzen" },
  { id: "tiefbau", label: "Tiefbau" },
  { id: "erdbau", label: "Erdbau" },
  { id: "galabau", label: "GalaBau" },
] as const;

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen & Baustellenberichte — FS-BAU GMBH | Tiefbau Meisterbetrieb" },
      { name: "description", content: "Unsere Referenzen im Westerwald: Bilder und Beschreibungen unserer Baustellen in den Bereichen Tiefbau, Erdbau, Abbruch und Garten- und Landschaftsbau (GalaBau)." },
      { name: "keywords", content: "FS-BAU Referenzen, Baustellenbilder Altenkirchen, Tiefbau Projekte Westerwald, Erdbau Bilder" },
      { property: "og:title", content: "Referenzen & Baustellenberichte — FS-BAU GMBH" },
      { property: "og:description", content: "Echte Einblicke in unsere Arbeit: Kanalbau, Erdbau, Baggerarbeiten und Wegebau im Kreis Altenkirchen und überregional." },
      { property: "og:url", content: "https://westerwald-builder-pro.lovable.app/referenzen" },
    ],
    links: [{ rel: "canonical", href: "https://westerwald-builder-pro.lovable.app/referenzen" }],
  }),
  component: ReferenzenPage,
});

function ReferenzenPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = filter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      {/* HEADER SECTION */}
      <section className="border-b border-border/70 bg-[color:var(--surface)]/40">
        <div className="container-page py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary flex items-center gap-1.5">
            <ImageIcon className="size-3.5" /> Echte Projektbilder
          </p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold max-w-3xl">
            Unsere Referenzen in der Praxis
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Machen Sie sich ein Bild von unserer Leistungsfähigkeit. Alle Fotos stammen direkt von
            unseren Baustellen im Kreis Altenkirchen und dem Westerwald.
          </p>
        </div>
      </section>

      {/* FILTER & GALLERY */}
      <section className="container-page py-12 md:py-20">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border/50">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === cat.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-[color:var(--surface)] border border-border/70 text-muted-foreground hover:text-foreground hover:bg-[color:var(--surface-elevated)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col rounded-2xl border border-border bg-[color:var(--surface)] overflow-hidden transition-all hover:border-primary/50 hover:shadow-glow/20"
            >
              {/* Image Frame */}
              <div className="aspect-[4/3] overflow-hidden bg-zinc-950">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-105"
                />
              </div>

              {/* Card Details */}
              <div className="flex flex-col p-6 flex-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary uppercase tracking-wider">
                    {p.categoryLabel}
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <CheckCircle className="size-3 text-primary/80" /> Ausgeführt
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-border rounded-2xl bg-[color:var(--surface)]/20">
            <p className="text-muted-foreground">Aktuell keine Projekte in dieser Kategorie vorhanden.</p>
          </div>
        )}
      </section>

      {/* CALL TO ACTION */}
      <section className="border-t border-border/70 bg-[color:var(--surface)]/20">
        <div className="container-page py-16 md:py-20 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-border bg-[color:var(--surface)]/60 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
            <ShieldCheck className="size-3.5 text-primary" />
            Ihr Partner für Tiefbau & Erdbau
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Planen Sie ein eigenes Bauvorhaben?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Ob Erdbewegung, Hausanschluss, Wegebau oder Abbruch — wir stehen Ihnen mit Meisterqualität
            und unserem modernen Maschinenpark zur Seite.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/kontakt">Projekt anfragen <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/leistungen">Unsere Leistungen</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
