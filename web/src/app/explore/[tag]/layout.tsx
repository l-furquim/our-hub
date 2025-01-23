import type React from "react"

export default function ExplorerLayout({
  children
}: {children: React.ReactNode}){
  return(
    <div className="w-full h-[100vh]">
      {children}
    </div>
  )
}