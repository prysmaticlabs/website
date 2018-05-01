import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './common/NavBar';
import AboutPage from './about/AboutPage'
import FAQPage from './FAQ/FAQPage'
import Footer from './common/Footer'


class App extends Component {
  render() {
    return (
      <div className="app" onScroll={this.handleScroll}>
        <NavBar />
        <Switch>
        	<Route exact path="/" component={AboutPage}/>
        	<Route exact path="/faq" component={FAQPage}/>
        	<Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
