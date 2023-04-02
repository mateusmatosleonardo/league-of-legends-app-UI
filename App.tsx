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
import Routes from './src/routes/Routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
}

