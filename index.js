/**
 * @format
 */

import {AppRegistry, NativeModules} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';

if (Platform.OS === 'android') {
  const { UIManager } = NativeModules;
  if (UIManager) {
    UIManager.genericDirectEventTypes = {
      ...UIManager.genericDirectEventTypes,
      onGestureHandlerEvent: { registrationName: 'onGestureHandlerEvent' },
      onGestureHandlerStateChange: {
        registrationName: 'onGestureHandlerStateChange',
      },
    };
  }
}

AppRegistry.registerComponent(appName, () => App);
