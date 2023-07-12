import 'react-native-gesture-handler';
import 'react-native-reanimated';
import 'react-native-get-random-values';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme/theme';
import { StackRoutes } from './src/routes/Stack.routes';
import { TamaguiProvider } from 'tamagui';
import { LoadingScreen } from './src/components';
import config from './tamagui.config';


export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <LoadingScreen />
  }

  const statusBarBackgroundColor = '#101114';

  return (
    <TamaguiProvider config={config}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor={statusBarBackgroundColor} />
        <StackRoutes />
      </ThemeProvider>
    </TamaguiProvider>
  );
}