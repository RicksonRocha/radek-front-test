import { z } from "zod";

export const SEARCH_SCHEMA = z.object({
  search: z.string().min(3, "Digite no mínimo 3 caracteres"),
});
