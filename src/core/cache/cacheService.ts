const cacheStorage: Record<string, any> = {};

export const cacheService = {
  get: async (key: string) => {
    return cacheStorage[key] || null;
  },
  set: async (key: string, value: any) => {
    cacheStorage[key] = value;
  }
};
export default cacheService;
