import React from 'react';

import ReactMorph from 'react-morph'

import Jumbo from './Jumbo';
import IntroContainer from './IntroContainer';
import TeamContainer from './TeamContainer';

const MainPage = (props) => {
  return (
    <div>
    	<ReactMorph>
    		{({ from, to, fadeIn, go, init, state }) => (
				<div className="morph-container">
	    			<div onClick={() => go(1)}>
	    				<div {...from('comp')}>
		    				<Jumbo />
	    				</div>
	    			</div>
					<div onClick={() => go(0)}>
	    				<div {...to('comp')}>
		    				<IntroContainer />
	    				</div>
	    			</div>
				</div>
			)}
    	</ReactMorph>
		<TeamContainer />
    </div>
  )
}

export default MainPage;