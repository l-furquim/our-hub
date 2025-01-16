import { MessageCircleMore, PackageOpen } from "lucide-react";
import { TopBar } from "../components/topbar";
import { SearchUserHubs } from "../api/hub/search-user-hubs";

export default function HomePage(){
  return (
    <div className="w-full h-full flex flex-col">
        <TopBar  />
        <div className="flex flex-col w-full h-full gap-20 justify-start mt-40 items-center">
          <p className="w-[40%] items-center text-3xl text-muted-foreground flex gap-5  font-medium">
            Selecione o hub que deseja conversar
            <MessageCircleMore size={40}/>
          </p>
          <p className="w-[40%] items-center text-3xl text-muted-foreground flex gap-5  font-medium">
            Ou até mesmo crie seu próprio
            <PackageOpen size={40} />
          </p>
        </div>
    </div>
  )
}