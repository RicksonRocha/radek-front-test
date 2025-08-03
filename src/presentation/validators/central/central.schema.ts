import { z } from "zod";

export const CENTRAL_SCHEMA = z.object({
  name: z.string().min(3, "Nome é obrigatório"),
  mac: z
    .string()
    .min(1, "MAC é obrigatório")
    .regex(
      /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
      "MAC inválido. Formato esperado: XX:XX:XX:XX:XX:XX"
    ),
  modelId: z.number().min(1, "Modelo é obrigatório"),
});

export type CentralFormValue = z.infer<typeof CENTRAL_SCHEMA>;
