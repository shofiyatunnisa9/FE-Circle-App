import z from "zod";
export const schemaThread = z.object({
  content: z.string().min(1, { message: "Content required" }),
  images: z
    .any()
    .refine((file: FileList) => file && file.length > 0)
    .optional(),
});

export type schemaThreadDTO = z.infer<typeof schemaThread>;

export interface typeThread {
  content: string;
  images?: string;
  createdAt: string;
  username: string;
  image: string;
}

export interface typeThreadPayload {
  message: string;
  payload: typeThread[];
}
