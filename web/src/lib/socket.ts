import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

export const client = new Client({
  webSocketFactory: () => new SockJS("http://3.140.240.95:8080/ourhub-messages-websocket"),
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
  },
});
