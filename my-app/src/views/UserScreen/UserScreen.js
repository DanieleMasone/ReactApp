import React, { Component } from 'react';
import logo from '../../logo.svg';
import './UserScreen-style.css';

class UserScreen extends Component {
  render() {
    return (
      <div className="UserScreen">
        <header className="UserScreen-header">
          <img src={logo} className="UserScreen-logo" alt="logo" />
          <p>User Screen</p>
        </header>
      </div>
    );
  }
}

export default UserScreen;