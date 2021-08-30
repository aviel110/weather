import React from 'react';
import type { FunctionComponent } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import store from './stores';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppContainer from './navigator/appNavigator';

const App: FunctionComponent = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {AppContainer}
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  darkMode: {
    backgroundColor: Colors.darker,
  },
  lightMode: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
