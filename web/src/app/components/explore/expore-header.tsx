"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import type React from "react"
import type { ExploreHubsProps } from "./explore-hubs"

export const ExploreHeader: React.FC<ExploreHubsProps> = () => {

  return (
    <div className="mt-48 flex flex-col gap-2 items-center justify-center">
      
      <h1 className="font-bold text-2xl  text-cyan-600" >Procure sua comunidade no Ourhub !</h1>
      <p>Em breve estara disponível a busca por genêros</p>
      <div className="w-full justify-center mt-6 items-center flex gap-2">
        <input type="text" className="bg-zinc-900 border border-cyan-900 w-[35%] rounded-md p-2 h-10 focus:outline-none" />
        <Button className="bg-cyan-900 hover:bg-cyan-950" >  
          <Search/>
        </Button>
      </div>
    </div>
  )
}