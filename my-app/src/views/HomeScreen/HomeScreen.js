import React, { Component } from 'react';
import logo from '../../logo.svg';
import './HomeScreen-style.css';

class HomeScreen extends Component {
  render() {
    return (
      <div className="HomeScreen">
        <header className="HomeScreen-header">
          <img src={logo} className="HomeScreen-logo" alt="logo" />
          <p>Home Screen</p>
        </header>
      </div>
    );
  }
}

export default HomeScreen;