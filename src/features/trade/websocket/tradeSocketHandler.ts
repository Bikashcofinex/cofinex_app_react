import { useTickerStore } from "../store/tickerStore";
import { handleOrderbookMessage } from "./orderbookBuffer";
import { useTradesStore } from "../store/tradesStore";

export function handleTradeSocketEvent(event: any) {
  switch (event.type) {
    case "ticker":
      useTickerStore.getState().updateTicker(event.data);
      break;

    case "orderbook":
      handleOrderbookMessage(event.data);
      break;

    case "trade":
      useTradesStore.getState().updateTrades(event.data);
      break;
  }
}
