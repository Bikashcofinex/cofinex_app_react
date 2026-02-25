import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/screens/HomeScreen';
import MarketScreen from '../features/market/screens/MarketScreen';
import TradeScreen from '../features/trade/screens/TradeScreen';
import CardScreen from '../features/card/screens/CardScreen';
import AssetsScreen from '../features/assets/screens/AssetsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Trade" component={TradeScreen} />
      <Tab.Screen name="Card" component={CardScreen} />
      <Tab.Screen name="Assets" component={AssetsScreen} />
    </Tab.Navigator>
  );
}
