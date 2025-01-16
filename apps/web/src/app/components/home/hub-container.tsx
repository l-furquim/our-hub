"use client"

import type { Hub } from "@/app/types/hub-types";
import Link from "next/link";
import type React from "react";

type HubContainerProps = {
  hubs: Hub[]
}

export const HubContainer: React.FC<HubContainerProps> = ({hubs}) => {

  if(!hubs){
    return <p>Erro ao buscar os hubs...</p>
  }
  if(hubs[0] == undefined){
    return <p className="text-sm ml-2">Você ainda não entrou em nenhum hub</p>
  }

  return (
      <>
        {hubs.map((hub) => (
       <ul key={hub.id} className="list-none">
        <div className="w-full" key={hub.id}>
            <Link className="w-full flex gap-2 justify-center items-center" href={`/hub/${hub.id}`}>
              <img src={"http://github.com/furqas.png"} alt="Hub image" className="rounded-xl" width={32} height={32} />
              <p>{hub.name.length > 13 ? hub.name.slice(0, 13) + "..." : hub.name}</p>
            </Link>
          </div>
      </ul>
    ))}
      </>
  )

  
}