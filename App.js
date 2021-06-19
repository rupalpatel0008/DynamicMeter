/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {AppStyles, Colors} from './src/theme';
import {PricingScreen} from './src/screens';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={AppStyles.mainContainer}>
      <StatusBar
        backgroundColor={Colors.primary}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <PricingScreen />
    </SafeAreaView>
  );
};

export default App;
