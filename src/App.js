import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './NavBar';
import MainPage from './Main/MainPage'
import FAQPage from './FAQ/FAQPage'
import Footer from './Footer'


class App extends Component {
  handleScroll = e => {
    console.log(window.scrollX, window.scrollY)
    console.log(e)
  }

  render() {
    window.addEventListener("scroll", this.handleScroll)
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
