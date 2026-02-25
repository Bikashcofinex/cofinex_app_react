import { create } from "zustand";
import websocketService from "../websocket/websocketService";

type AuthState = {
  token: string | null;
  isLoggedIn: boolean;

  login: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isLoggedIn: false,

  login: (token) => {
    set({
      token,
      isLoggedIn: true,
    });
    websocketService.connect();
  },

  logout: () => {
    websocketService.disconnect();
    set({
      token: null,
      isLoggedIn: false,
    });
  },
}));
