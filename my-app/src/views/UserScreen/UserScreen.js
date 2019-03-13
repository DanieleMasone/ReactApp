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
          <p>{strings("user_screen")}</p>
          <h2>
            {navigation.getParam("name")}
            's Profile
          </h2>
          <Link routeName="HomeScreen" params={{ title: "Home" }}>{strings("home_screen")}</Link>
        </header>
      </div>
    );
  }
}

UserScreen.path = "UserScreen/:name";
UserScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("name"),
  linkName: strings("user_screen")
});

export default UserScreen;