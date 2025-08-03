import { z } from "zod";

export const ModelSchema = z.object({
  id: z.number(),
  name: z.string(),
});
