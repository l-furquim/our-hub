"use server"

import { z } from 'zod'
 
const schema = z.object({
  user: z.string().min(1),
  message: z.string().min(1),
  userId: z.string().min(1),
})

export async function newMessage(data: FormData){


  const validatedFields = schema.safeParse({
    user: data.get("user"),
    message: data.get('message'),
    userId: data.get("userId"),
  });

  if (!validatedFields.success) {
    console.log("Erro na validacao")

    return {
      state: false,
    }
  }

  return {
    state: true,
  }
}