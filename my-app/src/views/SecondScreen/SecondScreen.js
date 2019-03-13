import React, { Component } from 'react';
import { Link } from "@react-navigation/web";
import { Media } from 'react-bootstrap';
import logo from '../../logo.svg';
import { strings } from "../../i18n/i18n";
import './SecondScreen-style.css';
window.__DEV__ = true;

class SecondScreen extends Component {
  render() {
    return (
      <div className="SecondScreen">
        <Media className="SecondScreen-header"> 
            <img src={logo} className="SecondScreen-logo align-self-center mr-3" alt="logo"/>
            <Media.Body>
              <h5>TITOLO 1</h5>
              <p>
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA.
              </p>
            </Media.Body>
          </Media>
          <Media className="SecondScreen-header"> 
            <img src={logo} className="SecondScreen-logo align-self-center mr-3" alt="logo"/>
            <Media.Body>
              <h5>TITOLO 1</h5>
              <p>
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA.
              </p>
            </Media.Body>
          </Media>
          <Media className="SecondScreen-header"> 
            <img src={logo} className="SecondScreen-logo align-self-center mr-3" alt="logo"/>
            <Media.Body>
              <h5>TITOLO 1</h5>
              <p>
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA.
              </p>
            </Media.Body>
          </Media>
      </div>
    );
  }
}

SecondScreen.path = "SecondScreen";
SecondScreen.navigationOptions = {
  title: strings("second_screen"),
  linkName: strings("second_screen")
};

export default SecondScreen;