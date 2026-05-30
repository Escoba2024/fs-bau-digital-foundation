export const SITE = {
  name: "FS-BAU GMBH",
  shortName: "FS-BAU GMBH",
  tagline: "Tiefbau Meisterbetrieb",
  region: "Kreis Altenkirchen / Westerwald",
  // Markierte Platzhalter — bitte ersetzen.
  address: {
    street: "[Straße Hausnummer]",
    zip: "[PLZ]",
    city: "[Ort]",
  },
  phone: "[+49 (0)0000 000000]",
  email: "kontakt@fs-bau.example",
  hours: "Mo–Fr 07:30 – 17:00 Uhr",
} as const;

export const SERVICES = [
  {
    slug: "tiefbau",
    title: "Tiefbau",
    short:
      "Kanalbau, Hausanschlüsse, Leitungs- und Wegebau — fachgerecht ausgeführt vom Meisterbetrieb.",
    keywords: "Tiefbau Altenkirchen, Kanalbau, Hausanschlüsse, Wegebau",
  },
  {
    slug: "erdbau",
    title: "Erdbau",
    short:
      "Baugrubenaushub, Geländemodellierung, Verdichtung und Bodenaustausch — präzise und termintreu.",
    keywords: "Erdbau Westerwald, Baugrube, Geländemodellierung",
  },
  {
    slug: "abbruch",
    title: "Abbruch",
    short:
      "Selektiver Rückbau, Entkernung und fachgerechte Entsorgung nach Gewerbeabfallverordnung.",
    keywords: "Abbruchunternehmen Altenkirchen, Rückbau, Entkernung",
  },
  {
    slug: "galabau",
    title: "GalaBau",
    short:
      "Pflasterarbeiten, Stützmauern, Außenanlagen und Drainagen — Garten- und Landschaftsbau mit Anspruch.",
    keywords: "GalaBau FS-BAU, Pflasterarbeiten, Außenanlagen",
  },
] as const;

export const AUDIENCES = [
  {
    key: "privat",
    label: "Private Auftraggeber",
    description:
      "Vom Hausanschluss über die Hofbefestigung bis zum kompletten Außenanlagenbau — verständlich beraten, sauber ausgeführt.",
    examples: ["Hausanschlüsse & Erschließung", "Hof- und Einfahrtspflasterung", "Gartengestaltung & Mauern", "Abbruch Nebengebäude"],
  },
  {
    key: "gewerbe",
    label: "Gewerbe & Unternehmen",
    description:
      "Termintreue Bauleistung für Industrie-, Logistik- und Bürostandorte — von der Baugrube bis zur Außenanlage.",
    examples: ["Baugrubenaushub & Verbau", "Erschließung Gewerbeflächen", "Hof- & Lagerflächen", "Rückbau Bestandsbauten"],
  },
  {
    key: "kommune",
    label: "Kommunen & öffentliche Hand",
    description:
      "Vergabekonforme Ausführung kommunaler Bauleistungen mit qualifiziertem Personal und modernem Maschinenpark.",
    examples: ["Kanalbau & Sanierung", "Straßen- und Wegebau", "Spiel- & Schulhofflächen", "Hochwasserschutz & Drainagen"],
  },
] as const;
