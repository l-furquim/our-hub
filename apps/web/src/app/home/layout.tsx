import type React from "react";
import { SideBar } from "../components/home/sidebar";
import { TopBar } from "../components/topbar";

export default function HomeLayout({
  children
}: {children: React.ReactNode}){
  return (
    <div className="w-full h-[100vh] flex">
      {children}
    </div>
  )
}