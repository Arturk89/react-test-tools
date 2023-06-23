import { httpClient } from "../../../shared/utils/http/http-client";
import { collectionName } from "./consts";
import { ZodError, z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  age: z.number(),
  isActive: z.boolean(),
});

const UsersSchema = z.array(UserSchema);

export type User = z.infer<typeof UserSchema>;
export type Users = z.infer<typeof UsersSchema>;

export const getAllUsers = (): Promise<Users> =>
  httpClient()
    .getAll<Users>(collectionName)
    .then((res) => UsersSchema.parse(res))
    .catch((e) => {
      if (e instanceof ZodError) {
        console.log("ZOD Type error ", e);
        return;
      }
      return e;
    });
