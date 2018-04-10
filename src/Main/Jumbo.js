import React from 'react';

import PrysmStripe from '../logos/PrysmStripe.png'

const Jumbo = (props) => {
  return (
  	<div className="jumbo">
		<img alt="logo with stripe" className="prysm-stripe" src={PrysmStripe} />
		<h1>Prysmatic Labs</h1>
    </div>
  )
}

export default Jumbo;