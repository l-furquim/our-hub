import { SideBar } from "@/app/components/home/sidebar";
import { TopBar } from "@/app/components/topbar";
import { getUserSession } from "@/lib/session";
import { HubMessages } from "@/app/components/hub/hub-messages";
import { searchHubMessages } from "@/app/api/message/search-hub-messages";

type tParams = Promise<{hubId: string, hubName: string}>;

export default async function HubPage(props: {params: tParams}){
  
  const { hubId, hubName } = await props.params;
  
  const messages = await searchHubMessages(hubId);
  
  const { name, id, image } = await getUserSession();

  return (
    <div className="w-full min-h-[120vh] flex">
      <SideBar name={name} id={id} />
      <div className="w-full min-h-max items-center flex flex-col gap-5">
        <TopBar image={image} name={name} id={id} />
        <div className="w-[92%] min-h-max mt-3">
          <HubMessages userName={name} userId={id} hubInfo={{
            name: hubName,
            id: hubId
          }} hubMessages={messages} />
        </div>
      </div>
    </div>
  )
}