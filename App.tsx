import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { themeGlobal } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={themeGlobal.backgroud}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;
