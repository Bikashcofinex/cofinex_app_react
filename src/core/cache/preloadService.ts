import cacheService from "./cacheService";
import { fetchMarketData } from "../../features/market/services/marketService";

export async function preloadEssentialData() {
  const market = await fetchMarketData();
  await cacheService.set("market_prices", market);
}
