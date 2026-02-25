import { create } from "zustand";
import cacheService from "../../../core/cache/cacheService";
import { fetchMarketData } from "../services/marketService";

type MarketState = {
  prices: Record<string, number>;
  updatePrice: (data: { symbol: string; price: number }) => void;
  loadMarket: () => Promise<void>;
};

export const useMarketStore = create<MarketState>((set) => ({
  prices: {},

  updatePrice: (data) =>
    set((state) => {
      const updated = {
        ...state.prices,
        [data.symbol]: data.price,
      };
      cacheService.set("market_prices", updated);
      return { prices: updated };
    }),

  loadMarket: async () => {
    const cached = await cacheService.get("market_prices");
    if (cached) {
      set({ prices: cached });
    }

    const fresh = await fetchMarketData();
    set({ prices: fresh });

    cacheService.set("market_prices", fresh);
  },
}));
