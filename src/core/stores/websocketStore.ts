import { create } from "zustand";
import websocketService from "../websocket/websocketService";

type WSState = {
  connected: boolean;
  connect: () => void;
  disconnect: () => void;
};

export const useWebSocketStore = create<WSState>((set) => ({
  connected: false,

  connect: () => {
    websocketService.connect();
    set({ connected: true });
  },

  disconnect: () => {
    websocketService.disconnect();
    set({ connected: false });
  },
}));
