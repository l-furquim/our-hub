"use client"

import type { Hub } from "@/app/types/hub-types";

import Link from "next/link";
import type React from "react";

type HubContainerProps = {
  hubs: Hub[]
}


/* const hubs = [
  {
    name: "Hub dos amigos",
    image: "http://github.com/l-furquim.png",
    id: "1111",
  },
  {
    name: "Hub dos amigos",
    image: "http://github.com/l-furquim.png",
    id: "11122",
  },
  {
    name: "Hub dos amigos",
    image: "http://github.com/l-furquim.png",
    id: "10298",
  },
] */

export const HubContainer: React.FC<HubContainerProps> = ({hubs}) => {
  

  if(!hubs){
    return <p>Erro ao buscar os hubs...</p>
  }
  if(hubs[0] == undefined){
    return <p className="text-sm ml-2">Você ainda não entrou em nenhum hub</p>
  }

  return (
    <li className="list-none flex flex-col gap-6">
        {hubs.map((hub) => (
       <ul key={hub.id} className="list-none">
        <div className="w-full">
            <Link className="w-full flex gap-2 hover:opacity-70 hover:cursor-pointer justify-start items-center" href={`/hub/${hub.id}/${hub.name}`}>
              <img src={"http://github.com/l-furquim.png"} alt="Hub image" className="rounded-xl" width={32} height={32} />
              <p>{hub.name.length > 13 ? hub.name.slice(0, 13) + "..." : hub.name}</p>
            </Link>
          </div>
      </ul>
    ))}
    </li>
  )

  
}