import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './login';
import Register from './register';
import Findpassword from './find_password';

const SimpleApp = StackNavigator({
  Home: { screen: Login},
  Register: { screen: Register },
  Findpassword:{screen: Findpassword},
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
