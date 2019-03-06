import React, { Component } from "react";
import { createSwitchNavigator, createBrowserApp } from "react-navigation"
import HomeScreen from "./views/HomeScreen/HomeScreen";
import SecondScreen from "./views/SecondScreen/SecondScreen";
import UserScreen from "./views/UserScreen/UserScreen";

export default class App extends Component {
  render() {
      const switchNavigator = createSwitchNavigator(
          {
            HomeScreen: {
                  screen: HomeScreen,
                  navigationOptions: {
                      header: null,
                      headerMode: "none",
                      gesturesEnabled: false
                  }
              },
              SecondScreen: {
                screen: SecondScreen,
                navigationOptions: {
                    header: null,
                    headerMode: "none",
                    gesturesEnabled: false
                }
            },
            UserScreen: {
              screen: UserScreen,
              navigationOptions: {
                  header: null,
                  headerMode: "none",
                  gesturesEnabled: false
              }
          }
        }
      );
      const AppContainer = createBrowserApp(switchNavigator);
      return (
          <AppContainer/>
      );
  }
}
