import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Fehler 404</p>
        <h1 className="mt-3 text-5xl font-bold text-foreground">Seite nicht gefunden</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Die gewünschte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Diese Seite konnte nicht geladen werden
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FS-BAU GmbH",
  description:
    "Meisterbetrieb für Tiefbau, Erdbau, Abbruch und Garten- und Landschaftsbau (GalaBau) im Kreis Altenkirchen / Westerwald.",
  areaServed: ["Kreis Altenkirchen", "Westerwald", "Rheinland-Pfalz", "Nordrhein-Westfalen"],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.zip,
    addressLocality: SITE.address.city,
    addressCountry: "DE",
  },
  telephone: SITE.phone,
  email: SITE.email,
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FS-BAU GmbH — Tiefbau, Erdbau, Abbruch & GalaBau | Meisterbetrieb Altenkirchen" },
      { name: "description", content: "Meisterbetrieb für Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen und überregional. Für private Auftraggeber, Gewerbe und Kommunen." },
      { name: "author", content: "FS-BAU GmbH" },
      { property: "og:site_name", content: "FS-BAU GmbH" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:title", content: "FS-BAU GmbH — Tiefbau, Erdbau, Abbruch & GalaBau | Meisterbetrieb Altenkirchen" },
      { name: "twitter:title", content: "FS-BAU GmbH — Tiefbau, Erdbau, Abbruch & GalaBau | Meisterbetrieb Altenkirchen" },
      { property: "og:description", content: "Meisterbetrieb für Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen und überregional. Für private Auftraggeber, Gewerbe und Kommunen." },
      { name: "twitter:description", content: "Meisterbetrieb für Tiefbau, Erdbau, Abbruch und GalaBau im Kreis Altenkirchen und überregional. Für private Auftraggeber, Gewerbe und Kommunen." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fdf0339b-82c0-480f-9ae0-5b2dc4b842ab/id-preview-11961c58--3e3f91e7-ce5e-4df2-9fd0-f27e266ad72e.lovable.app-1779300704238.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fdf0339b-82c0-480f-9ae0-5b2dc4b842ab/id-preview-11961c58--3e3f91e7-ce5e-4df2-9fd0-f27e266ad72e.lovable.app-1779300704238.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
