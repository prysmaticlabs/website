import React from 'react';

import IntroContainer from './IntroContainer';
import TeamContainer from './TeamContainer';

const AboutPage = (props) => {
  return (
    <div className="about"> 
    	<IntroContainer />
		<TeamContainer />
    </div>
  )
}

export default AboutPage;