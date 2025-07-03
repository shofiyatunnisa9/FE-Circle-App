import { z } from "zod";

export const schemaReply = z.object({
  content: z.string().min(1, { message: "Content Required" }),
  images: z.instanceof(File).optional(),
});

export type schemaReplyDTO = z.infer<typeof schemaReply>;
