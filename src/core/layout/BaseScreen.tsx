import React from "react";
import { SafeAreaView, View, RefreshControl, ScrollView } from "react-native";

type Props = {
  children: React.ReactNode;
  onRefresh?: () => void;
  refreshing?: boolean;
  safeArea?: boolean;
  backgroundColor?: string;
};

export default function BaseScreen({
  children,
  onRefresh,
  refreshing = false,
  safeArea = true,
  backgroundColor = "#000",
}: Props) {
  const Content = (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        onRefresh ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : undefined
      }
    >
      {children}
    </ScrollView>
  );

  if (!safeArea) return <View style={{ flex: 1 }}>{Content}</View>;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      {Content}
    </SafeAreaView>
  );
}
