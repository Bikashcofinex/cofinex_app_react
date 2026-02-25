import { useOrderbookStore } from "../store/orderbookStore";

let buffer: any = null;
let scheduled = false;

export function handleOrderbookMessage(data: any) {
  // store latest data in memory
  buffer = data;

  // avoid multiple updates
  if (!scheduled) {
    scheduled = true;

    requestAnimationFrame(() => {
      flushBuffer();
    });
  }
}

function flushBuffer() {
  if (!buffer) {
    scheduled = false;
    return;
  }

  useOrderbookStore.getState().updateOrderbook(buffer);

  buffer = null;
  scheduled = false;
}
