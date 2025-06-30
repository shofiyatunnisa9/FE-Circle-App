import { z } from "zod";

export const schemaProfile = z.object({
  fullname: z.string(),
  username: z.string(),
  avatar: z
    .any()
    .optional()
    .transform((file) =>
      file instanceof FileList && file.length > 0 ? file[0] : undefined
    ),
  bio: z.string(),
  banner: z
    .any()
    .optional()
    .transform((file) =>
      file instanceof FileList && file.length > 0 ? file[0] : undefined
    ),
});

export type schemaProfileDTO = z.infer<typeof schemaProfile>;
