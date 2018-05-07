import React from 'react';
import './IntroContainer.css'

import BigLogo from './BigLogo'
import Intro from './Intro'

class IntroContainer extends React.Component {

  state = {
    inputVisibility: false
  }

  render(){
    return (
      <div className="container intro-container">
        <Intro />
        <BigLogo />
      </div>
    )
  }
}

export default IntroContainer;