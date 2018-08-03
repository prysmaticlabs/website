import * as React from 'react';
import './IntroContainer.css';

import BigLogo from './BigLogo';
import Intro from './Intro';
import Buttons from './Buttons';

class IntroContainer extends React.Component {

  state = {
    formVisibility: false
  };

  toggleForm = () => {
    this.setState({formVisibility: !this.state.formVisibility});
  }

  render() {
    return (
      <div className="container">
        <div className="intro-container">
          <Intro />
          <BigLogo />
        </div>
        <Buttons
          formVisibility={this.state.formVisibility}
          toggleForm={this.toggleForm}
        />
      </div>
    );
  }
}

export default IntroContainer;