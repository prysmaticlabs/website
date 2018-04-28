import React from 'react';
import Email from '../assets/email-icon.png'
import Gitter from '../assets/gitter-icon.png'

const Intro = (props) => {
  return (
    <div className="intro">
      <h2>A team of blockchain engineers committed to scaling Ethereum.</h2>
      <p>We are implementing the first <a className="pink" src="https://github.com/ethereum/wiki/wiki/Sharding-FAQ">sharding</a> client for the go-ethereum project.</p>
      <p>Currently, blockchains do not scale. With Ethereum receiving over <i>a million transactions per day</i>, the network is desperate for a solution that will help sustain its massive growth and adoption.</p> 
  		<p>We are building out the first sharding implementation for the <a className="pink" src="https://github.com/ethereum/go-ethereum">Geth (go-ethereum)</a> client, allowing the system to process transactions at over 10x - 100x of its current speed!</p>
  		<div className="subscribe">
        <a href="http://rauljordan.us14.list-manage.com/subscribe?u=7bcfcec175d2461e541a3f2a8&id=3a2a17337c">
          <button className="mail-button">Join Our Mailing List <img src={Email} alt="email icon"/></button>
        </a>
        <a href="https://gitter.im/prysmaticlabs/geth-sharding?source=orgpage">
          <button className="gitter-button">Join Our Gitter Channel <img src={Gitter} alt="gitter icon"/></button>
        </a>
  		</div>
    </div>
  )
}

export default Intro;