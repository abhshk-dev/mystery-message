import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username should be atleast 2 characters")
  .max(20, "username should not exceed 20 characters")
  .regex(/^[a-zA-Z0-9]/);


export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:'Invalid email address'}),
    password:z.string().min(6,{message:'password must be atleast 6 characters'})

})