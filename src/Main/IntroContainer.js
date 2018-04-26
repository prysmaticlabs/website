import React from 'react';

import BigLogo from './BigLogo'
import Intro from './Intro'

const IntroContainer = (props) => {
  return (
  	<div className="intro-container slide-in-bottom">
  		<Intro />
    	<BigLogo />
  	</div>
  )
}

export default IntroContainer;