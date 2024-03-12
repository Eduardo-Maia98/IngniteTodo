import { Box, NativeBaseProvider } from 'native-base';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';


import { THEME } from './src/theme';

import Home from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })
  if (!fontsLoaded) { return <></> }
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style='light'/>
      <Box flex={1} bg={'gray.700'}>

        <Home />
      </Box>
    </NativeBaseProvider>
  );
}


