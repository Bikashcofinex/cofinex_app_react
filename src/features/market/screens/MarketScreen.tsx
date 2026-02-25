import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useMarketStore } from '../store/marketStore';

export default function MarketScreen() {
  const btcPrice = useMarketStore(s => s.prices.BTC_USDT);
  const loadMarket = useMarketStore(s => s.loadMarket);

  useEffect(() => {
    loadMarket();
  }, [loadMarket]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Market Screen</Text>
      <Text>BTC: {btcPrice || 'Loading...'}</Text>
    </View>
  );
}
