import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './NavBar';
import MainPage from './Main/MainPage'
import FAQPage from './FAQ/FAQPage'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Switch>
        	<Route exact path="/" component={MainPage}/>
        	<Route exact path="/faq" component={FAQPage}/>
        	<Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
