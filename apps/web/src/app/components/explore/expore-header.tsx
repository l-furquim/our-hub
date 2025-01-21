import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export const ExploreHeader = () => {
  return (
    <div className="mt-48 flex flex-col gap-2 items-center justify-center">
      
      <h1 className="font-bold text-2xl  text-cyan-600" >Procure sua comunidade no Ourhub !</h1>
      <p>Em breve estara disponível a busca por genêros</p>
      
      <div className="w-full justify-center mt-6 items-center flex gap-2">
        <input type="text" className=" focus:outline-none p-2 rounded-md h-10 w-[40%] bg-zinc-900 border-[1px] border-cyan-900" />
        <Button className="bg-cyan-900 hover:bg-cyan-950" >  
          <Search/>
        </Button>
      </div>
    </div>
  )
}