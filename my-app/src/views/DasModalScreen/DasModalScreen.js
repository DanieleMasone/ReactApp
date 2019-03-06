import React, { Component } from 'react';
import logo from '../../logo.svg';
import './DasModalScreen-style.css';

class DasModalScreen extends Component {
  render() {
    return (
      <div className="DasModalScreen">
        <header className="DasModalScreen-header">
          <img src={logo} className="DasModalScreen-logo" alt="logo" />
          <p>Das Modal Screen</p>
        </header>
      </div>
    );
  }
}

export default DasModalScreen;