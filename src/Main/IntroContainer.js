import React from 'react';

const IntroContainer = (props) => {
  return (
    <div className="intro">
        <h2>A team of blockchain engineers committed to scaling Ethereum.</h2>
        <p>We are implementing the first sharding client for the go-ethereum project.</p>
        <p>Currently, blockchains do not scale. With Ethereum receiving over <i>a million transactions per day</i>, the network is desperate for a solution that will help sustain its massive growth and adoption.</p> 
		<p>We are building out the first sharding implementation for the Geth (go-ethereum) client, allowing the system to process transactions at over 10x - 100x of its current speed!</p>
		<a src="http://rauljordan.us14.list-manage.com/subscribe?u=7bcfcec175d2461e541a3f2a8&id=3a2a17337c">Subscribe to get updates!</a>
    </div>
  )
}

export default IntroContainer;