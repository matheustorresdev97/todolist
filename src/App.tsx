import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

export default function App() {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })
  if (!loaded) {
    return null
  }

  return (
    <>
      <StatusBar style="auto" />
    </>
  );
}

