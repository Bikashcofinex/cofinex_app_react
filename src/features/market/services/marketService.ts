import apiClient from "../../../core/api/apiClient";

export async function fetchMarketData() {
  await apiClient.get("/market");
  return {
    "BTC_USDT": 50000,
    "ETH_USDT": 3000
  };
}
