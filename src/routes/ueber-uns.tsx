import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, MapPin, Hammer, Leaf, Users, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — Tiefbau Altenkirchen, Meisterbetrieb FS-BAU GmbH" },
      { name: "description", content: "FS-BAU GmbH — Ihr Meisterbetrieb für Tiefbau in Altenkirchen. Werte, Qualifikationen und Einsatzgebiet im Westerwald und überregional in Rheinland-Pfalz und NRW." },
      { name: "keywords", content: "Tiefbau Altenkirchen, Tiefbaubetrieb Westerwald, Meisterbetrieb FS-BAU, Bauunternehmen Altenkirchen" },
      { property: "og:title", content: "Über uns — Meisterbetrieb für Tiefbau in Altenkirchen" },
      { property: "og:description", content: "Werte, Qualifikationen und Einsatzgebiet des Meisterbetriebs FS-BAU GmbH für Tiefbau im Kreis Altenkirchen." },
      { property: "og:url", content: "https://westerwald-builder-pro.lovable.app/ueber-uns" },
    ],
    links: [{ rel: "canonical", href: "https://westerwald-builder-pro.lovable.app/ueber-uns" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border/70 bg-[color:var(--surface)]/40">
        <div className="container-page py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Über FS-BAU</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold max-w-3xl">
            Tiefbau Altenkirchen — Ihr Meisterbetrieb FS-BAU GmbH.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Wir sind FS-BAU GmbH — ein Bauunternehmen mit Meisterqualifikation, das
            Tiefbau, Erdbau, Abbruch und GalaBau aus einer Hand liefert. Heimat: der Westerwald.
            Einsatzgebiet: weit darüber hinaus.
          </p>
        </div>
      </section>

      <section className="container-page py-20 md:py-24 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Die FS-BAU GmbH wurde mit einem klaren Anspruch gegründet: anspruchsvolle Bauleistungen
            auf Meisterniveau verlässlich an private Auftraggeber, Gewerbe und Kommunen zu liefern.
            Im Kreis Altenkirchen kennen wir die Bodenverhältnisse, die Netzbetreiber und die
            örtlichen Behörden — überregional bringen wir denselben Anspruch auf jede Baustelle mit.
          </p>
          <p>
            Unser Selbstverständnis ist handwerklich: Wer den Boden bewegt, Wasser ableitet oder
            ein Haus zurückbaut, übernimmt Verantwortung. Diese Verantwortung tragen wir mit
            qualifizierten Eigenmitarbeitern, geprüfter Bauleitung und einem modernen Maschinenpark.
            Versprochen wird, was gehalten werden kann — auch beim Termin.
          </p>
          <p>
            FS-BAU steht für saubere Dokumentation, transparente Kommunikation und Bauausführung
            nach den anerkannten Regeln der Technik. Für Auftraggeber bedeutet das: ein fester
            Ansprechpartner, ein realistischer Bauzeitenplan und ein vorzeigbares Ergebnis.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-8">
          <h2 className="font-display text-2xl font-semibold">Auf einen Blick</h2>
          <dl className="mt-6 space-y-5 text-sm">
            {[
              ["Rechtsform", "FS-BAU GmbH"],
              ["Status", "Meisterbetrieb"],
              ["Sitz", "Kreis Altenkirchen, Westerwald"],
              ["Einsatzgebiet", "Rheinland-Pfalz, NRW und überregional"],
              ["Leistungen", "Tiefbau · Erdbau · Abbruch · GalaBau"],
              ["Zielgruppen", "Privat, Gewerbe, Kommunen"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[140px_1fr] gap-4 border-b border-border/70 pb-3 last:border-0">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WERTE */}
      <section className="border-y border-border/70 bg-[color:var(--surface)]/40">
        <div className="container-page py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Unsere Werte</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Worauf wir nicht verzichten.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Zuverlässigkeit", text: "Was wir zusagen, halten wir. Bauzeitenpläne werden ehrlich kalkuliert — nicht schönfärbt." },
              { icon: Hammer, title: "Präzision", text: "Vermessung, 3D-Steuerung und sauberes Handwerk: Maße und Höhen stimmen vom ersten Tag." },
              { icon: MapPin, title: "Regional & überregional", text: "Heimat Westerwald, Einsatz überall dort, wo Meisterqualität gefragt ist." },
              { icon: Leaf, title: "Verantwortung", text: "Sortenreine Trennung, Recyclingquoten, sparsamer Maschineneinsatz — Nachhaltigkeit als Standard." },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-background p-6">
                <v.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFIKATIONEN */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Qualifikationen</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
              Meisterhaftes Handwerk braucht meisterhafte Voraussetzungen.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Als Meisterbetrieb sind wir vergabekonform aufgestellt. Bauleitung,
              Sicherheitsstandards und Dokumentation entsprechen den Anforderungen
              öffentlicher und gewerblicher Auftraggeber.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              { icon: Users, title: "Geprüfte Bauleitung", text: "Verantwortliche Bauleitung durch qualifizierten Bau-Meister." },
              { icon: ShieldCheck, title: "SCC- & SiGeKo-konform", text: "Arbeits- und Gesundheitsschutz auf jeder Baustelle dokumentiert." },
              { icon: Truck, title: "Moderner Maschinenpark", text: "Eigene Bagger, Radlader, Walzen und Transportlogistik." },
              { icon: Hammer, title: "Qualifizierte Mitarbeiter", text: "Eigenes Stammpersonal — keine anonymen Subunternehmer-Ketten." },
            ].map((q) => (
              <li key={q.title} className="rounded-xl border border-border bg-background p-5 flex gap-4">
                <span className="grid place-items-center size-11 rounded-lg bg-primary/10 text-primary shrink-0">
                  <q.icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{q.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{q.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/70">
        <div className="container-page py-16 text-center">
          <h2 className="font-display text-3xl font-bold">Bauen Sie mit uns.</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Stellen Sie Ihre Anfrage — wir melden uns innerhalb von 1–2 Werktagen mit einer ehrlichen Ersteinschätzung.
          </p>
          <Button asChild size="lg" className="mt-6 shadow-glow">
            <Link to="/kontakt">Anfrage starten <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
