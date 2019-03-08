import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { createNavigator, SwitchRouter, SceneView } from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";
import HomeScreen from './views/HomeScreen/HomeScreen';
import SecondScreen from './views/SecondScreen/SecondScreen';
import UserScreen from './views/UserScreen/UserScreen'
import { strings } from "./i18n/i18n";
import './style/App.css'
window.__DEV__ = true;

class SidebarView extends Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div className="App">
             <p>{strings("hello_navigation")}</p>                   
              <Navbar bg="light" expand="lg">
              <Navbar.Brand>DANI</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link><Link routeName="HomeScreen">Home Screen</Link></Nav.Link>
                  <Nav.Link><Link routeName="SecondScreen">Second Screen</Link></Nav.Link>
                  <NavDropdown title="UserScreen" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link routeName="UserScreen" params={{ name: "jamie" }}>About Jamie</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link routeName="UserScreen" params={{ name: "brent" }}>About Brent</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        <div>
          <SceneView
            component={descriptor.getComponent()}
            navigation={descriptor.navigation}
          />
        </div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
      </div>
    );
  }
}

const AppNavigator = createNavigator(
  SidebarView,
  SwitchRouter({
  HomeScreen,
  SecondScreen,
  UserScreen
 }),
  {}
);

const App = createBrowserApp(AppNavigator);

export default App;
