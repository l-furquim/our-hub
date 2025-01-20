"use server"


import { z } from 'zod'
import Stomp from "stompjs"
import type { Client } from '@stomp/stompjs';
 
const schema = z.object({
  user: z.string().min(1),
  message: z.string().min(1),
})

export async function newMessage(data: FormData, stomp: Client){
  console.log("data");

  console.log(data);

  const validatedFields = schema.safeParse({
    user: data.get("name"),
    message: data.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  stomp.publish({
    destination: "/app/new-message",
      body: JSON.stringify(
        { 
          user: validatedFields.data.user,
          message: validatedFields.data.message
       }
      ), 
      headers: {} 
  });
  
}