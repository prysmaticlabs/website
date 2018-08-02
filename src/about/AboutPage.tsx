import * as React from 'react';

import IntroContainer from './intro/IntroContainer';
import TeamContainer from './team/TeamContainer';
import DonorGrantsContainer from './donor_grants/DonorGrantsContainer';

const AboutPage = () => {
  return (
    <div> 
      <IntroContainer />
      <TeamContainer />
      <DonorGrantsContainer />
    </div>
  );
};

export default AboutPage;