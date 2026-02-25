import { create } from "zustand";

type OrderbookState = {
  bids: any[];
  asks: any[];

  updateOrderbook: (data: { bids?: any[]; asks?: any[] }) => void;
};

// Simplified delta apply for example
function applyDelta(current: any[], delta: any[] = []) {
  if (delta.length === 0) return current;
  // Deep clone or mapping logic for applying deltas
  // In a real app this would merge by price or replace
  return delta; 
}

export const useOrderbookStore = create<OrderbookState>((set) => ({
  bids: [],
  asks: [],

  updateOrderbook: (delta) =>
    set((state) => {
      const bids = applyDelta(state.bids, delta.bids);
      const asks = applyDelta(state.asks, delta.asks);

      return { bids, asks };
    }),
}));
