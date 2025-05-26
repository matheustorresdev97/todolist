import { Stack } from "expo-router";
import { View } from "react-native";
import "@/styles/global.css"

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  )
}