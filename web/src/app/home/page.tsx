import { MessageCircleMore, PackageOpen } from "lucide-react";
import { TopBar } from "../components/topbar";

import { SideBar } from "../components/home/sidebar";
import { getUserSession } from "@/lib/session";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default async function HomePage(){
  // const {name, id} = await getSession(); 
  const { id, name, email, image } = await getUserSession();

  return (
    <div className="w-full h-full flex">
        <SideBar name={name} id={id} />
        <div className="flex flex-col w-full h-full gap-20 justify-start  items-center">
          <TopBar image={image} name={name} id={id} />
          <p className="w-[40%]  justify-start items-center text-3xl mt-20 text-muted-foreground flex gap-2  font-medium">
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