import type {MessageComponent } from "@/app/types/message-types"
import type { Message } from "@/app/types/message-types"
import type React from "react"

type MessageContainer = {
  messages: Message[],
  userId: string
}

export const MessageContainer: React.FC<MessageContainer> = ({messages, userId}) => {
  if(!messages){
    return;
  }
  console.log(messages);


  return (
    <li className="flex list-none gap-10 flex-col w-full">
      {messages.map((message) => (
        <ul className={`w-full flex flex-col ${userId === message.userId ? "items-end": "items-start"} `} key={message.id}>
          <p className="text-sm text-zinc-200 text-muted-foreground">{message.userName}</p>
            <div className="w-[40%] break-all bg-zinc-200 flex justify-start p-2 rounded-md text-zinc-950">
              {message.content}
            </div>  
        </ul>
      ))}
    </li>
  )
}