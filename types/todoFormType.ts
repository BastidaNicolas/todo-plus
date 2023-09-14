import * as z from "zod";

export const formSchema = z.object({
    title: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).max(30, {
        message: "Title is to long.",
    }),
    date: z.coerce.date().refine((date) => date > new Date(), {
        message: "Date and time must be later than the current date and time.",
    }),
    description: z.string().optional(),
    sync: z.boolean()
  })