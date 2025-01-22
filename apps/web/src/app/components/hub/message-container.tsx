import type { Message } from "@/app/types/message-types"
import { convertToISODate } from "@/lib/utils"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import type React from "react"

type MessageContainer = {
  messages: Message[],
  userId: string
}

export const MessageContainer: React.FC<MessageContainer> = ({messages, userId}) => {
  console.log("Id do usuario atual " + userId);

  if(!messages){
    return;
  }
  console.log(messages);


  return (
    <ScrollArea className="h-[88vh] w-[95%] overflow-auto rounded-md">
    <ul className="flex flex-col w-full gap-10">
      {messages.map((message) => (
        <li
          key={message.id} // Ensure each <li> has a unique key
          className={`w-full flex flex-col ${userId === message.userId ? "items-end" : "items-start"}`}
        >
          <p className="text-sm text-zinc-200 text-muted-foreground">{message.userName}</p>
          <div
            className={`w-[40%] break-all flex-col flex justify-start p-2 rounded-md ${
              userId === message.userId ? "bg-zinc-200 text-zinc-950" : "bg-zinc-800 text-zinc-200"
            }`}
          >
            {message.content}
            <p className="text-xs w-full flex justify-end text-muted-foreground">
              {convertToISODate(message.sendedAt.toString())}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </ScrollArea>
  )
}