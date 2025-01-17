import type {MessageComponent } from "@/app/types/message-types"
import type React from "react"

type MessageContainer = {
  messages: MessageComponent[],
}

export const MessageContainer: React.FC<MessageContainer> = ({messages}) => {
  if(!messages){
    return;
  }

  return (
    <li className="flex list-none gap-1 flex-col w-[40%]">
      {messages.map((message) => (
        <ul className="w-full" key={message.content}>
          <p className="text-sm text-zinc-200 text-muted-foreground">Lucas</p>
            <div className="w-full break-all bg-zinc-200 flex justify-start p-2 rounded-md text-zinc-950">
              {message.content}
            </div>
            <div className="" >
              {}
            </div>
        </ul>
      ))}
    </li>
    
  )
}