import { useMarketStore } from "../../features/market/store/marketStore";
import { useTradeStore } from "../../features/trade/store/tradeStore";

export function handleWebSocketEvent(event: any) {
  switch (event.type) {
    case "price_update":
      useMarketStore.getState().updatePrice(event.payload);
      break;

    case "trade_update":
      useTradeStore.getState().updateTrade(event.payload);
      break;
  }
}
