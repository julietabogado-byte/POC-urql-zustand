import { urqlClient } from '@/src/graphql/client';
import { Stack } from 'expo-router';
import { Provider } from 'urql';

export default function RootLayout() {
  return (
    <Provider value={urqlClient}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Marketplace' }} />
      </Stack>
    </Provider>
  );
}

