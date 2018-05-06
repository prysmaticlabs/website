import React from 'react';

import IntroContainer from './intro/IntroContainer';
import TeamContainer from './team/TeamContainer';
import DonationsContainer from './donations/DonationsContainer'

const AboutPage = (props) => {
  return (
    <div> 
      <IntroContainer />
      <TeamContainer />
      <DonationsContainer />
    </div>
  )
}

export default AboutPage;