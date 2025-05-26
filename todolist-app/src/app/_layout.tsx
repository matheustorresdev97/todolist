import { Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import "@/styles/global.css"

export default function RootLayout() {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  )
}