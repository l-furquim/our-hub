import { SideBar } from "@/app/components/home/sidebar";
import { TopBar } from "@/app/components/topbar";
import { getSession } from "@/lib/session";
import { HubMessages } from "@/app/components/hub/hub-messages";


export default async function HubPage({
  params,
}: {
  params: { hubId: string };
}){ 
  const {name , id} = await getSession();
  console.log("NOMEOEM")

  return (
    <div className="w-full min-h-[100vh] flex">
      <SideBar name={name} id={id} />
      <div className="w-full h-full items-center flex flex-col gap-5">
        <TopBar name={name} id={id} />
        <div className="w-[92%] h-full mt-3">
          <HubMessages/>
        </div>
      </div>
    </div>
  )
}