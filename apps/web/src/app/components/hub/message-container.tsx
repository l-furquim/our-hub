import type {MessageComponent } from "@/app/types/message-types"
import type { Message } from "@/app/types/message-types"
import { convertToISODate } from "@/lib/utils"
import { ScrollArea } from "@radix-ui/react-scroll-area"
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
    <ScrollArea className="h-[88vh] w-full overflow-auto rounded-md">
      <ul className="flex flex-col w-full gap-10">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`w-full flex flex-col ${userId === message.userId ? "items-end" : "items-start"}`}
          >
            <p className="text-sm text-zinc-200 text-muted-foreground">{message.userName}</p>
            <div className="w-[40%] break-all bg-zinc-200 flex-col flex justify-start p-2 rounded-md text-zinc-950">
              {message.content}
              <p className="text-xs w-full flex justify-end text-muted-foreground"> {convertToISODate(message.sendedAt.toString())} </p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>

  )
}