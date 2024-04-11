/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigator from './src/navigator';
import 'react-native-gesture-handler';

function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <NavigationContainer theme={theme}>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
