import React from 'react';
import './IntroContainer.css'

import BigLogo from './BigLogo'
import Intro from './Intro'

class IntroContainer extends React.Component {

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