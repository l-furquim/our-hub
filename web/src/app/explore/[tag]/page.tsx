import { searchFeatureHubs } from "@/app/api/hub/services";
import { ExploreHubs } from "@/app/components/explore/explore-hubs";
import  { ExploreSideBar } from "@/app/components/explore/explore-side-bar";
import { ExploreHeader } from "@/app/components/explore/expore-header";

export default async function ExplorePage(){
  const hubs = await searchFeatureHubs();


  return (
    <div className="w-full overflow-x-hidden h-[[full]] flex">
      <ExploreSideBar/>
      <div className="w-full m-8  rounded-md bg-zinc-900 h-[100vh] flex flex-col">
        <ExploreHeader hubs={hubs}/>
        <div className="w-full h-full">
          <p className="w-full justify-start mt-10 ml-10 font-semibold text-lg ">Comunidades famosas</p>
          <ExploreHubs hubs={hubs} />
        </div>
      </div>
    </div>
  )
}