import Link from "next/link"

export type ExploreHubsProps = {
  hubs: [{
    id: string,
    name: string,
    userId: string,
    userCount: Number
  }]
}

export const ExploreHubs: React.FC<ExploreHubsProps> = ({hubs}) => {

  return (
    <div className="w-full h-full flex flex-col">
      <li className="w-full m-10 h-full list-none flex gap-5">
        {hubs.map((hub) => (
          <ul key={hub.id} className="rounded-md list-none w-56 h-56 bg-zinc-800 flex flex-col" >
            <Link className="w-full h-full" href={`/hub/${hub.id}/${hub.name}`}>
              <div className="w-full h-[30%] bg-cyan-900">
              </div>
              <div className="w-full h-full flex flex-col items-start ml-2 gap-2">
                <img src={"http://github.com/l-furquim.png"} alt="Hub image" className="rounded-xl" width={32} height={32} />
                <h1 className="text-base font-bold">{hub.name}</h1>
                <p className="text-sm w-full mt-12">
                  {hub.userCount.toString()} membros
                </p>
              </div>
            </Link>
          </ul>
        ))}
      </li>
    </div>
  )
}