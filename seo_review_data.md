# Website-Daten & SEO-Review-Export: FS-BAU GMBH

Dieses Dokument enthält alle Texte, strukturellen Überschriften (H1-H3), SEO-Metadaten (Title, Description, Keywords) sowie globale Konfigurationen der Website der **FS-BAU GMBH (Tiefbau Meisterbetrieb)**. 

Bitte analysiere diese Daten auf Folgendes:
1. **SEO-Optimierung**: Sind die Keywords optimal in den Titeln, Beschreibungen und Überschriften platziert? Gibt es Optimierungspotenzial für lokale Suchanfragen (Local SEO für Altenkirchen / Westerwald / Rheinland-Pfalz / NRW)?
2. **Textqualität & Tonalität**: Ist die Ansprache professionell, überzeugend und passend für einen Meisterbetrieb? Klingen die Slogans und Beschreibungen flüssig und ansprechend für die Zielgruppen (Privat, Gewerbe, Kommunen)?
3. **Struktur & Lesbarkeit**: Sind die Überschriftenhierarchien logisch aufgebaut?
4. **Fehlende Angaben / Platzhalter**: Gibt es noch unbefüllte Platzhalter (z.B. Adressdaten, Registernummer)?
5. **Call-to-Actions (CTAs)**: Sind die Handlungsaufforderungen klar und motivierend?

---

## 1. Globale Konfiguration & Stammdaten (`src/lib/site.ts`)

Diese Daten werden global auf der gesamten Website (z. B. im Header, Footer und auf Kontaktseiten) verwendet. Einige Angaben sind aktuell noch als Platzhalter definiert.

*   **Firmenname:** `FS-BAU GMBH`
*   **Kurzname:** `FS-BAU GMBH`
*   **Slogan (Tagline):** `Tiefbau Meisterbetrieb`
*   **Region:** `Kreis Altenkirchen / Westerwald`
*   **Bürozeiten:** `Mo–Fr 07:30 – 17:00 Uhr`
*   **E-Mail:** `kontakt@fs-bau.example` *(Platzhalter/Beispiel)*
*   **Telefon:** `[+49 (0)0000 000000]` *(Platzhalter)*
*   **Adresse:**
    *   **Straße:** `[Straße Hausnummer]` *(Platzhalter)*
    *   **PLZ:** `[PLZ]` *(Platzhalter)*
    *   **Ort:** `[Ort]` *(Platzhalter)*

---

## 2. Globale SEO- & Layout-Konfiguration (`src/routes/__root.tsx`)

Diese Metadaten werden standardmäßig geladen, sofern eine Unterseite sie nicht überschreibt.

### Globale Metadaten:
*   **Autor:** `FS-BAU GmbH`
*   **Sprache (HTML lang):** `de` (Klasse `dark`)
*   **Standard-Titel:** `FS-BAU GmbH — Tiefbau, Erdbau, Abbruch & GalaBau | Meisterbetrieb Altenkirchen`
*   **Standard-Beschreibung:** `Meisterbetrieb für Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen und überregional. Für private Auftraggeber, Gewerbe und Kommunen.`
*   **Theme-Color:** `#0a0a0a`
*   **Eingebundene Schriftarten:** `Inter` (Sans-Serif) & `Space Grotesk` (Display)
*   **Suchmaschinen-Robots (Standard):** Keine explizite Einschränkung (Index, Follow)

### Strukturiertes Daten-Markup (Schema.org / JSON-LD):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FS-BAU GmbH",
  "description": "Meisterbetrieb für Tiefbau, Erdbau, Abbruch und Garten- und Landschaftsbau (GalaBau) im Kreis Altenkirchen / Westerwald.",
  "areaServed": ["Kreis Altenkirchen", "Westerwald", "Rheinland-Pfalz", "Nordrhein-Westfalen"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Straße Hausnummer]",
    "postalCode": "[PLZ]",
    "addressLocality": "[Ort]",
    "addressCountry": "DE"
  },
  "telephone": "[+49 (0)0000 000000]",
  "email": "kontakt@fs-bau.example"
}
```

---

## 3. Seiten-Struktur und Inhalte

---

### Seite: Startseite (Home)
*   **Pfad:** `/` (`src/routes/index.tsx`)
*   **Kanonische URL:** `https://westerwald-builder-pro.lovable.app/`

#### SEO-Metadaten (Spezifisch für diese Seite):
*   **Title:** `Tiefbau Altenkirchen | Erdbau & Abbruch | FS-BAU GmbH`
*   **Description:** `Tiefbau in Altenkirchen & Westerwald: Meisterbetrieb FS-BAU GmbH für Kanalbau, Hausanschlüsse, Erdbau, Abbruch und GalaBau — für Privat, Gewerbe und Kommunen.`
*   **Keywords:** `Tiefbau Altenkirchen, Tiefbauunternehmen Westerwald, Kanalbau Altenkirchen, Erdbau, Abbruch, GalaBau, Meisterbetrieb`
*   **OG Title:** `Tiefbau Altenkirchen | Erdbau & Abbruch | FS-BAU GmbH`
*   **OG Description:** `Tiefbau, Erdbau, Abbruch und GalaBau aus dem Kreis Altenkirchen. Präzise geplant, termintreu ausgeführt — regional und überregional.`

#### Strukturierte Inhalte (Überschriften & Texte):

*   **Vorschalt-Badge:** `Meisterbetrieb · Kreis Altenkirchen · Westerwald`
*   **[H1]** `Tiefbau in Altenkirchen & Westerwald.`
    *   **Text (Hero):** *FS-BAU GmbH — Ihr Meisterbetrieb für Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen. Präzise geplant, termintreu ausgeführt — für private Auftraggeber, Gewerbe und Kommunen.*
    *   **CTAs:** Button 1: "Projekt anfragen" (Link zu `/kontakt`), Button 2: "Leistungen entdecken" (Link zu `/leistungen`)
    *   **Kurz-USPs:**
        *   *Meisterbetrieb:* geprüfte Bauleitung
        *   *Region:* Altenkirchen + überregional
        *   *4 Gewerke:* aus einer Hand
        *   *Termintreu:* verlässlich geliefert
*   **Bereichs-Label:** `Unsere Gewerke`
*   **[H2]** `Vier Kernkompetenzen — ein Ansprechpartner.`
    *   **Text:** Link "Alle Leistungen ansehen" (Link zu `/leistungen`)
    *   **[H3] Gewerke-Teaser:**
        1.  **Tiefbau**: *Kanalbau, Hausanschlüsse, Leitungs- und Wegebau — fachgerecht ausgeführt vom Meisterbetrieb.* (Keyword-Fokus: "Tiefbau Altenkirchen, Kanalbau, Hausanschlüsse, Wegebau")
        2.  **Erdbau**: *Baugrubenaushub, Geländemodellierung, Verdichtung und Bodenaustausch — präzise und termintreu.* (Keyword-Fokus: "Erdbau Westerwald, Baugrube, Geländemodellierung")
        3.  **Abbruch**: *Selektiver Rückbau, Entkernung und fachgerechte Entsorgung nach Gewerbeabfallverordnung.* (Keyword-Fokus: "Abbruchunternehmen Altenkirchen, Rückbau, Entkernung")
        4.  **GalaBau**: *Pflasterarbeiten, Stützmauern, Außenanlagen und Drainagen — Garten- und Landschaftsbau mit Anspruch.* (Keyword-Fokus: "GalaBau FS-BAU, Pflasterarbeiten, Außenanlagen")
*   **Bereichs-Label:** `Warum FS-BAU GMBH`
*   **[H2]** `Meisterqualität, die man auf der Baustelle sieht.`
    *   **Text:** *Als Meisterbetrieb stehen wir mit unserem Namen für jede ausgeführte Leistung. Geprüfte Bauleitung, qualifizierte Eigenmitarbeiter und ein moderner Maschinenpark sind für uns Grundvoraussetzung — nicht Bonus.*
    *   **[H3] Alleinstellungsmerkmale (USPs):**
        *   *Meisterqualifikation:* Bauleitung durch geprüften Bau-Meister. Verbindliche Qualitätsstandards auf jeder Baustelle.
        *   *Regional verwurzelt:* Aus dem Kreis Altenkirchen — kurze Wege, schnelle Reaktion, persönliche Ansprechpartner.
        *   *Sicher & vergabekonform:* SCC/SiGeKo-konforme Arbeitsweise, geeignet für Ausschreibungen der öffentlichen Hand.
        *   *Termintreu:* Realistische Bauzeitenpläne und verbindliche Zusagen — kein Wunschdenken, sondern Handwerk.
*   **Bereichs-Label:** `Für wen wir bauen`
*   **[H2]** `Private, Gewerbe und Kommunen.`
    *   **Text:** *Vom Einfamilienhaus-Anschluss bis zur kommunalen Kanalbau-Maßnahme — wir passen Organisation, Dokumentation und Maschineneinsatz an Ihr Vorhaben an.*
    *   **Zielgruppen-Karten [H3]:**
        *   **Private Auftraggeber**: *Vom Hausanschluss über die Hofbefestigung bis zum kompletten Außenanlagenbau — verständlich beraten, sauber ausgeführt.*
            *   *Beispiele:* Hausanschlüsse & Erschließung, Hof- und Einfahrtspflasterung, Gartengestaltung & Mauern, Abbruch Nebengebäude
        *   **Gewerbe & Unternehmen**: *Termintreue Bauleistung für Industrie-, Logistik- und Bürostandorte — von der Baugrube bis zur Außenanlage.*
            *   *Beispiele:* Baugrubenaushub & Verbau, Erschließung Gewerbeflächen, Hof- & Lagerflächen, Rückbau Bestandsbauten
        *   **Kommunen & öffentliche Hand**: *Vergabekonforme Ausführung kommunaler Bauleistungen mit qualifiziertem Personal und modernem Maschinenpark.*
            *   *Beispiele:* Kanalbau & Sanierung, Straßen- und Wegebau, Spiel- & Schulhofflächen, Hochwasserschutz & Drainagen
*   **Bereichs-Label:** `Direkte Anfrage`
*   **[H2]** `Sprechen Sie mit dem Meisterbetrieb.`
    *   **Text:** *Beschreiben Sie kurz Ihr Vorhaben — wir melden uns innerhalb von 1–2 Werktagen mit einer ehrlichen Ersteinschätzung. Keine Schein-Angebote, kein Verkaufsdruck.*
    *   **Zusagen:**
        *   Antwort innerhalb von 1–2 Werktagen
        *   Vor-Ort-Termin nach Abstimmung
        *   Transparente Kostenstruktur

---

### Seite: Leistungen
*   **Pfad:** `/leistungen` (`src/routes/leistungen.tsx`)
*   **Kanonische URL:** `https://westerwald-builder-pro.lovable.app/leistungen`

#### SEO-Metadaten (Spezifisch für diese Seite):
*   **Title:** `Tiefbau, Erdbau & Abbruch Altenkirchen | FS-BAU GmbH`
*   **Description:** `Tiefbau in Altenkirchen, Erdbau, Abbruch und GalaBau aus einer Hand. Kanalbau, Hausanschlüsse, Baugruben und Pflasterarbeiten vom Meisterbetrieb FS-BAU GmbH.`
*   **Keywords:** `Tiefbau Altenkirchen, Kanalbau, Hausanschluss, Erdbau Westerwald, Abbruchunternehmen, GalaBau`
*   **OG Title:** `Tiefbau, Erdbau & Abbruch Altenkirchen | FS-BAU GmbH`
*   **OG Description:** `Vier Gewerke aus einer Hand: Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen. Fachlich fundiert, termintreu ausgeführt.`

#### Strukturierte Inhalte (Überschriften & Texte):

*   **Bereichs-Label:** `Leistungen`
*   **[H1]** `Tiefbau in Altenkirchen — vier Gewerke aus einer Hand.`
    *   **Text:** *Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen und Westerwald. Eine Bauleitung, ein verlässliches Team vom Meisterbetrieb FS-BAU — vom Aufmaß bis zur Abnahme.*
*   **[H2] Gewerk 1: Tiefbau**
    *   **Unterüberschrift (Lead):** *Kanalbau, Hausanschlüsse, Leitungs- und Wegebau — vom Aufmaß bis zur Abnahme.*
    *   **Detailbeschreibung:**
        *   *Tiefbau ist das Fundament jeder Erschließung. Die FS-BAU GmbH plant und realisiert Tiefbauarbeiten für Wohn-, Gewerbe- und Infrastrukturprojekte im Kreis Altenkirchen und überregional. Wir verstehen die örtlichen Bodenverhältnisse im Westerwald und arbeiten eng mit Netzbetreibern, Kommunen und Planungsbüros zusammen.*
        *   *Unsere Leistung umfasst die offene Bauweise im Kanal- und Leitungsbau, den Bau von Hausanschlüssen für alle Medien sowie den anschließenden Wegebau. Aufgrabungen werden DIN-gerecht wiederhergestellt — inklusive lagegerechter Dokumentation und Bestandsplänen.*
    *   **Leistungsumfang (Stichpunkte):**
        *   Kanalbau: Misch-, Trenn- und Schmutzwassersysteme inkl. Schachtbau
        *   Hausanschlüsse für Strom, Wasser, Gas, Telekommunikation und Glasfaser
        *   Wegebau: Straßen-, Hof- und Zufahrtsbau inkl. Frostschutz- und Tragschichten
        *   Leitungsbau und Querungen in offener Bauweise
        *   Schachtbau, Schachtsanierung und Anbindung an Bestandsnetze
        *   Abnahme- und Bestandsdokumentation für Auftraggeber und Netzbetreiber
    *   **Anwendungsbereiche nach Zielgruppe:**
        *   *Privat:* Komplettanschluss bei Neubau und Sanierung — von der Grundstücksgrenze bis zum Haus.
        *   *Gewerbe:* Erschließung neuer Gewerbeflächen, Erweiterung bestehender Hof- und Lagerflächen.
        *   *Kommune:* Kanalbau, Sanierung im Bestand und kommunaler Straßenbau nach ZTV-konformer Ausführung.
*   **[H2] Gewerk 2: Erdbau**
    *   **Unterüberschrift (Lead):** *Baugrubenaushub, Geländemodellierung und Bodenverbesserung — präzise, sicher, termintreu.*
    *   **Detailbeschreibung:**
        *   *Im Erdbau liefern wir die Grundlage für jedes Bauvorhaben: vom geböschten oder verbauten Baugrubenaushub über die Geländemodellierung bis zur Verdichtung des Planums. Wir arbeiten mit moderner Vermessungstechnik und 3D-Steuerung, damit Maße und Höhen vom ersten Spatenstich an stimmen.*
        *   *Bodenaustausch, Bodenverbesserung und der Einbau von Frostschutzschichten gehören ebenso zu unserem Leistungsumfang wie das fachgerechte Anlegen von Lärm- und Sichtschutzwällen. Aushub-, Recycling- und Fremdmaterialien disponieren wir transparent und nachweispflichtig.*
    *   **Leistungsumfang (Stichpunkte):**
        *   Baugrubenaushub inklusive Verbau (Trägerbohlwand, Spundwand in Kooperation)
        *   Geländemodellierung, Profilierung und Wallbau
        *   Bodenaustausch und Bodenverbesserung mit Bindemitteln
        *   Verdichtungsarbeiten und Frostschutzschicht-Einbau
        *   Erdmassentransport mit eigener Logistik
        *   Vermessung, 3D-Maschinensteuerung und Massenbilanz
    *   **Anwendungsbereiche nach Zielgruppe:**
        *   *Privat:* Baugrube und Kellerabdichtung für Ein- und Zweifamilienhäuser, Geländeanpassung.
        *   *Gewerbe:* Großflächiger Aushub für Hallen, Logistikzentren und Stellplatzanlagen.
        *   *Kommune:* Erdbau für Schulen, Sporthallen, Kindergärten und Verkehrsflächen.
*   **[H2] Gewerk 3: Abbruch**
    *   **Unterüberschrift (Lead):** *Selektiver Rückbau, Entkernung und fachgerechte Entsorgung — sauber dokumentiert.*
    *   **Detailbeschreibung:**
        *   *Vom kleinen Nebengebäude bis zum Gewerbeobjekt: Wir führen Abbrucharbeiten kontrolliert und nach den Vorgaben der Gewerbeabfallverordnung aus. Selektiver Rückbau ist für uns Standard — Wertstoffe werden direkt auf der Baustelle getrennt, dokumentiert und einer hohen Verwertungsquote zugeführt.*
        *   *Vor dem Abbruch erfolgt eine Schadstofferkundung. Bei belasteten Bauteilen arbeiten wir mit zertifizierten Sanierungsfachbetrieben zusammen und übernehmen die Koordination. So bleibt der Bauablauf auch bei Bestandsobjekten planbar.*
    *   **Leistungsumfang (Stichpunkte):**
        *   Selektiver Rückbau von Wohn- und Gewerbegebäuden
        *   Entkernung von Innenausbauten, Dächern und Haustechnik
        *   Beton- und Stahlbetonrückbau mit Hydraulikscheren und Brechern
        *   Schadstoffsanierung in Kooperation mit zertifizierten Fachbetrieben
        *   Sortierung und Entsorgung nach Gewerbeabfallverordnung
        *   Recyclingnachweise und vollständige Entsorgungsdokumentation
    *   **Anwendungsbereiche nach Zielgruppe:**
        *   *Privat:* Rückbau von Garagen, Anbauten und Bestandsgebäuden vor Neubau.
        *   *Gewerbe:* Rückbau von Produktions-, Lager- und Verwaltungsgebäuden im laufenden Betrieb.
        *   *Kommune:* Abbruch im Bestand, Rückbau im Schul- und Verwaltungsbereich, Brückenrückbau in Kooperation.
*   **[H2] Gewerk 4: GalaBau — Garten- und Landschaftsbau**
    *   **Unterüberschrift (Lead):** *Pflasterarbeiten, Stützmauern und Außenanlagen mit handwerklicher Präzision.*
    *   **Detailbeschreibung:**
        *   *Im Garten- und Landschaftsbau verbinden wir Tiefbau-Know-how mit gestalterischem Anspruch. Hof- und Einfahrtspflasterungen, Terrassen, Stützmauern und Außenanlagen entstehen auf einem fachgerecht hergestellten Unterbau — das ist die Grundlage für Langlebigkeit.*
        *   *Wir setzen Naturstein- und Betonsteinpflaster, planen Drainagen und Versickerungsanlagen, errichten L-Steine, Gabionen und Trockenmauern und kümmern uns um Zaun- und Toranlagen. Bepflanzungs- und Begrünungskonzepte stimmen wir mit Landschaftsplanern und Gärtnereien ab.*
    *   **Leistungsumfang (Stichpunkte):**
        *   Pflasterarbeiten mit Natur- und Betonstein
        *   Stützmauersysteme: L-Steine, Gabionen, Trockenmauern
        *   Außenanlagen, Hof- und Einfahrtsgestaltung
        *   Drainagen, Versickerungsanlagen und Entwässerung
        *   Zaun- und Toranlagen
        *   Bepflanzungs- und Begrünungskonzepte in Kooperation
    *   **Anwendungsbereiche nach Zielgruppe:**
        *   *Privat:* Komplette Außenanlagen für Eigenheime: Einfahrt, Terrasse, Garten, Stützmauern.
        *   *Gewerbe:* Repräsentative Außenflächen, Stellplätze und Begrünungskonzepte für Firmensitze.
        *   *Kommune:* Spielplatzflächen, Schulhöfe, Verkehrsbegleitgrün und öffentliche Außenanlagen.
*   **[H2] Abschlussbereich:** `Ihr Projekt — unser Handwerk.`
    *   **Text:** *Ob Hausanschluss, Baugrube, Rückbau oder Außenanlage — sprechen Sie mit dem Meisterbetrieb FS-BAU.*
    *   **CTA:** Button: "Anfrage starten" (Link zu `/kontakt`)

---

### Seite: Referenzen
*   **Pfad:** `/referenzen` (`src/routes/referenzen.tsx`)
*   **Kanonische URL:** `https://westerwald-builder-pro.lovable.app/referenzen`

#### SEO-Metadaten (Spezifisch für diese Seite):
*   **Title:** `Referenzen & Baustellenberichte — FS-BAU GMBH | Tiefbau Meisterbetrieb`
*   **Description:** `Unsere Referenzen im Westerwald: Bilder und Beschreibungen unserer Baustellen in den Bereichen Tiefbau, Erdbau, Abbruch und Garten- und Landschaftsbau (GalaBau).`
*   **Keywords:** `FS-BAU Referenzen, Baustellenbilder Altenkirchen, Tiefbau Projekte Westerwald, Erdbau Bilder`
*   **OG Title:** `Referenzen & Baustellenberichte — FS-BAU GMBH`
*   **OG Description:** `Echte Einblicke in unsere Arbeit: Kanalbau, Erdbau, Baggerarbeiten und Wegebau im Kreis Altenkirchen und überregional.`

#### Strukturierte Inhalte (Überschriften & Texte):

*   **Bereichs-Label:** `Echte Projektbilder`
*   **[H1]** `Unsere Referenzen in der Praxis`
    *   **Text:** *Machen Sie sich ein Bild von unserer Leistungsfähigkeit. Alle Fotos stammen direkt von unseren Baustellen im Kreis Altenkirchen und dem Westerwald.*
*   **Filter-Kategorien:** `Alle Referenzen`, `Tiefbau`, `Erdbau`, `GalaBau`
*   **Referenz-Projekte (Als semantische [H3]-Überschriften auf der Webseite gerendert):**
    1.  **[H3] Baugrubenaushub für Wohngebäude** (Kategorie: Erdbau)
        *   *Ort & Datum:* Altenkirchen | April 2026
        *   *Beschreibung:* Aushub einer Baugrube mit einem Volvo ECR145EL Kettenbagger und Abtransport des Bodens mit 4-Achs-Kippern.
        *   *Kundenstimme (Testimonial):* "Die Jungs von FS-BAU haben die Baugrube in Rekordzeit ausgehoben. Sehr präzise und sauber gearbeitet!" — M. Weber, privater Bauherr
    2.  **[H3] Geländemodellierung am Hang** (Kategorie: Erdbau)
        *   *Ort & Datum:* Betzdorf | März 2026
        *   *Beschreibung:* Präzise Hangregulierung und Erdbewegungen für ein neues Wohngebiet mit unserem Volvo Kompaktbagger.
        *   *Kundenstimme (Testimonial):* "Herausragende Arbeit am Steilhang. Die Hangsicherung steht felsenfest. Absolut empfehlenswert!" — Familie Schmidt, Hausbesitzer
    3.  **[H3] Kanalanschluss mit Rückstauklappen** (Kategorie: Tiefbau)
        *   *Ort & Datum:* Hachenburg | November 2025
        *   *Beschreibung:* Fachgerechte Installation von Abwasserleitungen (RW/SW) und Schachtbauwerk inklusive Rückstausicherungen.
        *   *Kundenstimme (Testimonial):* "Fachgerechte Installation unseres Hausanschlusses. Die Dokumentation für die Gemeinde war tadellos." — K. Lindner, Bauherr
    4.  **[H3] Wegebau & Pflastervorbereitung** (Kategorie: GalaBau)
        *   *Ort & Datum:* Wissen (Sieg) | Oktober 2025
        *   *Beschreibung:* Vorbereitung eines Gehwegs an einem Wohngebäude mit Randsteineinfassung und Feinbettung aus Sand.
        *   *Kundenstimme (Testimonial):* "Sehr gute Vorbereitung für unsere Pflasterung. Kein Absacken, perfekte Neigung für den Wasserabfluss." — Bäckerei Müller, gewerblicher Kunde
    5.  **[H3] Unterbau & Feinplanum für Bodenplatte** (Kategorie: Erdbau)
        *   *Ort & Datum:* Westerburg | September 2025
        *   *Beschreibung:* Kiesbettung mit Schnurgerüst-Ausrichtung als Fundamentvorbereitung für ein Einfamilienhaus.
    6.  **[H3] Baufeldräumung & Wurzelrodung** (Kategorie: Erdbau)
        *   *Ort & Datum:* Flammersfeld | August 2025
        *   *Beschreibung:* Entfernung von Hecken, Baumstümpfen und Wurzelwerk zur Vorbereitung des Grundstücks für die Bebauung.
*   **Bereichs-Label:** `Ihr Partner für Tiefbau & Erdbau`
*   **[H2]** `Planen Sie ein eigenes Bauvorhaben?`
    *   **Text:** *Ob Erdbewegung, Hausanschluss, Wegebau oder Abbruch — wir stehen Ihnen mit Meisterqualität und unserem modernen Maschinenpark zur Seite.*
    *   **CTAs:** Button 1: "Projekt anfragen" (Link zu `/kontakt`), Button 2: "Unsere Leistungen" (Link zu `/leistungen`)

---

### Seite: Über uns
*   **Pfad:** `/ueber-uns` (`src/routes/ueber-uns.tsx`)
*   **Kanonische URL:** `https://westerwald-builder-pro.lovable.app/ueber-uns`

#### SEO-Metadaten (Spezifisch für diese Seite):
*   **Title:** `Über uns — Tiefbau Altenkirchen, Meisterbetrieb FS-BAU GmbH`
*   **Description:** `FS-BAU GmbH — Ihr Meisterbetrieb für Tiefbau in Altenkirchen. Werte, Qualifikationen und Einsatzgebiet im Westerwald und überregional in Rheinland-Pfalz und NRW.`
*   **Keywords:** `Tiefbau Altenkirchen, Tiefbaubetrieb Westerwald, Meisterbetrieb FS-BAU, Bauunternehmen Altenkirchen`
*   **OG Title:** `Über uns — Meisterbetrieb für Tiefbau in Altenkirchen`
*   **OG Description:** `Werte, Qualifikationen und Einsatzgebiet des Meisterbetriebs FS-BAU GmbH für Tiefbau im Kreis Altenkirchen.`

#### Strukturierte Inhalte (Überschriften & Texte):

*   **Bereichs-Label:** `Über FS-BAU`
*   **[H1]** `Tiefbau Altenkirchen — Ihr Meisterbetrieb FS-BAU GmbH.`
    *   **Text:** *Wir sind FS-BAU GmbH — ein Bauunternehmen mit Meisterqualifikation, das Tiefbau, Erdbau, Abbruch und GalaBau aus einer Hand liefert. Heimat: der Westerwald. Einsatzgebiet: weit darüber hinaus.*
*   **Haupttext-Spalte:**
    *   *Die FS-BAU GmbH wurde mit einem klaren Anspruch gegründet: anspruchsvolle Bauleistungen auf Meisterniveau verlässlich an private Auftraggeber, Gewerbe und Kommunen zu liefern. Im Kreis Altenkirchen kennen wir die Bodenverhältnisse, die Netzbetreiber und die örtlichen Behörden — überregional bringen wir denselben Anspruch auf jede Baustelle mit.*
    *   *Unser Selbstverständnis ist handwerklich: Wer den Boden bewegt, Wasser ableitet oder ein Haus zurückbaut, übernimmt Verantwortung. Diese Verantwortung tragen wir mit qualifizierten Eigenmitarbeitern, geprüfter Bauleitung und einem modernen Maschinenpark. Versprochen wird, was gehalten werden kann — auch beim Termin.*
    *   *FS-BAU steht für saubere Dokumentation, transparente Kommunikation und Bauausführung nach den anerkannten Regeln der Technik. Für Auftraggeber bedeutet das: ein fester Ansprechpartner, ein realistischer Bauzeitenplan und ein vorzeigbares Ergebnis.*
*   **Infobox: Auf einen Blick [H2]**
    *   Rechtsform: `FS-BAU GmbH`
    *   Status: `Meisterbetrieb`
    *   Sitz: `Kreis Altenkirchen, Westerwald`
    *   Einsatzgebiet: `Rheinland-Pfalz, NRW und überregional`
    *   Leistungen: `Tiefbau · Erdbau · Abbruch · GalaBau`
    *   Zielgruppen: `Privat, Gewerbe, Kommunen`
*   **Bereichs-Label:** `Unsere Werte`
*   **[H2]** `Worauf wir nicht verzichten.`
    *   **Werte-Karten [H3]:**
        *   **Zuverlässigkeit:** *Was wir zusagen, halten wir. Bauzeitenpläne werden ehrlich kalkuliert — nicht schöngefärbt.*
        *   **Präzision:** *Vermessung, 3D-Steuerung und sauberes Handwerk: Maße und Höhen stimmen vom ersten Tag.*
        *   **Regional & überregional:** *Heimat Westerwald, Einsatz überall dort, wo Meisterqualität gefragt ist.*
        *   **Verantwortung:** *Sortenreine Trennung, Recyclingquoten, sparsamer Maschineneinsatz — Nachhaltigkeit als Standard.*
*   **Bereichs-Label:** `Qualifikationen`
*   **[H2]** `Meisterhaftes Handwerk braucht meisterhafte Voraussetzungen.`
    *   **Text:** *Als Meisterbetrieb sind wir vergabekonform aufgestellt. Bauleitung, Sicherheitsstandards und Dokumentation entsprechen den Anforderungen öffentlicher und gewerblicher Auftraggeber.*
    *   **Qualifikationsliste:**
        *   *Geprüfte Bauleitung:* Verantwortliche Bauleitung durch qualifizierten Bau-Meister.
        *   *SCC- & SiGeKo-konform:* Arbeits- und Gesundheitsschutz auf jeder Baustelle dokumentiert.
        *   *Moderner Maschinenpark:* Eigene Bagger, Radlader, Walzen und Transportlogistik.
        *   *Qualifizierte Mitarbeiter:* Eigenes Stammpersonal — keine anonymen Subunternehmer-Ketten.
*   **Abschlussbereich:** `Bauen Sie mit uns.`
    *   **Text:** *Stellen Sie Ihre Anfrage — wir melden uns innerhalb von 1–2 Werktagen mit einer ehrlichen Ersteinschätzung.*
    *   **CTA:** Button: "Anfrage starten" (Link zu `/kontakt`)

---

### Seite: Kontakt
*   **Pfad:** `/kontakt` (`src/routes/kontakt.tsx`)
*   **Kanonische URL:** `https://westerwald-builder-pro.lovable.app/kontakt`

#### SEO-Metadaten (Spezifisch für diese Seite):
*   **Title:** `Kontakt — Tiefbau Altenkirchen anfragen | FS-BAU GmbH`
*   **Description:** `Tiefbau in Altenkirchen anfragen: Kontaktieren Sie den Meisterbetrieb FS-BAU GmbH für Kanalbau, Hausanschlüsse, Erdbau, Abbruch und GalaBau — Antwort in 1–2 Werktagen.`
*   **Keywords:** `Tiefbau Altenkirchen Kontakt, Tiefbauunternehmen anfragen, Bauanfrage Westerwald`
*   **OG Title:** `Tiefbau Altenkirchen anfragen — FS-BAU GmbH`
*   **OG Description:** `Direkte Anfrage an den Meisterbetrieb FS-BAU für Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen.`

#### Strukturierte Inhalte (Überschriften & Texte):

*   **Bereichs-Label:** `Kontakt`
*   **[H1]** `Tiefbau in Altenkirchen anfragen.`
    *   **Text:** *Beschreiben Sie kurz Ihr Vorhaben — Projekttyp, gewünschte Leistung und Zeitrahmen. Der Meisterbetrieb FS-BAU GmbH meldet sich innerhalb von 1–2 Werktagen mit einer ehrlichen Ersteinschätzung.*
*   **Formularbereich [H2]** `Anfrage stellen`
    *   *Hinweis:* "Felder mit * sind Pflichtfelder."
    *   *Formularstruktur:*
        *   Name (Pflichtfeld)
        *   E-Mail-Adresse (Pflichtfeld)
        *   Telefonnummer (optional)
        *   Projekttyp (Auswahl: Privat / Gewerbe / Kommune)
        *   Gewünschte Leistung (Auswahl: Tiefbau / Erdbau / Abbruch / GalaBau / Sonstiges)
        *   Projektbeschreibung / Nachricht
*   **Infobereich [H2]** `Direkter Kontakt`
    *   *Anschrift, Telefon, E-Mail und Bürozeiten (dynamisch geladen aus Stammdaten, siehe Bereich 1)*
*   **Infobereich [H2]** `Einsatzgebiet`
    *   **Text:** *Kreis Altenkirchen und Westerwald, angrenzende Regionen in Rheinland-Pfalz und Nordrhein-Westfalen. Überregionale Projekte auf Anfrage.*

---

### Seite: Impressum
*   **Pfad:** `/impressum` (`src/routes/impressum.tsx`)
*   **Kanonische URL:** `https://westerwald-builder-pro.lovable.app/impressum`

#### SEO-Metadaten (Spezifisch für diese Seite):
*   **Title:** `Impressum | FS-BAU GmbH — Tiefbau Altenkirchen`
*   **Description:** `Impressum und Anbieterkennzeichnung der FS-BAU GmbH, Meisterbetrieb für Tiefbau in Altenkirchen sowie Erdbau, Abbruch und GalaBau.`
*   **Robots:** `index,follow`

#### Strukturierte Inhalte (Überschriften & Texte):

*   **Bereichs-Label:** `Rechtliches`
*   **[H1]** `Impressum`
    *   **Text:** *Angaben gemäß § 5 TMG*
*   **Inhalte [H2]:**
    *   **Anbieter:**
        *   FS-BAU GmbH, [Straße Hausnummer], [PLZ] [Ort], Deutschland
    *   **Vertreten durch:**
        *   Geschäftsführer: [Vor- und Nachname Geschäftsführer:in] *(Platzhalter)*
    *   **Kontakt:**
        *   Telefon: [+49 (0)0000 000000] *(Platzhalter)*
        *   E-Mail: kontakt@fs-bau.example *(Platzhalter)*
    *   **Registereintrag:**
        *   Eintragung im Handelsregister. Registergericht: Amtsgericht [Ort], Registernummer: HRB [Nummer] *(Platzhalter)*
    *   **Umsatzsteuer-ID:**
        *   Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE [USt-IdNr.] *(Platzhalter)*
    *   **Wirtschafts-ID / Steuernummer:**
        *   Steuernummer: [Steuernummer], Finanzamt [Ort] *(Platzhalter)*
    *   **Aufsichtsbehörde / Kammer:**
        *   Zuständige Handwerkskammer: Handwerkskammer [Bezirk] *(Platzhalter)*
        *   Verliehene Berufsbezeichnung: Bau-Meister (verliehen in der Bundesrepublik Deutschland)
    *   **Berufshaftpflichtversicherung:**
        *   Name und Sitz des Versicherers: [Versicherungsgesellschaft, Anschrift], Geltungsraum der Versicherung: Deutschland / EU *(Platzhalter)*
    *   **Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:**
        *   [Vor- und Nachname], [Straße Hausnummer], [PLZ] [Ort] *(Platzhalter)*
    *   **EU-Streitschlichtung:** Hinweis auf OS-Plattform.
    *   **Verbraucherstreitbeilegung / Universalschlichtungsstelle:** Keine Teilnahme oder Verpflichtung an Schlichtungsverfahren vor Verbraucherschlichtungsstellen.
    *   **Haftungsausschluss für Inhalte, Links und Urheberrecht** (Standardklauseln)

---

### Seite: Datenschutzerklärung
*   **Pfad:** `/datenschutz` (`src/routes/datenschutz.tsx`)
*   **Kanonische URL:** `https://westerwald-builder-pro.lovable.app/datenschutz`

#### SEO-Metadaten (Spezifisch für diese Seite):
*   **Title:** `Datenschutz | FS-BAU GmbH — Tiefbau Altenkirchen`
*   **Description:** `Datenschutzerklärung der FS-BAU GmbH (Meisterbetrieb für Tiefbau in Altenkirchen) gemäß DSGVO — Verarbeitung personenbezogener Daten beim Websitebesuch und Kontaktformular.`
*   **Robots:** `index,follow`

#### Strukturierte Inhalte (Überschriften & Texte):

*   **Bereichs-Label:** `Rechtliches`
*   **[H1]** `Datenschutzerklärung`
    *   **Text:** *Diese Erklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten gemäß Datenschutz-Grundverordnung (DSGVO).*
*   **Inhalte [H2]:**
    *   **1. Verantwortlicher:** *(Daten analog zum Impressum/Stammdaten)*
    *   **2. Allgemeine Hinweise zur Datenverarbeitung:** Rechtsgrundlagen (Art. 6 Abs. 1 lit. a, b, c, f DSGVO).
    *   **3. Hosting und Bereitstellung der Website:** Hinweis auf Betrieb bei Lovable Cloud (Supabase Inc. / EU-Rechenzentren). Auflistung verarbeiteter Server-Logfiles (IP-Adresse, Datum/Uhrzeit, URL, HTTP-Status, Browser, Betriebssystem).
    *   **4. Kontaktformular:**
        *   *Verarbeitete Daten:* Name, E-Mail-Adresse, Telefonnummer (optional), Projekttyp, Gewünschte Leistung, Inhalt der Nachricht, Zeitstempel.
        *   *Zweck & Rechtsgrundlage:* Bearbeitung der Anfragen, Angebotserstellung, Vertragsanbahnung (Art. 6 Abs. 1 lit. b & f DSGVO).
        *   *Speicherort & Speicherdauer:* Lovable Cloud (Supabase, EU-Rechenzentrum), Löschung nach Erledigung bzw. gesetzlichen Vorgaben.
    *   **5. Cookies:** Nutzung ausschließlich technisch notwendiger Cookies / lokaler Speicher zur Bereitstellung des Dienstes (§ 25 Abs. 2 Nr. 2 TTDSG i. V. m. Art. 6 Abs. 1 lit. f DSGVO). Keine Marketing- oder Werbe-Cookies.
    *   **6. Externe Dienste und Schriftarten:** Einbindung von Google Fonts (Inter & Space Grotesk) zur Bereitstellung der Typografie.
    *   **7. Empfänger / Auftragsverarbeitung:** Supabase/Lovable Cloud als Auftragsverarbeiter gemäß Art. 28 DSGVO.
    *   **8. Datenübermittlung in Drittländer:** Verarbeitung vorrangig in der EU; Standardvertragsklauseln der EU-Kommission (Art. 46 DSGVO) bei eventueller Drittlandübermittlung.
    *   **9. Ihre Rechte als betroffene Person:** Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21), Widerruf (Art. 7 Abs. 3).
    *   **10. Beschwerderecht bei der Aufsichtsbehörde:** Zuständige Stelle: Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz (LfDI RLP) in Mainz.
    *   **11. SSL-/TLS-Verschlüsselung:** TLS-Verschlüsselung aktiv (https://).
    *   **12. Aktualität und Änderung dieser Datenschutzerklärung**

---

## 4. Header & Footer (Globale Elemente)

### Header (`src/components/layout/Header.tsx`)
*   **Marke:** `FS-BAU GMBH` und Untertitel `Tiefbau Meisterbetrieb` (Zeichenweise gerendert für edles Design)
*   **Navigation:**
    *   Start (`/`)
    *   Leistungen (`/leistungen`)
    *   Referenzen (`/referenzen`)
    *   Über uns (`/ueber-uns`)
    *   Kontakt (`/kontakt`)
*   **CTA-Button:** `Projekt anfragen`

### Footer (`src/components/layout/Footer.tsx`)
*   **Linke Spalte:** Logo und Firmenname `FS-BAU GMBH`
    *   *Zusatztext:* `Meisterbetrieb für Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen — regional verwurzelt, überregional aktiv.`
*   **Leistungen-Links:** Verweise auf die einzelnen Leistungsbereiche.
*   **Unternehmens-Links:** Über uns, Referenzen, Kontakt & Anfrage, Impressum, Datenschutz.
*   **Kontakt-Direktangaben:** Adresse, Telefon, E-Mail (geladen aus Stammdaten).
*   **Copyright-Zeile:** `© [Aktuelles Jahr] FS-BAU GMBH — Tiefbau Meisterbetrieb · Kreis Altenkirchen / Westerwald`
