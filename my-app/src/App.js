import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
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
                <Navbar bg="light" expand="lg">
                <Navbar.Brand>DANI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <div className="nav-link"><Link routeName="HomeScreen">{strings("home_screen")}</Link></div>
                      <div className="nav-link"><Link className="nav-link" routeName="SecondScreen">{strings("second_screen")}</Link></div>
                    <NavDropdown title="UserScreen" id="basic-nav-dropdown">
                      <div className="dropdown-item"><Link routeName="UserScreen" params={{ name: "jamie" }}>{strings("about_jamie")}</Link></div>
                      <div className="dropdown-item"><Link routeName="UserScreen" params={{ name: "brent" }}>{strings("about_brent")}</Link></div>
                      <NavDropdown.Divider />
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
          <div className="App-header">
          <Container>
              <SceneView
                component={descriptor.getComponent()}
                navigation={descriptor.navigation}
              />
            </Container>
          </div>
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
