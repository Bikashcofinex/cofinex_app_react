import apiClient from "../../../core/api/apiClient";

export async function fetchOrderbook(pair: string) {
  const res = await apiClient.get(`/orderbook?pair=${pair}`);
  return res.data;
}

export async function fetchTicker(pair: string) {
  const res = await apiClient.get(`/ticker?pair=${pair}`);
  return res.data;
}
