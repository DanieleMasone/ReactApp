import React, { Component } from 'react';
import { createNavigator, SwitchRouter, SceneView } from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";
import HomeScreen from './views/HomeScreen/HomeScreen';
import SecondScreen from './views/SecondScreen/SecondScreen';
import UserScreen from './views/UserScreen/UserScreen'
import { strings } from "./i18n/i18n";
import './style/App.css'
window.__DEV__ = true;

class SidebarView extends Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div className="App">
             <p>{strings("hello_navigation")}</p>
              <Link routeName="HomeScreen">Home</Link>
              <Link routeName="SecondScreen">Second Screen</Link>
              <Link routeName="UserScreen" params={{ name: "jamie" }}>
                About Jamie
              </Link>
              <Link routeName="UserScreen" params={{ name: "brent" }}>
                About Brent
              </Link>

        <div>
          <SceneView
            component={descriptor.getComponent()}
            navigation={descriptor.navigation}
          />
        </div>
      </div>
    );
  }
}

UserScreen.path = "UserScreen/:name";
UserScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("name"),
  linkName: "UserScreen"
});

SecondScreen.path = "SecondScreen";
SecondScreen.navigationOptions = {
  title: "SecondScreen",
  linkName: "Second Screen"
};

HomeScreen.path = "HomeScreen";
HomeScreen.navigationOptions = {
  title: strings("home_screen"),
  linkName: "Home Screen"
};

const AppNavigator = createNavigator(
  SidebarView,
  SwitchRouter({
  HomeScreen,
  SecondScreen,
  UserScreen
 }),
  {}
);

const App = createBrowserApp(AppNavigator);

export default App;
