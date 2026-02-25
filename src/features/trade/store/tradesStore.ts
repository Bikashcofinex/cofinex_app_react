import { create } from "zustand";

type TradesState = {
  trades: any[];
  updateTrades: (trade: any) => void;
};

export const useTradesStore = create<TradesState>((set) => ({
  trades: [],

  updateTrades: (trade) =>
    set((state) => ({
      trades: [trade, ...state.trades].slice(0, 100),
    })),
}));
