import React from 'react';

import Jumbo from './Jumbo';
import IntroContainer from './IntroContainer';
import TeamContainer from './TeamContainer';

const MainPage = (props) => {
  return (
    <div> 
    	<div className="split-container">
	    	<IntroContainer />
	    	<Jumbo />
    	</div>
		<TeamContainer />
    </div>
  )
}

export default MainPage;