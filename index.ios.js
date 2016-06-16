/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MirrorComponent from './src/components/MirrorComponent';

class InstaTags extends Component {
  render() {
    return (
      <MirrorComponent />
    );
  }
}


AppRegistry.registerComponent('InstaTags', () => InstaTags);
