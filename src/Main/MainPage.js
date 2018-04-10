import React from 'react';

import Jumbo from './Jumbo';
import IntroContainer from './IntroContainer';
import TeamContainer from './TeamContainer';

const MainPage = (props) => {
  return (
    <div>
        <Jumbo />
        <IntroContainer />
		<TeamContainer />
    </div>
  )
}

export default MainPage;