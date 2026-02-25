export const apiClient = {
  get: async (endpoint: string) => {
    return { data: `mock get for ${endpoint}` };
  },
  post: async (endpoint: string, payload: any) => {
    return { data: `mock post for ${endpoint}`, payload };
  }
};
export default apiClient;
