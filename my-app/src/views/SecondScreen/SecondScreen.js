import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import logo from '../../logo.svg';
import './SecondScreen-style.css';

class SecondScreen extends Component {
  render() {
    return (
      <div className="SecondScreen">
        <header className="SecondScreen-header">
          <img src={logo} className="SecondScreen-logo" alt="logo" />
          <p>Second Screen</p>
          <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
        </header>
      </div>
    );
  }
}

export default SecondScreen;