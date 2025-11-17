import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}
