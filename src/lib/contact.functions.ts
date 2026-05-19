import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { contactSchema } from "./contact.schema";

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_requests").insert({
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      project_type: data.project_type,
      service: data.service,
      message: data.message,
    });

    if (error) {
      console.error("[contact_requests] insert failed:", error);
      throw new Error("Anfrage konnte nicht gespeichert werden. Bitte später erneut versuchen.");
    }

    return { ok: true as const };
  });
