import React, { Component } from 'react';
import { Link } from "@react-navigation/web";
import { Media } from 'react-bootstrap';
import logo from '../../logo.svg';
import { strings } from "../../i18n/i18n";
import './SecondScreen-style.css';
window.__DEV__ = true;

class SecondScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      obj: [
        {
          title: "A",
          body: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          title: "B",
          body: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          title: "C",
          body: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }
        ]
    }
  }

  render() {
    return (
      <div className="SecondScreen">
          {this.state.obj.map((item) =>
            <Media className="SecondScreen-header"> 
              <img src={logo} className="SecondScreen-logo align-self-center mr-3" alt="logo"/>
                <Media.Body>
                <h5>{item.title}</h5>
                <p>{item.body}</p>
              </Media.Body>
            </Media>
          )}
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