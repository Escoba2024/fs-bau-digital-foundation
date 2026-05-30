import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | FS-BAU GmbH — Tiefbau Altenkirchen" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung der FS-BAU GmbH, Meisterbetrieb für Tiefbau in Altenkirchen sowie Erdbau, Abbruch und GalaBau." },
      { property: "og:title", content: "Impressum — FS-BAU GmbH | Tiefbau Altenkirchen" },
      { property: "og:description", content: "Impressum und Anbieterkennzeichnung der FS-BAU GmbH, Meisterbetrieb für Tiefbau in Altenkirchen sowie Erdbau, Abbruch und GalaBau." },
      { property: "og:url", content: "https://fs-bau-digital-foundation.vercel.app/impressum" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Impressum — FS-BAU GmbH | Tiefbau Altenkirchen" },
      { name: "twitter:description", content: "Anbieterkennzeichnung der FS-BAU GmbH, Meisterbetrieb für Tiefbau Altenkirchen." },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "https://fs-bau-digital-foundation.vercel.app/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <article className="container-page py-16 md:py-20 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] text-primary">Rechtliches</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold">Impressum</h1>
      <p className="mt-3 text-sm text-muted-foreground">Angaben gemäß § 5 TMG</p>

      <Prose>
        <h2>Anbieter</h2>
        <p>
          FS-BAU GmbH<br />
          {SITE.address.street}<br />
          {SITE.address.zip} {SITE.address.city}<br />
          Deutschland
        </p>

        <h2>Vertreten durch</h2>
        <p>Geschäftsführer: [Vor- und Nachname Geschäftsführer:in]</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: {SITE.phone}<br />
          E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>

        <h2>Registereintrag</h2>
        <p>
          Eintragung im Handelsregister<br />
          Registergericht: Amtsgericht [Ort]<br />
          Registernummer: HRB [Nummer]
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE [USt-IdNr.]
        </p>

        <h2>Wirtschafts-ID / Steuernummer</h2>
        <p>Steuernummer: [Steuernummer], Finanzamt [Ort]</p>

        <h2>Aufsichtsbehörde / Kammer</h2>
        <p>
          Zuständige Handwerkskammer: Handwerkskammer [Bezirk]<br />
          Verliehene Berufsbezeichnung: Bau-Meister (verliehen in der Bundesrepublik Deutschland)
        </p>

        <h2>Berufshaftpflichtversicherung</h2>
        <p>
          Name und Sitz des Versicherers: [Versicherungsgesellschaft, Anschrift]<br />
          Geltungsraum der Versicherung: Deutschland / EU
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          [Vor- und Nachname]<br />
          {SITE.address.street}<br />
          {SITE.address.zip} {SITE.address.city}
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers.
        </p>
      </Prose>
    </article>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-2 [&_a]:text-primary [&_a:hover]:underline">
      {children}
    </div>
  );
}
