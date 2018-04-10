import React from 'react';

import PrysmStripe from './PrysmStripe.png'

const Jumbo = (props) => {
  return (
  	<div className="jumbo">
		<h1>Prysmatic Labs</h1>
		<img className="prysm-stripe" src={PrysmStripe} />
    </div>
  )
}

export default Jumbo;