import { MessageCircleMore, PackageOpen } from "lucide-react";
import { TopBar } from "../components/topbar";
import { SideBar } from "../components/home/sidebar";
import { getSession, GetUserSession } from "@/lib/session";
import { getServerSession } from "next-auth";

export default async function HomePage(){
  // const {name, id} = await getSession(); 
  const aaa = await GetUserSession();

  console.log(aaa);

  return (
    <div className="w-full h-full flex">
       {/* <SideBar name={name} id={id} />
        <div className="flex flex-col w-full h-full gap-20 justify-start  items-center">
          <TopBar name={name} id={id} />
          <p className="w-[40%] items-center text-3xl mt-20 text-muted-foreground flex gap-5  font-medium">
            Selecione o hub que deseja conversar
            <MessageCircleMore size={40}/>
          </p>
          <p className="w-[40%] items-center text-3xl text-muted-foreground flex gap-5  font-medium">
            Ou até mesmo crie seu próprio
            <PackageOpen size={40} />
          </p>
        </div> */}
    </div>
  )
}