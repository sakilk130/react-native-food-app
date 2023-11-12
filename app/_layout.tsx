import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
}
