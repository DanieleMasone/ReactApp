import React, { Component } from 'react';
import { createNavigator, SwitchRouter } from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";
import HomeScreen from './views/HomeScreen/HomeScreen';
import SecondScreen from './views/SecondScreen/SecondScreen';
import UserScreen from './views/UserScreen/UserScreen'
import { strings } from "./i18n/i18n";
import './style/App.css'
window.__DEV__ = true;

class SidebarView extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
             <p>{strings("hello_navigation")}</p>
              <Link routeName="HomeScreen">Home</Link>
              <Link routeName="SecondScreen">Second Screen</Link>
              <Link routeName="UserScreen" params={{ name: "jamie" }}>
                About Jamie
              </Link>
              <Link routeName="UserScreen" params={{ name: "brent" }}>
                About Brent
              </Link>
        </header>
      </div>
    );
  }
}

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
