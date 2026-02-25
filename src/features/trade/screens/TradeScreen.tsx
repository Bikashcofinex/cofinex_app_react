import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTickerStore } from '../store/tickerStore';
import { useOrderbookStore } from '../store/orderbookStore';
import { useTradesStore } from '../store/tradesStore';

export default function TradeScreen() {
  // Hardcoded pair for now
  const pair = "BTC_USDT";

  // Selectors prevent unnecessary re-renders
  const ticker = useTickerStore((s) => s.ticker[pair]);
  const bids = useOrderbookStore((s) => s.bids);
  const trades = useTradesStore((s) => s.trades);

  const renderRow = ({ item }: { item: any }) => (
    <View style={styles.row}>
      <Text style={styles.price}>{item.price || '-'}</Text>
      <Text style={styles.amount}>{item.amount || '-'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trade - {pair}</Text>
      
      <View style={styles.tickerSection}>
        <Text style={styles.tickerText}>Ticker: {ticker?.price || 'Loading...'}</Text>
      </View>

      <View style={styles.orderbookSection}>
        <Text style={styles.subtext}>Orderbook Bids</Text>
        <FlatList
          data={bids}
          keyExtractor={(item) => String(item.price)}
          renderItem={renderRow}
        />
      </View>

      <View style={styles.tradesSection}>
        <Text style={styles.subtext}>Recent Trades: {trades.length}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1115',
    paddingTop: 40,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  tickerSection: {
    padding: 20,
    backgroundColor: '#1E2329',
  },
  tickerText: {
    color: '#0ECB81',
    fontSize: 18,
  },
  orderbookSection: {
    flex: 1,
    padding: 10,
  },
  subtext: {
    color: '#848E9C',
    fontSize: 14,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  price: {
    color: '#0ECB81',
  },
  amount: {
    color: '#fff',
  },
  tradesSection: {
    height: 100,
    padding: 10,
  }
});
