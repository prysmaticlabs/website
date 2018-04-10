import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar';
import Jumbo from './Jumbo'
import IntroContainer from './IntroContainer'
import TeamContainer from './TeamContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Jumbo />
        <IntroContainer />
		<TeamContainer />
      </div>
    );
  }
}

export default App;
