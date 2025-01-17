import { SideBar } from "@/app/components/home/sidebar";
import { TopBar } from "@/app/components/topbar";
import { getSession } from "@/lib/session";
import { HubMessages } from "@/app/components/hub/hub-messages";
import { searchHubMessages } from "@/app/api/message/search-hub-messages";


export default async function HubPage({
  params,
}: {
  params: { hubId: string };
}){ 
  const {name , id} = await getSession();
  const messages = await searchHubMessages(params.hubId);

  console.log("NOMEOEM")

  return (
    <div className="w-full min-h-[120vh] flex">
      <SideBar name={name} id={id} />
      <div className="w-full min-h-max items-center flex flex-col gap-5">
        <TopBar name={name} id={id} />
        <div className="w-[92%] min-h-max mt-3">
          <HubMessages hubMessages={messages}  />
        </div>
      </div>
    </div>
  )
}