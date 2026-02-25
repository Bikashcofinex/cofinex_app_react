import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { useAppStore } from './src/core/stores/appStore';
import { useAuthStore } from './src/core/stores/authStore';
import { preloadEssentialData } from './src/core/cache/preloadService';
import cacheService from './src/core/cache/cacheService';

export default function App() {
  const initialized = useAppStore((s) => s.initialized);
  const setInitialized = useAppStore((s) => s.setInitialized);
  // Do not extract login directly up here unless using stable reference, but Zustand getState is fine or selecting is fine.
  const login = useAuthStore((s) => s.login);

  useEffect(() => {
    async function init() {
      // Tier 1 - Preload cache
      await preloadEssentialData();

      // Tier 2 - Auth Cache
      const token = await cacheService.get("token");

      if (token) {
        login(token);
      }

      setInitialized(true);
    }

    init();
  }, [login, setInitialized]);

  if (!initialized) {
    return (
      <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff' }}>Loading CoFidex...</Text>
      </View>
    );
  }

  return <RootNavigator />;
}
