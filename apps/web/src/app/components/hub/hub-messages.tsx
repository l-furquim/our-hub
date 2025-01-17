"use client"

import { Button } from "@/components/ui/button";
import { MessageContainer } from "./message-container";
import { Send } from "lucide-react";
import { useState } from "react";
import type { Message, MessageComponent } from "@/app/types/message-types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Hub } from "@/app/types/hub-types";

const NewMessageFormSchema = z.object({
  content: z.string().min(1)
});

export type NewMessageFormType = z.infer<typeof NewMessageFormSchema>;

type HubMessagesProps = {
  hubMessages: Message[],
  hubInfo: Hub
};

export const HubMessages: React.FC<HubMessagesProps> = ({ hubMessages, hubInfo }) => {
  const {handleSubmit, register,setValue} = useForm<NewMessageFormType>({
        resolver: zodResolver(NewMessageFormSchema),
        defaultValues: {
            content: ""
        },
    });

  const [messages, setMessages] = useState<MessageComponent[]>([{
    id: 12,
    content: <div className="w-full break-all bg-zinc-200 flex justify-start p-2 rounded-md text-zinc-950" >Ola</div>,
    sendedAt: new Date()
  }]);

  const handleNewMessage = (data: NewMessageFormType) => {  
    setMessages(currentMessages => [...currentMessages, {
      content: <div className="w-full break-all bg-zinc-200 flex justify-start p-2 rounded-md text-zinc-950" >{data.content}</div>,
      id: 12,
      sendedAt: new Date()
    }]);


  }

  return (
    <div className="border-[1px] w-full items-center border-muted-foreground rounded-md flex flex-col h-[102vh]">
      <div className="flex rounded-md w-[50%] gap-5 mt-5 justify-center items-center">
        <img className="rounded-xl" width={32} height={32} src="http://github.com/l-furquim.png" alt="Hub icon" />
        <h1>Hub dos amigos</h1>
      </div>
        <div className="w-[90%] mt-10 flex flex-col gap-5 items-start">
          <MessageContainer messages={messages} />
        </div>
        <form onSubmit={handleSubmit(handleNewMessage)}  className="mt-10 h-full w-[50%] flex items-end mb-8  gap-2 ">
          <textarea {...register("content")} className="h-10 w-full p-2 resize-none  overflow-hidden text-base border-zinc-500 border-[1px] rounded-md focus:outline-none text-zinc-200 bg-transparent"placeholder="Digite" />
          <Button type="submit">
            <Send size={20} />
          </Button>
        </form>
    </div>
  )
}