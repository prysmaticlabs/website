import React from 'react';

const IntroContainer = (props) => {
  return (
    <div className="intro">
        <h3>A team of blockchain engineers committed to scaling Ethereum</h3>
        <p>We are implementing the first sharding client for the go-ethereum project.</p>
        <p>Currently, blockchains do not scale. With Ethereum receiving over a million transactions per day, the network is desperate for a solution that will help sustain its massive growth and adoption.</p> 
		<p>We are building out the first sharding implementation for the Geth (go-ethereum) client, allowing the system to process transactions at over 10x - 100x of its current speed! </p>
		<p>Subscribe to get updates!</p>
    </div>
  )
}

export default IntroContainer;