import React, { Component } from 'react';
import { Link } from "@react-navigation/web";
import logo from '../../logo.svg';
import { strings } from "../../i18n/i18n";
import './UserScreen-style.css';
window.__DEV__ = true;

class UserScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <div className="UserScreen">
        <header className="UserScreen-header">
          <img src={logo} className="UserScreen-logo" alt="logo" />
          <p>User Screen</p>
          <h2>
            {navigation.getParam("name")}
            's Profile
          </h2>
          <Link routeName="HomeScreen" params={{ title: "Home" }}>Home</Link>
        </header>
      </div>
    );
  }
}

export default UserScreen;