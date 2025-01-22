"use client"

import { Button } from "@/components/ui/button";
import { MessageContainer } from "./message-container";
import { DoorOpen, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Message } from "@/app/types/message-types";
import { z } from "zod";
import { newMessage } from "@/app/actions/new-message";
import { client } from "@/lib/socket";
import { LeaveHub } from "./leave-hub";


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

    console.log(hubMessages);

    const [messages, setMessages] = useState(hubMessages);
    const ref = useRef<HTMLTextAreaElement>(null);

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
            userId: receivedMessage.userId,
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
      if(ref.current){
        ref.current.value = "";
      };
      
      return;
    }
    return;
  }

  return (
    <div className="w-full h-[102vh] flex flex-col border-[1px] border-muted-foreground rounded-md">

      <div className="flex rounded-md w-full gap-5 mt-5 justify-center items-center">
        <img className="rounded-xl" width={32} height={32} src="http://github.com/l-furquim.png" alt="Hub icon" />
        <h1 className="flex gap-2 items-center">
          {hubInfo.name.replaceAll("%20", " ")}
          <LeaveHub hubId={hubInfo.id} userId={userId} />
        </h1>
      </div>

      <div className="flex-1 items-center overflow-hidden mt-10 w-full flex flex-col gap-5">
        <MessageContainer userId={userId} messages={messages} />
      </div>

      <form onSubmit={handleNewMessage} className="flex items-end gap-2 p-4">
        <textarea
          id="message"
          name="message"
          className="h-10 w-full flex justify-center items-center p-2 resize-none overflow-hidden text-base border-zinc-500 border-[1px] rounded-md focus:outline-none text-zinc-200 bg-transparent"
          placeholder="Digite algo..."
          ref={ref}
        />
        <Button type="submit" className="bg-cyan-900 hover:bg-cyan-950 text-zinc-200">
          <Send size={20} />
        </Button>
      </form>
    </div>
  );
}