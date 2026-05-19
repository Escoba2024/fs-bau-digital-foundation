import { z } from "zod";

export const PROJECT_TYPES = ["privat", "gewerbe", "kommune"] as const;
export const SERVICE_TYPES = ["tiefbau", "erdbau", "abbruch", "galabau", "sonstiges"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an.").max(100),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.").max(255),
  phone: z
    .string()
    .trim()
    .max(50)
    .optional()
    .or(z.literal("").transform(() => undefined)),
  project_type: z.enum(PROJECT_TYPES, { required_error: "Bitte Projekttyp wählen." }),
  service: z.enum(SERVICE_TYPES, { required_error: "Bitte Leistung wählen." }),
  message: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).")
    .max(2000, "Maximal 2000 Zeichen."),
});

export type ContactInput = z.infer<typeof contactSchema>;
