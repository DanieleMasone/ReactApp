import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import logo from '../../logo.svg';
import './UserScreen-style.css';

class UserScreen extends Component {
  render() {
    return (
      <div className="UserScreen">
        <header className="UserScreen-header">
          <img src={logo} className="UserScreen-logo" alt="logo" />
          <p>User Screen</p>
          <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
        </header>
      </div>
    );
  }
}

export default UserScreen;