/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createStackNavigator,
} from 'react-navigation';
import MainScreen from './MainScreen'
import ProfileScreen from './ProfileScreen'
import MoviesScreen from './MoviesScreen'
import LoginScreen from './LoginScreen'
import SectionListScreen from "./SectionListScreen";
import SegmentControlScreen from "./SegmentControlScreen";
import WebViewScreen from './WebViewScreen'
import KeyboardScreen from './KeyboardScreen'
import LinkingScreen from './LinkingScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Root = createStackNavigator(
    {
        Home: {
            screen: MainScreen,
        },
        Profile: {
            screen: ProfileScreen
        },
        Movies: {
            screen : MoviesScreen
        },
        Login : {
            screen : LoginScreen
        },
        SectionList : {
            screen : SectionListScreen
        },
        SegmentControl : {
            screen : SegmentControlScreen
        },
        WebViewScreen : {
          screen : WebViewScreen
        },
        KeyboardScreen : {
          screen : KeyboardScreen
        },
        LinkingScreen : {
            screen : LinkingScreen
        }
    },
    {
        initialRouteName: 'Home',
    }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Root />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
