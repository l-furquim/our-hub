"use client"

import { LogIn } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { enterHub } from "@/app/api/hub/services"
import type { AxiosError } from "axios"



type HubProp = {
  hub: {
    id: string,
    name: string,
    userCount: number,
  }
}

export const EnterHub: React.FC<HubProp> = ({hub}) => {
  const [close, setClose] = useState(false);
  const [message, setMessage] = useState(<></>);

  
  async function enter(){
    try{
      await enterHub(hub.id);

      setMessage(<p className="text-emerald-600">Muito bem ! redirecionando para o hub</p>)

      setTimeout(() => location.replace(`/hub/${hub.id}/${hub.name}`), 1000)

    }catch(err){
      const aErr = err as AxiosError;

      setMessage(<p className="text-red-800">Houve um erro {aErr.cause?.message}</p>)
    }
  }


  return (
    <Dialog open={close} onOpenChange={setClose} >       
      <DialogTrigger asChild>
        <Button className="mr-5 bg-cyan-900 w-14 flex justify-center h-10 items-center rounded-md hover:bg-cyan-950"> <LogIn/> </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border-none h-[250px] w-full">
        <DialogHeader className="flex flex-col gap-5" >
          <DialogTitle className="flex gap-2 w-full justify-center">Deseja entrar em: <p className="text-cyan-600">{hub.name}</p> ?</DialogTitle>
        </DialogHeader>
        <DialogDescription className="w-full flex justify-start ml-5" >
          Não nos responsabilizamos pelo tipo de conteúdo não verificado pela plataforma. 
        </DialogDescription>
        <div className="w-full flex items-center justify-end mr-5 gap-3">
          {message}
          <Button onClick={() => enter()} className="bg-cyan-900 hover:bg-cyan-950" >
            Entrar
          </Button>
          <Button onClick={() => setClose(false)} className="bg-red-800 hover:bg-red-950 ">
            Cancelar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}