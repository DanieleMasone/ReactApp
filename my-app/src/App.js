import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './views/HomeScreen/HomeScreen';
import SecondScreen from './views/SecondScreen/SecondScreen';
import UserScreen from './views/UserScreen/UserScreen'

const AppNavigator = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  SecondScreen: { screen: SecondScreen },
  UserScreen: { screen: UserScreen }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
