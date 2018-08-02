import * as React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './common/NavBar';
import AboutPage from './about/AboutPage';
import FAQPage from './FAQ/FAQPage';
import Footer from './common/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact={true} path="/" component={AboutPage} />
          <Route exact={true} path="/faq" component={FAQPage}/>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
