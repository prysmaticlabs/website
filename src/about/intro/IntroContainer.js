import React from 'react';
import './IntroContainer.css'

import BigLogo from './BigLogo'
import Intro from './Intro'

const IntroContainer = (props) => {
  return (
    <div className="container intro-container">
      <Intro />
      <BigLogo />
    </div>
  )
}

export default IntroContainer;