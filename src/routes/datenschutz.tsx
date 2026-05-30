import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | FS-BAU GmbH — Tiefbau Altenkirchen" },
      { name: "description", content: "Datenschutzerklärung der FS-BAU GmbH (Meisterbetrieb für Tiefbau in Altenkirchen) gemäß DSGVO — Verarbeitung personenbezogener Daten beim Websitebesuch und Kontaktformular." },
      { property: "og:title", content: "Datenschutz — FS-BAU GmbH | Tiefbau Altenkirchen" },
      { property: "og:description", content: "Datenschutzerklärung der FS-BAU GmbH gemäß DSGVO — Verarbeitung personenbezogener Daten beim Websitebesuch und Kontaktformular." },
      { property: "og:url", content: "https://westerwald-builder-pro.lovable.app/datenschutz" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Datenschutz — FS-BAU GmbH | Tiefbau Altenkirchen" },
      { name: "twitter:description", content: "Datenschutzerklärung der FS-BAU GmbH gemäß DSGVO." },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://westerwald-builder-pro.lovable.app/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <article className="container-page py-16 md:py-20 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] text-primary">Rechtliches</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold">Datenschutzerklärung</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Diese Erklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten gemäß Datenschutz-Grundverordnung (DSGVO).
      </p>

      <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-2 [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_a]:text-primary [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlicher im Sinne des Art. 4 Abs. 7 DSGVO ist:<br />
          FS-BAU GmbH<br />
          {SITE.address.street}, {SITE.address.zip} {SITE.address.city}<br />
          Telefon: {SITE.phone}<br />
          E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>

        <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
          Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
          Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers
          (Art. 6 Abs. 1 lit. a DSGVO) oder wenn eine andere Rechtsgrundlage greift (insb. Art. 6 Abs. 1 lit. b, c oder f DSGVO).
        </p>

        <h2>3. Hosting und Bereitstellung der Website</h2>
        <p>
          Diese Website wird auf der Infrastruktur von <strong>Lovable Cloud</strong> betrieben, das
          unter der Haube auf Supabase aufsetzt (Supabase Inc. / EU-Rechenzentren). Bei jedem
          Aufruf werden technisch notwendige Daten verarbeitet (Server-Logfiles) und kurzzeitig
          gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          einer sicheren und stabilen Bereitstellung).
        </p>
        <h3>Server-Logfiles enthalten typischerweise</h3>
        <ul>
          <li>IP-Adresse des anfragenden Geräts (anonymisiert / gekürzt)</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Aufgerufene URL / Datei</li>
          <li>HTTP-Statuscode und übertragene Datenmenge</li>
          <li>Browser, Betriebssystem und Referrer-URL</li>
        </ul>
        <p>
          Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und nach kurzer Zeit
          automatisch gelöscht, soweit sie nicht zur Sicherheitsanalyse benötigt werden.
        </p>

        <h2>4. Kontaktformular</h2>
        <p>
          Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
          dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
          Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
        </p>
        <h3>Verarbeitete Daten</h3>
        <ul>
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer (optional)</li>
          <li>Projekttyp (Privat, Gewerbe, Kommune)</li>
          <li>Gewünschte Leistung (Tiefbau, Erdbau, Abbruch, GalaBau, Sonstiges)</li>
          <li>Inhalt Ihrer Nachricht</li>
          <li>Zeitstempel der Übermittlung</li>
        </ul>
        <p>
          <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage, Erstellung von Angeboten und ggf. Anbahnung eines Vertragsverhältnisses.
          <br />
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Anfragenbearbeitung).
          <br />
          <strong>Speicherort:</strong> Die Formulardaten werden in unserer Datenbank bei Lovable Cloud (Supabase, EU-Rechenzentrum) gespeichert.
          <br />
          <strong>Speicherdauer:</strong> Wir speichern Ihre Angaben so lange, wie es zur Bearbeitung Ihrer Anfrage und etwaiger Anschlusskommunikation erforderlich ist, längstens jedoch bis zum Ablauf gesetzlicher Aufbewahrungspflichten. Eine Löschung erfolgt auf Wunsch jederzeit, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Unsere Website verwendet ausschließlich technisch notwendige Cookies bzw. lokale
          Speichermechanismen, die für den sicheren Betrieb der Seite erforderlich sind
          (z. B. Session-Handling). Eine Auswertung Ihres Nutzungsverhaltens zu Marketing- oder
          Analysezwecken findet nicht statt. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TTDSG i. V. m.
          Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2>6. Externe Dienste und Schriftarten</h2>
        <p>
          Wir binden Schriftarten („Inter" und „Space Grotesk") von Google Fonts ein. Beim Aufruf
          werden hierfür Daten (insb. IP-Adresse) an Google übermittelt. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. f DSGVO. Soweit darüber hinaus Drittanbieter eingebunden werden,
          informieren wir gesondert.
        </p>

        <h2>7. Empfänger / Auftragsverarbeitung</h2>
        <p>
          Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies zur Bearbeitung Ihrer
          Anfrage oder zur Erfüllung gesetzlicher Pflichten erforderlich ist. Wir setzen
          Auftragsverarbeiter (u. a. unseren Hosting-Anbieter Lovable Cloud / Supabase) auf
          Grundlage von Verträgen gemäß Art. 28 DSGVO ein.
        </p>

        <h2>8. Datenübermittlung in Drittländer</h2>
        <p>
          Eine Verarbeitung Ihrer Daten erfolgt vorrangig in der Europäischen Union. Sollte
          ausnahmsweise eine Übermittlung in ein Drittland erfolgen, geschieht dies nur unter
          Einhaltung geeigneter Garantien (insb. Standardvertragsklauseln der EU-Kommission gem. Art. 46 DSGVO).
        </p>

        <h2>9. Ihre Rechte als betroffene Person</h2>
        <p>Ihnen stehen folgende Rechte zu:</p>
        <ul>
          <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannte Kontaktadresse.
        </p>

        <h2>10. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig
          ist für uns: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
          Rheinland-Pfalz (LfDI RLP), Hintere Bleiche 34, 55116 Mainz.
        </p>

        <h2>11. SSL-/TLS-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit
          „https://" beginnt.
        </p>

        <h2>12. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer
          Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig
          werden, diese Datenschutzerklärung zu ändern.
        </p>
      </div>
    </article>
  );
}
