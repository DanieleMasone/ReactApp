import React, { Component } from 'react';
import { Link } from "@react-navigation/web";
import logo from '../../logo.svg';
import { strings } from "../../i18n/i18n";
import './HomeScreen-style.css';
window.__DEV__ = true;

class HomeScreen extends Component {
  render() {
    return (
      <div className="HomeScreen">
        <header className="HomeScreen-header">
          <img src={logo} className="HomeScreen-logo" alt="logo" />
          <p>{strings("home_screen")}</p>
          <Link routeName="SecondScreen" params={{ title: "SecondScreen" }}>{strings("second_screen")}</Link>
        </header>
      </div>
    );
  }
}

HomeScreen.path = "HomeScreen";
HomeScreen.navigationOptions = {
  title: strings("home_screen"),
  linkName: strings("home_screen")
};

export default HomeScreen;