import * as React from 'react';

import urls from '../../assets/urls';

const Intro = () => {
  return (
    <div className="intro">

      <h2>A team of blockchain engineers committed to scaling Ethereum.</h2>
      <p>
        We are implementing a <a className="pink" href={urls.sharding}>sharding</a> client
        for Ethereum 2.0.
      </p>
      <p>
        Currently, blockchains do not scale. With Ethereum receiving over 
        <span className="pink"> a million transactions per day</span>, the network is desperate for
        a solution that will help sustain its massive growth and adoption.
      </p> 
      <p>
        We are building out a full featured sharding client, allowing the system to process 
        transactions at over 10x - 100x of its current speed!
      </p>
    </div>
  );
};

export default Intro;