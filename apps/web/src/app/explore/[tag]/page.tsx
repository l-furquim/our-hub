import { ExploreHubs } from "@/app/components/explore/explore-hubs";
import  { ExploreSideBar } from "@/app/components/explore/explore-side-bar";
import { ExploreHeader } from "@/app/components/explore/expore-header";

export default async function ExplorePage(){
  const hubs = await searchFeatureHubs();


  return (
    <div className="w-full h-[[full]] flex">
      <ExploreSideBar/>
      <div className="w-full m-8  rounded-md bg-zinc-900 h-[100vh] flex flex-col">
        <ExploreHeader/>
        <div className="w-full h-full">
          <p className="w-full justify-start ml-2" >Comunidades famosas</p>
          <ExploreHubs/>
        </div>
      </div>
    </div>
  )
}