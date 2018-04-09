import React, { Component } from 'react';
import Header from './Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <p>Body stuff</p>
      </div>
    );
  }
}

export default App;