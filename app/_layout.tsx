import { Stack } from "expo-router";
import { bgStyles } from "../assets/bgStyles/bgStyles";


import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>

      <Stack


        screenOptions={{
          headerShown: false,
          contentStyle: {
            ...bgStyles.container,
            paddingTop: insets.top,
          },
        }}
      />
    </SafeAreaProvider>
  );
}
