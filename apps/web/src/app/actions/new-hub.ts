"use server"

import { backEndApi } from "@/lib/api";
import { getUserSession } from "@/lib/session";

import { z } from 'zod'
 
const schema = z.object({
  name: z.string().max(22, {
    message: "Limite máximo para nomes são 22 caracteres"
  }),
})


export async function newHub(prevState: any, formData: FormData){

  console.log(formData.get("name"));

  const validatedFields = schema.safeParse({
    name: formData.get('name'),
  });

  if (!validatedFields.success) {    
    return {
      message: validatedFields.error.flatten().fieldErrors.name?.at(0),
    }
  }

  try{
    const user = await getUserSession();

    console.log("Aqui o user id", user.id);

    const response = await backEndApi.post("/hub/new", JSON.stringify({
      name: validatedFields.data.name,
      userId: user.id
    }));

    return {
      message: "Hub criado com sucesso"
    };

  }catch(err){

  }

 
}