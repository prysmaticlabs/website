import React from 'react';

import PrysmStripe from '../assets/logos/PrysmStripe.png'

const BigLogo = (props) => {
  return (
    <div className="big-logo">
      <img alt="logo with stripe" className="prysm-stripe" src={PrysmStripe} />
      <h1 id="name">Prysmatic Labs</h1>
      <h2>#SHARDL</h2>
    </div>
  )
}

export default BigLogo;
