"use client"

import { Button } from "@/components/ui/button";
import { MessageContainer } from "./message-container";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import type { Message } from "@/app/types/message-types";
import { z } from "zod";
import { newMessage } from "@/app/actions/new-message";
import { client } from "@/lib/socket";

const NewMessageFormSchema = z.object({
  content: z.string().min(1)
});

export type NewMessageFormType = z.infer<typeof NewMessageFormSchema>;

type HubMessagesProps = {
  hubMessages: Message[],
  hubInfo: {
    name: string,
    id: string
  },
  userId: string,
  userName: string
};

export const HubMessages: React.FC<HubMessagesProps> = ({ hubMessages, hubInfo, userId, userName }) => {

    const [messages, setMessages] = useState(hubMessages);
    
    useEffect(() => {

      client.onConnect = () => {
        console.log("Conectado ao WebSocket!");

        client.subscribe("/messages/livechat", (message) => {
          const receivedMessage = JSON.parse(message.body);
          console.log("Conteudo recebido ", receivedMessage );

          setMessages((prevMessages) => [...prevMessages, {
            id: receivedMessage.messageId,
            content: receivedMessage.content,
            sendedAt: new Date(),
            userId: userId,
            userName: receivedMessage.user,
          }]);
        });
      };
    
      client.activate();
    return () => {
      if (client) {
        client.deactivate();
        console.log("Desconectado do WebSocket");
      }
    };
    }, []);

  async function handleNewMessage(e: React.FormEvent){
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    
    data.set("user", userName);
    data.set("userId", userId);

    if(client.connected){
      const response = await newMessage(data);

      if(response){
        client.publish({
          destination: "/ourhub/new-message",
            body: JSON.stringify(
              {
                userId: data.get("userId"),
                userName: data.get("user"),
                message: data.get("message"),
                hubId: hubInfo.id,
             }
            ), 
            headers: {} 
        });
      }
      return;
    }
    return;
  }

  return (
    <div className="border-[1px] w-full items-center border-muted-foreground rounded-md flex flex-col h-[102vh]">
      <div className="flex rounded-md w-[50%] gap-5 mt-5 justify-center items-center">
        <img className="rounded-xl" width={32} height={32} src="http://github.com/l-furquim.png" alt="Hub icon" />
        <h1>{hubInfo.name}</h1>
      </div>
        <div className="w-[90%] mt-10 flex flex-col gap-5 items-start">
          <MessageContainer userId={userId} messages={messages} />
        </div>
        <form onSubmit={handleNewMessage} className="mt-10 h-full w-[50%] flex items-end mb-8  gap-2 ">
          <textarea id="message" name="message" className="h-10 w-full p-2 resize-none  overflow-hidden text-base border-zinc-500 border-[1px] rounded-md focus:outline-none text-zinc-200 bg-transparent" placeholder="Digite" />
          <Button type="submit">
            <Send size={20} />
          </Button>
        </form>
    </div>
  )
}