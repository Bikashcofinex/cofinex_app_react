import { create } from "zustand";

type TradeState = {
    tradeData: any;
    updateTrade: (data: any) => void;
};

export const useTradeStore = create<TradeState>((set) => ({
    tradeData: null,
    updateTrade: (data) => set({ tradeData: data }),
}));
