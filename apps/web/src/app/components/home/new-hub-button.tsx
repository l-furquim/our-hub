"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export const NewHubButton = () => {
  return (
      <Dialog>
      <DialogTrigger asChild>
        <Button onClick={() => console.log("novo hub")} className="bg-cyan-900 w-40 hover:bg-cyan-950 flex justify-center">
          Novo hub
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-950 border-[1px] border-muted-foreground h-[300px] w-full">
        <DialogHeader className="flex flex-col gap-5" >
          <DialogTitle>Como será seu novo hub?</DialogTitle>
          <DialogDescription>
           Note, que ao criar um hub por padrão ele estará público para todos acessarem, se quiser alterar após a criação vá em configurações do hub no menu
          </DialogDescription>
        </DialogHeader>
          <div className="flex flex-col w-full h-full gap-5" >
            <div className="w-full flex gap-3 justify-center items-center">
              <input className="rounded-md border-none focus:outline-none placeholder:text-sm text-sm bg-zinc-900 p-2 w-64 h-10"    type="text" placeholder="O nome vem aqui" />
              <img src="http://github.com/l-furquim.png" className="rounded-xl" width={32} height={32} />
            </div>
          </div>
          <DialogFooter>
            <Button className="bg-cyan-900 hover:bg-cyan-950" >
              Criar
            </Button>
          </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}