import { Binoculars, Home } from "lucide-react"
import Link from "next/link"
import { NewHubButton } from "./new-hub-button"
import { HubContainer } from "./hub-container"
import { SearchUserHubs } from "@/app/api/hub/search-user-hubs"
import React, { Suspense } from "react"
import type { UserAuth } from "@/app/types/user-types"



export const SideBar: React.FC<UserAuth> = async ({name, id}) => {
// const hubs = await SearchUserHubs(id);

  return (
    <div className="w-[17%] bg-zinc-900 h-full gap-10 flex flex-col items-center">
      <h1 className="w-full flex justify-start  ml-10 text-2xl mt-5 font-bold">Ourhub</h1>
      <Link href={"/home"} className="text-lg w-40 hover:opacity-70 justify-center border-cyan-900 border-[1px] p-2 rounded-md flex items-center gap-2" >Home <Home/> </Link>
      <Link href={"/home"} className="text-lg w-40 hover:opacity-70 justify-center border-cyan-900 border-[1px] p-2 rounded-md flex items-center gap-2" >Explorar <Binoculars/> </Link>
      <hr className="h-[1px] border-cyan-900 w-[50%]" />
      <NewHubButton/>
      <li className="list-none flex flex-col gap-6">
        <Suspense fallback={<p>Carregando...</p>}>
          <HubContainer/>  
        </Suspense>   
      </li>
    </div>
  )
}