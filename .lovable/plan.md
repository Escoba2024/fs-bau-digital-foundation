## Ziel

Vollständige, produktionsreife Multi-Page-Website für die FS-BAU GmbH (Meisterbetrieb, Kreis Altenkirchen) mit dunklem, hochwertigem Design, Bau-Orange als Akzent und einem funktionierenden Kontaktformular, das Anfragen in der Datenbank speichert.

## Tech-Stack (an Projekt angepasst)

- TanStack Start (React + Vite) — bereits eingerichtet
- Tailwind CSS v4 mit semantischen Tokens in `src/styles.css`
- Lucide React für Icons
- Lovable Cloud (Supabase darunter) für Speicherung der Kontaktanfragen
- Zod für Validierung, react-hook-form für das Formular
- shadcn/ui Komponenten (Button, Input, Textarea, Select, Card, Sonner Toasts)

> Hinweis: Du hast Next.js angefragt — dein Projekt läuft auf TanStack Start. Routen-Struktur, SEO-Metadaten und Server-Funktionen entsprechen exakt dem gleichen Konzept (App-Router → file-based routes, `metadata` → `head()`, Server Actions → `createServerFn`).

## Design-System

- Dark Theme als Default (`<html class="dark">` aktivieren)
- Farben (oklch-Tokens in `src/styles.css`):
  - `--background`: tiefes Anthrazit (~ #0a0a0a)
  - `--card` / `--secondary`: Slate-900 (~ #171717 / #1f1f1f)
  - `--foreground`: warmes Weiß
  - `--muted-foreground`: helles Grau
  - `--primary` (Akzent): Bau-Orange #f97316 + `--primary-glow` für Gradients
  - `--border`: subtile helle Trennlinien
- Typografie: „Space Grotesk" für Headlines, „Inter" für Body (via Google Fonts)
- Visuelle Sprache: cleane Linien, großzügiges Spacing, dezente Orange-Gradients, Hairline-Borders, dunkle Card-Surfaces mit leichtem Glow auf CTAs

## Routen-Struktur

```text
src/routes/
  __root.tsx                  Layout: Header (Nav) + Outlet + Footer, Fonts, JSON-LD Organization
  index.tsx                   Startseite
  leistungen.tsx              Übersicht aller 4 Leistungsbereiche (mit Anker je Bereich)
  ueber-uns.tsx               Über FS-BAU als Meisterbetrieb
  kontakt.tsx                 Kontaktformular + Kontaktdaten
  impressum.tsx               Rechtssicheres Impressum (Platzhalter-Daten)
  datenschutz.tsx             DSGVO-Datenschutzerklärung
src/components/
  layout/Header.tsx           Responsive Nav (Desktop + Mobile Sheet)
  layout/Footer.tsx           Footer mit Kontakt, Leistungen, Rechtliches
  sections/Hero.tsx           Hero mit Slogan + CTA
  sections/ServicesGrid.tsx   4-Karten-Grid Tiefbau/Erdbau/Abbruch/GalaBau
  sections/MeisterUSP.tsx     Vertrauens-Argumente
  sections/Audiences.tsx      Privat / Gewerbe / Kommune
  sections/CTASection.tsx     Wiederverwendbarer CTA-Block
  ContactForm.tsx             Formular (RHF + Zod), ruft Server-Funktion
src/lib/
  contact.functions.ts        createServerFn: speichert Anfrage in DB
  contact.schema.ts           Zod-Schema (geteilt Client/Server)
  site.ts                     Konstanten (Firmenname, Adresse, Leistungen)
```

## Datenbank (Lovable Cloud)

Eine Tabelle für Kontaktanfragen:

```text
contact_requests
  id uuid PK
  created_at timestamptz default now()
  name text                 1–100
  email text                email, max 255
  phone text nullable       max 50
  project_type text         enum: 'privat' | 'gewerbe' | 'kommune'
  service text              enum: 'tiefbau' | 'erdbau' | 'abbruch' | 'galabau' | 'sonstiges'
  message text              10–2000
```

RLS:
- INSERT: erlaubt für `anon` und `authenticated` (öffentliches Formular)
- SELECT/UPDATE/DELETE: nur Service-Role (über Admin-UI einsehbar)

## Inhalte (vollständig ausformuliert, deutsch)

### Startseite
- Hero H1: „Tiefbau, Erdbau, Abbruch & GalaBau aus dem Westerwald"
- Sub: „FS-BAU GmbH — Ihr Meisterbetrieb im Kreis Altenkirchen. Präzise geplant, zuverlässig ausgeführt — für private Auftraggeber, Gewerbe und Kommunen."
- CTAs: „Projekt anfragen" / „Leistungen entdecken"
- Leistungs-Teaser (4 Karten mit kurzer Beschreibung + Link)
- Meisterbetrieb-USPs (4 Bullet-Punkte: Meisterqualifikation, regional verwurzelt, moderner Maschinenpark, termintreu)
- Zielgruppen (3 Karten Privat/Gewerbe/Kommune mit je 3–4 Beispielprojekten)
- Eingebettetes Kurz-Anfrageformular am Seitenende

### /leistungen
Pro Leistungsbereich (jeweils 200–300 Wörter, Fachterminologie korrekt):
- **Tiefbau**: Kanalbau (Misch-/Trenn-/Schmutzwasser), Hausanschlüsse (Strom, Wasser, Gas, Telekommunikation, Glasfaser), Wegebau (Straßen-, Hof- und Zufahrtsbau), Leitungsbau, Schachtbau
- **Erdbau**: Baugrubenaushub mit Verbau, Geländemodellierung, Bodenaustausch und -verbesserung, Verdichtung, Frostschutzschichten, Lärm-/Sichtschutzwälle
- **Abbruch**: Selektiver Rückbau von Wohn- und Gewerbegebäuden, Entkernung, Schadstoffsanierung (in Kooperation), Betonrückbau, Sortierung und Entsorgung nach Gewerbeabfallverordnung, Recyclingnachweis
- **GalaBau**: Pflasterarbeiten (Natur-/Betonstein), Stützmauersysteme (L-Steine, Gabionen), Außenanlagen, Hof-/Einfahrten, Drainagen, Bepflanzungen, Zaunbau

Pro Bereich: 4–6 Bullet-Leistungen + Anwendungsbeispiele für Privat/Gewerbe/Kommune.

### /ueber-uns
- Firmenporträt: Meisterbetrieb im Kreis Altenkirchen, regional verwurzelt, überregional aktiv
- Werte: Zuverlässigkeit, Präzision, Termintreue, Sicherheit, Nachhaltigkeit
- Qualifikationen: Bauleitung durch geprüften Bau-Meister, SCC/SiGeKo-konforme Arbeitsweise, moderner Fuhrpark, qualifizierte Eigenmitarbeiter
- Region & Einsatzgebiet (Altenkirchen, Westerwald, NRW/RLP-Grenzregion, überregional auf Anfrage)

### /kontakt
- Formularfelder: Name, E-Mail, Telefon (optional), Projekttyp (Privat/Gewerbe/Kommune), Leistung (Tiefbau/Erdbau/Abbruch/GalaBau/Sonstiges), Nachricht
- Validierung: Zod (Client + Server), Erfolgs-Toast, Reset bei Erfolg
- Nebenspalte: Adresse, Telefon, E-Mail, Bürozeiten — als Platzhalter, klar markiert

### /impressum
Vollständiges Muster nach §5 TMG mit klar markierten Platzhaltern für: Anschrift, Geschäftsführung, Registergericht, HRB, USt-IdNr., verantwortlich nach §18 Abs. 2 MStV, Berufshaftpflicht, Hinweis OS-Plattform und Verbraucherschlichtung.

### /datenschutz
DSGVO-konforme Erklärung mit Abschnitten: Verantwortlicher, Datenarten, Rechtsgrundlagen (Art. 6 DSGVO), Server-Logfiles/Hosting, Kontaktformular (Speicherung in Lovable Cloud/Supabase, EU-Hosting, Löschfristen), Cookies (nur technisch notwendige), Betroffenenrechte, Beschwerderecht (LfDI RLP), Auftragsverarbeitung, SSL/TLS.

## SEO

`head()` pro Route mit Title, Description, og:title, og:description, og:url und canonical (relativ).
Im `__root.tsx`: JSON-LD `Organization` + `LocalBusiness` (Adresse als Platzhalter), Lang `de`.

Beispiele:
- **Startseite** — Title: „FS-BAU GmbH — Tiefbau, Erdbau, Abbruch & GalaBau | Meisterbetrieb Altenkirchen"
- **/leistungen** — „Leistungen: Tiefbau, Erdbau, Abbruch, GalaBau | FS-BAU GmbH"
- **/ueber-uns** — „Über uns — Meisterbetrieb für Tiefbau im Westerwald | FS-BAU GmbH"
- **/kontakt** — „Kontakt & Anfrage — Tiefbau, Erdbau, Abbruch, GalaBau | FS-BAU GmbH"

Keywords organisch in H1/H2 und Fließtext: „Tiefbau Altenkirchen", „Erdbau Westerwald", „Abbruchunternehmen Altenkirchen", „GalaBau FS-BAU", „Meisterbetrieb Bau", „Tiefbau Gewerbe Kommunen".

## Implementierungsschritte

1. **Design-Tokens & Layout** — `src/styles.css` (dunkle oklch-Tokens, Orange), `__root.tsx` (Fonts, `dark` Klasse, Header/Footer, JSON-LD, Sonner Toaster)
2. **DB-Migration** — Tabelle `contact_requests` + RLS (Public Insert)
3. **Server-Funktion** — `src/lib/contact.functions.ts` mit Zod-Validierung, Insert via Admin-Client (RLS erlaubt Insert ohnehin)
4. **Wiederverwendbare Komponenten** — Header (Mobile-Sheet), Footer, Hero, ServicesGrid, MeisterUSP, Audiences, CTASection, ContactForm
5. **Seiten** — index, leistungen, ueber-uns, kontakt, impressum, datenschutz mit vollständigem Text und SEO-`head()`
6. **Politur** — Footer-Links, Accessibility-Check (Kontraste, Focus-Ringe, Alt-Texte)

## Offene Frage / Annahme

Du hast bei den Impressum-Daten leer gelassen — ich verwende klar markierte Platzhalter (z. B. „[Straße Hausnummer]", „[Geschäftsführer:in]", „HRB [Nummer], Amtsgericht [Ort]"), die du später 1:1 ersetzen kannst, ohne den Rest anfassen zu müssen.

## Was nicht enthalten ist

- Kein E-Mail-Versand der Anfragen (nur DB) — kann später per Lovable Email nachgerüstet werden
- Keine generierten Foto-Assets; stattdessen typografie- und icon-getriebenes Design. Auf Wunsch generiere ich Hero-Bilder per Image-Tool nach.