import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs"

export const socket = new SockJS("http://localhost:8080/ourhub-messages-websocket");

export const client = new Client({
  
    brokerURL: process.env.SOCKET_URL || "ws://localhost:8080/ourhub-messages-websocket",
    connectHeaders: {},
    debug: (str) => {
      console.log(str);
    },
    reconnectDelay: 5000,
    onConnect: () => {
      console.log("Conectado ao WebSocket!");
    },
    onDisconnect: () => {
      console.log("Desconectado do WebSocket.");
    },
    onStompError: (frame) => {
      console.error("Erro no STOMP:", frame);
    }
});

