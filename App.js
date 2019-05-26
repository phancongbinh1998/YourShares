/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var Login = require('./components/Login')
export default class App extends Component<Props> {
  render() {
    return (
      <NavigationExperimental.Navigator
              initialRoute = {{name: 'Login', component: Login}}
              renderScene = {(route, navigator) => {
                  if(route.component){
                      return React.createElement(route.component, {navigator, passProps: route.props})
                  }
              }}
            />
    );
  }
}