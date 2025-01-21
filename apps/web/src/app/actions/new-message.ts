"use server"


import { z } from 'zod'
import Stomp from "stompjs"
import type { Client } from '@stomp/stompjs';
import { backEndApi } from '@/lib/api';
 
const schema = z.object({
  user: z.string().min(1),
  message: z.string().min(1),
})

export async function newMessage(data: FormData){
  console.log("data");

  console.log(data.get("user"));

  const validatedFields = schema.safeParse({
    user: data.get("user"),
    message: data.get('message'),
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