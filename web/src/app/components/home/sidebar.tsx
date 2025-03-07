import { Binoculars, Home } from "lucide-react"
import Link from "next/link"
import { NewHubButton } from "./new-hub-button"
import { HubContainer } from "./hub-container"
import { SearchUserHubs } from "@/app/api/hub/services"
import React, { Suspense } from "react"
import type { UserAuth } from "@/app/types/user-types"



export const SideBar: React.FC<UserAuth> = async ({id}) => {
 const hubs = await SearchUserHubs(id);

  return (
    <div className="w-[17%] bg-zinc-900 min-h-max gap-10 flex flex-col items-center">
      <Link href={"/home"} className="w-full hover:cursor-pointer flex justify-start  ml-10 text-2xl mt-5 font-bold">Ourhub</Link>
      <Link href={"/home"} className="text-lg w-40 hover:opacity-70 justify-center bg-cyan-900 p-2 rounded-md flex items-center gap-2" >Home <Home/> </Link>
      <Link href={"/explore/discover"} className="text-lg w-40 hover:opacity-70 justify-center border-cyan-900 border-[1px] p-2 rounded-md flex items-center gap-2" >Explorar <Binoculars/> </Link>
      <hr className="h-[1px] border-cyan-900 w-[50%]" />
      <NewHubButton/>
        <Suspense fallback={<p>Carregando...</p>}>
          <HubContainer hubs={hubs} /> 
        </Suspense>   
    </div>
  )
}