"use client"

import type { Message } from "@/app/types/message-types"
import type React from "react"

export const MessageContainer: React.FC<Message> = ({ content, sendedAt }) => {
  return (
    <div className="flex gap-1 flex-col w-[40%]">
      <p className="text-sm text-zinc-200 text-muted-foreground">Lucas</p>
        <div className="w-[full] bg-zinc-200 flex justify-start p-2 rounded-md text-zinc-950">
          {content}
        </div>
    </div>
    
  )
}