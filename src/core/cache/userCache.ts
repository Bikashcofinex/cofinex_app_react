import cacheService from "./cacheService";

export const userCache = {
  getWallet: () => cacheService.get("wallet_data"),
  setWallet: (data: any) => cacheService.set("wallet_data", data),
};
