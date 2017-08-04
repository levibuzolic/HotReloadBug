/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {AppRegistry, View} from 'react-native';
import HotReloadingTest from './src/HotReloadingTest';

export default class HotReloadBug extends React.Component {
  render() {
    return (
      <HotReloadingTest />
    );
  }
}

AppRegistry.registerComponent('HotReloadBug', () => HotReloadBug);
