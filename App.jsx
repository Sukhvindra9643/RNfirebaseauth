import React from 'react';
import AppNavigator from './src/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ModalPortal} from 'react-native-modals';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <AlertNotificationRoot>
      <SafeAreaProvider>
        <AppNavigator />
        <ModalPortal />
        <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle="dark-content"
        />
      </SafeAreaProvider>
    </AlertNotificationRoot>
  );
};

export default App;
