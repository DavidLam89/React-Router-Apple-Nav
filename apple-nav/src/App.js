import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper'
import data from './data';
import SubNavWrapper from './components/SubNavWrapper';

class App extends Component {

  constructor() {
    super();
    this.state = {
      nav_elements: [],
      mac: [],
      ipad: [],
      iphone: [],
      tv: [],
      music: [],
    };
  }

  componentDidMount() {
    this.setState({ ...data });
  }
  render() {
    return (
      <div className="App" >
        <Route
          path="/"
          render={
            props => <NavWrapper {...props} elements={this.state.nav_elements} />
          }
        />
        <Route
          path="/:name"
          render={
            props => <SubNavWrapper {...props} fulldata={this.state} />
          }
        />
      </div>
    );
  }
}


export default App;
