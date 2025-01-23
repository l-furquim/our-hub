"use client"

import { LoginUser } from "@/app/api/user/login-user";
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string().email({message: "Email inválido"}),
  password: z.string(),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;


export const LoginForm = () => {
    const [message, setMessage] = useState(<></>);
  
    const {handleSubmit, register,setValue} = useForm<LoginFormType>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function handleLogin(data: LoginFormType){
      const response = await LoginUser(JSON.stringify(data));
      
      if(response?.sucessMessage){
          location.replace("/home");
        }
      setMessage(<p className="text-sm text-red-700">{response?.errorMessage}</p>)
    }

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-5 justify-center items-center w-full" >
      {message}
      <input {...register("email")} placeholder="seu@email.com" type="text" className="placeholder:text-sm text-sm focus:outline-none placeholder:text-muted-foreground w-[55%] bg-zinc-900 border-[1px] h-9 border-cyan-900 rounded-md" />          
        <input {...register("password")} placeholder="senha123" type="text" className="placeholder:text-sm text-sm focus:outline-none placeholder:text-muted-foreground w-[55%] bg-zinc-900 border-[1px] h-9 border-cyan-900 rounded-md" />
        <Button type="submit"  className="w-[55%] bg-cyan-900 hover:bg-cyan-950  border-none h-9 rounded-md" >Entrar</Button>
    </form>
  )
} 