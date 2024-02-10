import { z } from "zod";

export const userSchema = z.object({
  phone: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone number must be a string",
    })
    .min(1),

  region_id: z
    .number({
      required_error: "Region ID is required",
      invalid_type_error: "Region ID must be a number",
    })
    .int()
    .positive(),

  name: z
    .string({
      required_error: "User name is required",
      invalid_type_error: "User name must be a string",
    })
    .min(1),

  lastname: z
    .string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be a string",
    })
    .min(1),
});
