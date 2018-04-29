import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './common/NavBar';
import MainPage from './main/MainPage'
import FAQPage from './faq/FAQPage'
import Footer from './common/Footer'


class App extends Component {
  render() {
    return (
      <div className="app" onScroll={this.handleScroll}>
        <NavBar />
        <Switch>
        	<Route exact path="/" component={MainPage}/>
        	<Route exact path="/faq" component={FAQPage}/>
        	<Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
