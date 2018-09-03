/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {StackNavigator} from "react-navigation";
import MainScreen from "./MainScreen";
import React, {Component} from 'react';

// const navigate = StackNavigator({
//     Main: {screen: MainScreen},
// });

AppRegistry.registerComponent(appName, () => App);
