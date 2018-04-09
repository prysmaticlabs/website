import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import IntroContainer from './IntroContainer'
import TeamContainer from './TeamContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <IntroContainer />
    		<TeamContainer />
      </div>
    );
  }
}

export default App;
