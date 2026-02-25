import { handleWebSocketEvent } from "./websocketEvents";

class WebSocketService {
  private socket?: WebSocket;

  connect() {
    console.log("Mock wss://wss.cofinex.io connected");
    setInterval(() => {
      this.handleMessage({
         type: "price_update",
         payload: { symbol: "BTC_USDT", price: 50000 + Math.random() * 1000 }
      });
    }, 5000);
  }

  disconnect() {
    this.socket?.close();
  }

  private handleMessage(data: any) {
    handleWebSocketEvent(data);
  }
}

export default new WebSocketService();
