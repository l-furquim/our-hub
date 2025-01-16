"use client"

import { MessageContainer } from "./message-container";

export const HubMessages = () => {
  let messages = [];

  for(let i=0; i <= 10; i ++){
    messages.push({
      content: "Mensagem",
      sendedAt: new Date(),
    });
  };

  return (
    <div className=" border-[1px] w-full items-center border-muted-foreground rounded-md flex flex-col h-full">
      <div className="flex rounded-md w-[50%] gap-5 mt-5 justify-center items-center">
        <img className="rounded-xl" width={32} height={32} src="http://github.com/l-furquim.png" alt="Hub icon" />
        <h1>Hub dos amigos</h1>
      </div>
        <div className="w-[90%] mt-10 flex flex-col gap-5 items-start">
          <MessageContainer content={"Oi mensagem"} sendedAt={new Date()} /> 
          <MessageContainer content={"Oi mensagem"} sendedAt={new Date()} /> 
          <MessageContainer content={"Oi mensagem"} sendedAt={new Date()} /> 
          <MessageContainer content={"Oi mensagem"} sendedAt={new Date()} /> 
          <MessageContainer content={"Oi mensagem"} sendedAt={new Date()} /> 
          <MessageContainer content={"Oi mensagem"} sendedAt={new Date()} /> 
        </div>
        <div className="w-full flex justify-center">
          <input type="text" placeholder="Digite" />
        </div>
    </div>
  )
}