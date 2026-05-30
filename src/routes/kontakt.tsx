import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Tiefbau Altenkirchen anfragen | FS-BAU GmbH" },
      { name: "description", content: "Tiefbau in Altenkirchen anfragen: Kontaktieren Sie den Meisterbetrieb FS-BAU GmbH für Kanalbau, Hausanschlüsse, Erdbau, Abbruch und GalaBau — Antwort in 1–2 Werktagen." },
      { name: "keywords", content: "Tiefbau Altenkirchen Kontakt, Tiefbauunternehmen anfragen, Bauanfrage Westerwald" },
      { property: "og:title", content: "Tiefbau Altenkirchen anfragen — FS-BAU GmbH" },
      { property: "og:description", content: "Direkte Anfrage an den Meisterbetrieb FS-BAU für Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen." },
      { property: "og:url", content: "https://fs-bau-digital-foundation.vercel.app/kontakt" },
    ],
    links: [{ rel: "canonical", href: "https://fs-bau-digital-foundation.vercel.app/kontakt" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border/70 bg-[color:var(--surface)]/40">
        <div className="container-page py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Kontakt</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold max-w-3xl">
            Ihr Tiefbauprojekt im Westerwald — jetzt anfragen.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Beschreiben Sie kurz Ihr Vorhaben — Projekttyp, gewünschte Leistung
            und Zeitrahmen. Der Meisterbetrieb FS-BAU GmbH meldet sich innerhalb
            von 1–2 Werktagen mit einer ehrlichen Ersteinschätzung.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold">Anfrage stellen</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Felder mit <span className="text-primary">*</span> sind Pflichtfelder.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-6">
            <h2 className="font-display text-xl font-semibold">Direkter Kontakt</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Anschrift</p>
                  <p className="text-muted-foreground">{SITE.address.street}<br />{SITE.address.zip} {SITE.address.city}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <p className="text-muted-foreground">{SITE.phone}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">E-Mail</p>
                  <a href={`mailto:${SITE.email}`} className="text-muted-foreground hover:text-foreground">{SITE.email}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Bürozeiten</p>
                  <p className="text-muted-foreground">{SITE.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-6">
            <h2 className="font-display text-lg font-semibold">Einsatzgebiet</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Kreis Altenkirchen und Westerwald, angrenzende Regionen in Rheinland-Pfalz und Nordrhein-Westfalen.
              Überregionale Projekte auf Anfrage.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
