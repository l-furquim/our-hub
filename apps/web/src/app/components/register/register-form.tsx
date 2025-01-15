"use client"

import { RegisterUser } from "@/app/api/user/register-user";
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod";
import type { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod"

const RegisterFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3, {message: "Seu nickname deve conter pelo menos 5 caracteres"}),
  password: z.string().min(3, {message: "Sua senha deve conter pelo menos 5 caracteres"}),
});

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export const RegisterForm = () => {
    const [message, setMessage] = useState(<></>);

    const {handleSubmit, register,setValue} = useForm<RegisterFormType>({
      resolver: zodResolver(RegisterFormSchema),
      defaultValues: {
          name: "",
          email: "",
          password: "",
      },
  });

  async function handleRegister(data: RegisterFormType){
      const response = await RegisterUser(JSON.stringify(data));

      if(response?.sucessMessage){
        setMessage(<p className="text-sm text-emerald-700">Conta criada com sucesso!</p>);

        setTimeout(() => location.replace("/login"), 1000)
      }else{
        setMessage(<p className="text-sm text-red-700">{response?.errorMessage}</p>)
      }

}

  return (
    <form className="flex flex-col gap-5 justify-center items-center" onSubmit={handleSubmit(handleRegister)}>
      {message}
      <input {...register("email")} placeholder="seu@email.com" type="text" className="placeholder:text-sm text-sm focus:outline-none placeholder:text-muted-foreground w-[55%] bg-zinc-900 border-[1px] h-9 border-cyan-900 rounded-md" />
      <input {...register("name")} placeholder="nickname" type="text" className="placeholder:text-sm text-sm focus:outline-none placeholder:text-muted-foreground w-[55%] bg-zinc-900 border-[1px] h-9 border-cyan-900 rounded-md" />
      <input {...register("password")} placeholder="senha123" type="text" className="placeholder:text-sm text-sm focus:outline-none placeholder:text-muted-foreground w-[55%] bg-zinc-900 border-[1px] h-9 border-cyan-900 rounded-md" />
      <Button type="submit" className="w-[55%] bg-cyan-900 hover:bg-cyan-950  border-none h-9 rounded-md" >Criar conta</Button>
    </form>
  )
}