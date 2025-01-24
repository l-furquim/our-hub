import { Check } from "lucide-react"
import Link from "next/link"
import { EnterHub } from "./enter-hub"

export type ExploreHubsProps = {
  hubs: [{
    id: string,
    name: string,
    userId: string,
    userCount: number,
    loggedUserIn: boolean
  }]
}

export const ExploreHubs: React.FC<ExploreHubsProps> = ({hubs}) => {

  return (
    <div className="w-full h-full flex flex-col">
      <li className="w-full m-10 h-full list-none flex gap-5">
        {hubs.map((hub) => (
          <ul key={hub.id} className="rounded-md list-none w-56 h-56 bg-zinc-800 flex flex-col" >
              <div className="w-full h-[30%] bg-cyan-900">
              </div>
              <div className="w-full h-fit flex flex-col items-start ml-2 gap-2">
                <img src={"http://github.com/l-furquim.png"} alt="Hub image" className="rounded-xl" width={32} height={32} />
                <Link className={`w-full h-full ${!hub.loggedUserIn ? "pointer-events-none": ""} `} href={`/hub/${hub.id}/${hub.name}`}>
                  <h1 className="text-base font-bold">{hub.name}</h1>
                </Link>
                <div className="w-full mt-1 mb-5 flex items-center justify-end">
                    {hub.loggedUserIn ? 
                      <Link className="mr-5 bg-cyan-900 w-14 flex justify-center h-10 items-center rounded-md hover:bg-cyan-950" href={`/hub/${hub.id}/${hub.name}`} >
                        <Check/>
                      </Link> : 
                      <EnterHub hub={hub} />
                    }
                </div>
                <p className="text-sm w-full mb-1">
                  {hub.userCount.toString()} membros
                </p>
              </div>
          </ul>
        ))}
      </li>
    </div>
  )
}