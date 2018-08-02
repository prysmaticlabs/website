import * as React from 'react';

import PrysmStripe from '../../assets/logos/PrysmStripe.png';

const BigLogo = () => {
  return (
    <div className="big-logo">
      <img alt="logo with stripe" className="prysm-stripe" src={PrysmStripe} />
      <h1 id="name">Prysmatic Labs</h1>
    </div>
  );
};

export default BigLogo;