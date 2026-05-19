import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";

const NAV = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center size-9 rounded-md bg-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-105">
            <HardHat className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">FS-BAU</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Meisterbetrieb</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-accent"
              activeProps={{ className: "text-foreground bg-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="shadow-glow">
            <Link to="/kontakt">Projekt anfragen</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menü öffnen">
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background">
            <SheetHeader>
              <SheetTitle className="text-left font-display">Navigation</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-accent" }}
                >
                  {n.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link to="/kontakt" onClick={() => setOpen(false)}>
                  Projekt anfragen
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
