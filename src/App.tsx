import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import Home from './screens/home';

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
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}

