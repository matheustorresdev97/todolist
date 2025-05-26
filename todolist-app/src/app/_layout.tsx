import { SplashScreen, Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from 'react-native'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import "@/styles/global.css"
import { useEffect } from "react";
import { Loading } from "@/components/loading";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <View className="flex-1">
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  )
}