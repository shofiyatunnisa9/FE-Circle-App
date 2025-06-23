import z from "zod";
export const schemaThread = z.object({
  content: z.string().min(1, { message: "Email required" }),
  images: z.instanceof(File).optional(),
});

export type schemaThreadDTO = z.infer<typeof schemaThread>;
