import { z } from "zod";
import { isValidDate } from "@/lib/formUtils.ts";

export const formOneSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password should be at least 8 characters"),
});

export const formTwoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z
    .number({ invalid_type_error: "Please enter a number", coerce: true })
    .min(1, "Phone number is required")
    .max(9999999999, "Maximum 10 characters")
    .transform((number) => number.toString()),
  ssn: z
    .string()
    .min(1, "Please input the complete SSN")
    .max(11, "Invalid length of SSN")
    .regex(/^\d\d\d-\d\d-\d\d\d\d$/, "SSN should be in format 111-11-1111"),
  homeAddress: z.string().min(1, "Home address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .regex(/^\d\d\/\d\d\/\d\d\d\d$/, "Date should be in DD/MM/YYYY format")
    .refine(isValidDate, "Invalid date"),
});
