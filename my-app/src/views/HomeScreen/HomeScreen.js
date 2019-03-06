import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import logo from '../../logo.svg';
import './HomeScreen-style.css';

class HomeScreen extends Component {
  render() {
    return (
      <div className="HomeScreen">
        <header className="HomeScreen-header">
          <img src={logo} className="HomeScreen-logo" alt="logo" />
          <p>Home Screen</p>
          <Button onPress={() => this.props.navigation.navigate('SecondScreen')} title="Second"/>
        </header>
      </div>
    );
  }
}

export default HomeScreen;