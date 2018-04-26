import React from 'react';

import IntroContainer from './IntroContainer';
import TeamContainer from './TeamContainer';

const MainPage = (props) => {
  return (
    <div className="slide-in-bottom"> 
    	<IntroContainer />
		<TeamContainer />
    </div>
  )
}

export default MainPage;