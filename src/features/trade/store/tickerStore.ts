import { create } from "zustand";

type TickerState = {
  ticker: Record<string, any>;
  updateTicker: (data: any) => void;
};

export const useTickerStore = create<TickerState>((set) => ({
  ticker: {},

  updateTicker: (data) =>
    set((state) => ({
      ticker: {
        ...state.ticker,
        [data.symbol]: data,
      },
    })),
}));
