import { z } from "zod";

export const ExampleSchema = z.object({
  diameter: z.string().min(2, {
    message: "* kamida 2ta harifan ko'p bo'lshi kerak",
  }),

  number: z
    .number()
    .min(2, {
      message: "* 2dan yuqori bo'lshi kerak",
    })
    .max(20, {
      message: "* 2dan yuqori bo'lmasligi kerak",
    }),
});

export type Example = z.infer<typeof ExampleSchema>;
