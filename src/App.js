import React, { Component } from 'react';
import CommunismInUSAcademia from './components/CommunismInUSAcademiaComponent'
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">China Underwatch</NavbarBrand>
          </div>
        </Navbar>
        <CommunismInUSAcademia/>
      </div>
    );
  }
}

export default App;
