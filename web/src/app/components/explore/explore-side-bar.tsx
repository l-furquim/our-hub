import { Button } from "@/components/ui/button"
import { Hammer, Rocket } from "lucide-react"
import Link from "next/link"
/* 
{
  params,
}: {
  params: { tag: string };
} */


export const ExploreSideBar = () => {
  
  return (
    <div className="w-[15%] h-[100vh] flex flex-col bg-zinc-900 gap-8">
      <Link href="/home" className="w-full flex hover:cursor-pointer justify-start ml-10 text-2xl font-bold mt-5" >Ourhub</Link>
      <div className="w-full h-[100vh] gap-10 flex flex-col items-center mt-5"> 
        <Button className="bg-cyan-900 w-40   hover:bg-cyan-950" >
          <Rocket/> Discover
        </Button>
        <Button className="bg-zinc-900 w-40   hover:opacity-70 border border-cyan-900" >
          <Hammer/> Em andamento...
        </Button>
      </div>
    </div>
  )
}