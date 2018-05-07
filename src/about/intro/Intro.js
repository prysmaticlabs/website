import React from 'react';

import MailchimpSubscribe from "react-mailchimp-subscribe"

import Email from '../../assets/email-icon.png'
import Gitter from '../../assets/gitter-icon.png'
import urls from '../../assets/urls'

const Intro = (props) => {
  return (
    <div className="intro">
      <h2>A team of blockchain engineers committed to scaling Ethereum.</h2>
      <p>
        We are implementing the first <a className="pink" href={urls.sharding}>sharding</a> client 
        for the go-ethereum project.
      </p>
      <p>
        Currently, blockchains do not scale. With Ethereum receiving over 
        <span className="pink"> a million transactions per day</span>, the network is desperate for 
        a solution that will help sustain its massive growth and adoption.
      </p> 
      <p>
        We are building out the first sharding implementation for the
        <a className="pink" href={urls.geth}> Geth (go-ethereum)</a> client, allowing the system to 
        process transactions at over 10x - 100x of its current speed!
      </p>
      <div className="subscribe">
        <a href={urls.mailingList}>
          <button className="mail-button">
            Join Our Mailing List <img src={Email} alt="email icon"/>
          </button>
        </a>
        <a href={urls.gitter}>
          <button className="gitter-button">
            Join Our Gitter Channel <img src={Gitter} alt="gitter icon"/>
          </button>
        </a>
      </div>
      <MailchimpSubscribe
        url={urls.mailChimp}
        render={({ subscribe, status, message }) => (
          <div>
            <input type="email" />
            <input type="submit" onClick={e => subscribe({EMAIL: e.target.previousSibling.value})}/>
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && <div style={{ color: "red" }}>{message}</div>}
            {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
          </div>
        )}
      />
    </div>
  )
}

export default Intro;