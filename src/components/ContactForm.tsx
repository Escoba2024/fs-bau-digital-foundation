import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema, type ContactInput } from "@/lib/contact.schema";
import { submitContactRequest } from "@/lib/contact.functions";

const PROJECT_OPTIONS = [
  { value: "privat", label: "Privater Auftraggeber" },
  { value: "gewerbe", label: "Gewerbe / Unternehmen" },
  { value: "kommune", label: "Kommune / öffentliche Hand" },
] as const;

const SERVICE_OPTIONS = [
  { value: "tiefbau", label: "Tiefbau" },
  { value: "erdbau", label: "Erdbau" },
  { value: "abbruch", label: "Abbruch" },
  { value: "galabau", label: "GalaBau" },
  { value: "sonstiges", label: "Sonstiges / Beratung" },
] as const;

export function ContactForm({ variant = "full" }: { variant?: "full" | "compact" }) {
  const submit = useServerFn(submitContactRequest);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      project_type: undefined as unknown as ContactInput["project_type"],
      service: undefined as unknown as ContactInput["service"],
      message: "",
    },
  });

  const onSubmit = async (values: ContactInput) => {
    setSubmitting(true);
    try {
      await submit({ data: values });
      toast.success("Anfrage gesendet — wir melden uns innerhalb von 1–2 Werktagen.");
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unbekannter Fehler.";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid gap-5"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={form.formState.errors.name?.message} required>
          <Input
            {...form.register("name")}
            placeholder="Max Mustermann"
            autoComplete="name"
          />
        </Field>
        <Field label="E-Mail" error={form.formState.errors.email?.message} required>
          <Input
            type="email"
            {...form.register("email")}
            placeholder="ihre@adresse.de"
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <Field label="Telefon" error={form.formState.errors.phone?.message}>
          <Input
            type="tel"
            {...form.register("phone")}
            placeholder="optional"
            autoComplete="tel"
          />
        </Field>
        <Field label="Projekttyp" error={form.formState.errors.project_type?.message} required>
          <Select
            onValueChange={(v) => form.setValue("project_type", v as ContactInput["project_type"], { shouldValidate: true })}
            value={form.watch("project_type")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Bitte wählen" />
            </SelectTrigger>
            <SelectContent>
              {PROJECT_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Leistung" error={form.formState.errors.service?.message} required>
          <Select
            onValueChange={(v) => form.setValue("service", v as ContactInput["service"], { shouldValidate: true })}
            value={form.watch("service")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Bitte wählen" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field label="Ihr Anliegen" error={form.formState.errors.message?.message} required>
        <Textarea
          rows={variant === "compact" ? 4 : 6}
          {...form.register("message")}
          placeholder="Beschreiben Sie Ihr Projekt — Ort, Umfang, gewünschter Zeitraum, Besonderheiten."
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäß unserer{" "}
          <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> zu.
        </p>
        <Button type="submit" size="lg" disabled={submitting} className="shadow-glow">
          {submitting ? (
            <><Loader2 className="size-4 animate-spin" /> Wird gesendet…</>
          ) : (
            <><Send className="size-4" /> Anfrage senden</>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm font-medium">
        {label}{required && <span className="text-primary"> *</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
