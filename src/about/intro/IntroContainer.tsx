import * as React from 'react';
import './IntroContainer.css';

import BigLogo from './BigLogo';
import Intro from './Intro';

class IntroContainer extends React.Component {

  state = {
    formVisibility: false
  };

  toggleForm = () => {
    this.setState({formVisibility: !this.state.formVisibility});
  }

  render() {
    return (
      <div className="container intro-container">
        <Intro 
          formVisibility={this.state.formVisibility}
          toggleForm={this.toggleForm}
        />
        <BigLogo />
      </div>
    );
  }
}

export default IntroContainer;