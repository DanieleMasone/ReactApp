import React, { Component } from 'react';
import { Link } from "@react-navigation/web";
import logo from '../../logo.svg';
import { strings } from "../../i18n/i18n";
import './SecondScreen-style.css';
window.__DEV__ = true;

class SecondScreen extends Component {
  render() {
    return (
      <div className="SecondScreen">
        <header className="SecondScreen-header">
          <img src={logo} className="SecondScreen-logo" alt="logo" />
          <p>Second Screen</p>
          <Link routeName="HomeScreen" params={{ title: "Home" }}> Home</Link>
        </header>
      </div>
    );
  }
}

SecondScreen.path = "SecondScreen";
SecondScreen.navigationOptions = {
  title: "SecondScreen",
  linkName: "SecondScreen"
};

export default SecondScreen;