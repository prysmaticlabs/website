import React from 'react';
import './IntroContainer.css'

import BigLogo from './BigLogo'
import Intro from './Intro'

const IntroContainer = (props) => {
  return (
    <div>
    <div className="intro-container">
      <BigLogo />
    </div>
    <div className="intro-container">
      <Intro />
    </div>
  </div>
  )
}

export default IntroContainer;
