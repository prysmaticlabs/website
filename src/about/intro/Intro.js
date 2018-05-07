import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

import Email from '../../assets/email-icon.png'
import Gitter from '../../assets/gitter-icon.png'
import urls from '../../assets/urls'

const Intro = ({ formVisibility, toggleForm }) => {
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
        <a>
          <button className="mail-button" onClick={toggleForm}>
            Join Our Mailing List <img src={Email} alt="email icon"/>
          </button>
        </a>
        <a href={urls.gitter}>
          <button className="gitter-button">
            Join Our Gitter Channel <img src={Gitter} alt="gitter icon"/>
          </button>
        </a>
      </div>

      { formVisibility ?
        <MailchimpSubscribe
          url={urls.mailChimp}
          render={({ subscribe, status, message }) => {
            if (message && message.includes("0 - ")){
              message = message.split("0 - ")[1]
            }
            return (
            <div className="subscribe-form">
              <input 
                className="subscribe-input" 
                type="email" 
                placeholder="Enter your email"
              />
              <input 
                className="subscribe-input" 
                type="submit" 
                onClick={e => subscribe({EMAIL: e.target.previousSibling.value})}
              />
              <span className="subscribe-exit" onClick={toggleForm}>&times;</span>
              {status === "sending" && 
                <div className="subscribe-status yellow">sending...</div>}
              {status === "error" && 
                <div className="subscribe-status pink" dangerouslySetInnerHTML={{__html: message}}></div>}
              {status === "success" && 
                <div className="subscribe-status blue">Subscribed!</div>}
            </div>
          )}}
        /> :
        null
      }
    </div>
  )
}

export default Intro;