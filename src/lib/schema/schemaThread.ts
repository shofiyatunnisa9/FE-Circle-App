import z from "zod";
export const schemaThread = z.object({
  content: z.string().min(1, { message: "Content required" }),
  images: z.any().optional(),
});

export type schemaThreadDTO = z.infer<typeof schemaThread>;

export interface typeThread {
  id: string;
  content: string;
  images?: string;
  createdAt: string;
  fullname: string;
  username: string;
  avatar: string;
  likes?: number;
  replies?: number;
}

export interface typeThreadPayload {
  message: string;
  payload: typeThread[];
}
