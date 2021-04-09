/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FC } from 'react';
import { LogBox, SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation';

const App: FC = (): JSX.Element => {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MainStack></MainStack>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
