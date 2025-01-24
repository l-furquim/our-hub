import { leaveHub } from "@/app/api/hub/services";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { AxiosError } from "axios";
import { DoorOpen } from "lucide-react";
import React, { useState } from "react"

type LeaveHubProps ={
  userId: string,
  hubId: string,
}


export const LeaveHub: React.FC<LeaveHubProps> = ({userId, hubId}) => {
  const [close, setClose] = useState(false);

  async function leave(){
    try{
      await leaveHub(hubId, userId);

      location.replace("/home");
    }catch(err){
      const aErr = err as AxiosError;

      console.log(aErr.cause?.message);
    }
  }

  return (
    <Dialog open={close} onOpenChange={setClose} >       
            <DialogTrigger asChild>
              <Button className="mr-5 bg-transparent w-14 flex justify-center h-10 items-center text-red-600 rounded-md "> <DoorOpen/> </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 flex flex-col justify-center items-center  border-none h-[200px] w-full">
              <DialogHeader className="flex flex-col gap-5" >
                <DialogTitle className="flex gap-2 w-full justify-center">Tem certeza que deseja sair do hub?</DialogTitle>
              </DialogHeader>
              <div className="w-full flex items-center justify-center mr-5 gap-3">
                <Button onClick={() => leave()} className="bg-cyan-900 hover:bg-cyan-950" >
                  Sair
                </Button>
                <Button onClick={() => setClose(false)} className="bg-red-800 hover:bg-red-950 ">
                  Cancelar
                </Button>
              </div>
            </DialogContent>
    </Dialog>
  )
}