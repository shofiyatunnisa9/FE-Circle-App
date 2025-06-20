import z from "zod";

export const schemaAuth = z.object({
  username: z.string().min(1, { message: "Username Required" }),
  email: z.string().min(1, { message: "Email Required" }),
  password: z.string().min(6, { message: "Password must 6 caracter" }),
});

export type authSchemaDTO = z.infer<typeof schemaAuth>;
