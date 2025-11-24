import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
      'iris-grover': require('../assets/fonts/IrishGrover-Regular.ttf'),
    });

    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);

    if (!loaded && !error) {
      return null;
    }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
      <StatusBar  style='light' backgroundColor='#000' />
       <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
     </SafeAreaView>
  );
}
