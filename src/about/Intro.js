import React from 'react';

import Email from '../assets/email-icon.png'
import Gitter from '../assets/gitter-icon.png'
import urls from '../assets/urls'

const Intro = (props) => {
  return (
    <div className="intro">
      <h2>JOIN US IN OUR QUEST TO #SHARDL ETHEREUM!</h2>
      <p>Welcome Friend!</p>
      <p>There is an important matter at hand...</p>
      <p>And there is little time, indeed.</p>
      <p>You see, Ethereum's network has grown substantially in the past year, and it doesn't look to be stopping anytime soon. The community is growing stronger each day, and more dApps are being envisioned and deployed by the second!</p>
      <p>But there's one little problem...</p>
      <p>And that is this: Public blockchains, in their current state, simply do not scale!</p>
      <p><span className="pink"><em>With Ethereum receiving over a million transactions per day (!)</em></span>, the network is desperate for a solution that will help sustain its massive growth and adoption.</p>
      <p>We believe Ethereum will one day be the the home of amazing dApps that are relied on by billions of users.</p>
      <p>A decentralized version of Uber, for instance.</p>
      <p>Yet Ethereum's ENTIRE NETWORK capacity right now is ~15 transactions per second.</p>
      <p>Visa processes 45,000 transactions per second.</p>
      <p>Supporting a decentralized Uber, Visa, AirBnB and others simply is not feasible at this time on Ethereum...</p>
      <p>But there is an answer!</p>
      <p>It's called "sharding".</p>
      <p>The concept of sharding is based on splitting the entire state of the network into a bunch of partitions called shards that contain their own independent piece of state and transaction history. In this system, certain nodes would process transactions only for certain shards, allowing the throughput of transactions processed in total across all shards to be much higher than having a single shard do all the work as the mainchain does now.</p>
      <p>You can read more about sharding in <a className="blue" href={urls.shardingExplained}>this blog post we put together</a>.</p>
      <p>But don't leave! Bookmark that link, and keep reading on...</p>
      <p>You see, sharding is one of, if not THE, most important thing for Ethereum's future.</p>
      <p>And that's where Prysmatic Labs comes in.</p>
      <p>Prysmatic Labs is a group of open-source contributors focused on making Sharding a reality. We're doing this by implementing the first <a className="blue" href={urls.sharding}>sharding</a> client for the go-ethereum project.</p>
      <p>We are building out the first sharding implementation for the <a className="blue" href={urls.geth}> Geth (go-ethereum)</a> client, allowing the system to process transactions at over 10x - 100x of its current speed!</p>
      <p><strong className="pink">But we need your help!</strong></p>
      <p>Yodlers Yodl</p>
      <p>Holders Hodl</p>
      <p>Builders buidl...</p>
      <p>But, those brave ones who seek to do what pundits have called impossible?</p>
      <p>The crazy few who seek to scale Ethereum AND not do so via centralization?</p>
      <p>Those, my dear friends, there rests a special spot in the lore of blockchain history.</p>
      <p>Those crazy few are called "Shardlres".</p>
      <p>And Shardlers #SHARDL</p>
      <p>We know, we know... it's a title you'd love to wear proudly pretty much anywhere.</p>
      <p>But guess what? Not only is there and opportunity to tell others you're a Shardler, the time is ripe where you can forever be known as one of the "Original Shardlers" who helped make Ethereum Sharding a reality and did so while starting the #SHARDL movement.</p>
      <p>Yes, you can become one of the Original Shardlers who brought Sharding to Ethereum!</p>
      <p>Here's how!</p>
      <h2>HOW TO BECOME A SHARDLER</h2>
      <h4>There are currently Three Class Types of Shardlers (More to come; including Wizards!)</h4>
      <h3>#SHARDL ENGINEER</h3>
      <p>To become a #SHARDL ENGINEER, simply follow these steps:</p>
      <ol>
        <li>Join our <a className="blue" href={urls.gitter}>Gitter Channel</a></li>
        <li>Type the following message: <span className="pledgeOfAllegiance">`Hello everyone. I, <span className="insertHere">[insert: the nickname you've always wanted]</span>, do solemnly swear to #SHARDL Ethereum and I pledge to not cease Shardling until Ethereum is sufficiently Shardled, so help me Godl. Also, I'm currently wearing <span className="insertHere">[insert: current clothing]</span>, in <span className="insertHere">[insert: current location]</span>, and the song I last listened to was <span className="insertHere">[insert: song by artist_name]</span>.`</span></li>
        <li>Place "#SHARDL" somewhere on your Github profile and/or Twitter profile and link to Prysmatic. (ETH #SHARDL Badges coming soon!)</li>
        <li>Review our <a className="blue" href={urls.contribGuidelines}>contributing guidelines</a></li>
        <li>Review our <a className="blue" href={urls.contribGuidelines}>open projects</a></li>
        <li>Eithere ask one of us in Gitter what Issue you should begin on, or otherwise just go ahead and #SHARDL!</li>
      </ol>
      <h3>#SHARDL CLERIC</h3>
      <p>If you have any of these skills, you can become a #SHARDL CLERIC!</p>
      <ul>
        <li>Web Design</li>
        <li>Graphic/illustration design. TODO's: a) Design an "#SHARDL ETH" badge for people to embed/place on sites, b) #SHARDL ETH T-Shirt Designs and Hat Designs)</li>
        <li>Writing Skills (Blog, Email Newsletters, Website)</li>
        <li>Translation Skills (translating our website into different languages)</li>
      </ul>
      <h3>#SHARDL WARRIOR</h3>
      <p>If you have any of these skills, you can also become a #SHARDL WARRIOR!</p>
      <ul>
        <li>Marketing skills</li>
        <li>The ability to feature us in your project, company blog or post about us on Twitter</li>
        <li>You own nunchucks</li>
      </ul>
      <h4>If you meet any of those above and feel called to #SHARDL, please follow these steps:</h4>
      <ol>
        <li>Join our <a className="blue" href={urls.gitter}>Gitter Channel</a></li>
        <li>Type the following message: <span className="pledgeOfAllegiance">`Hello everyone. I, <span className="insertHere">[insert: the nickname you've always wanted]</span>, do solemnly swear to #SHARDL Ethereum and I pledge to not cease Shardling until Ethereum is sufficiently Shardled, so help me Godl. Also, I'm currently wearing <span className="insertHere">[insert: current clothing]</span>, in <span className="insertHere">[insert: current location]</span>, and I once teared up while watching the movie <span className="insertHere">[insert: movie_name]</span>.`</span></li>
        <li>Then type: <span className="pledgeOfAllegiance">`Here's what I'd like to do to help Shardl Ethereum: <span className="insertHere">[insert: what deliverable you'd like to contribute]</span>`</span>.</li>
      </ol>
      <p>Note: If you own nunchucks, please post a video of you nunchucking (video length: between 5-8 minutes in length) in our Gitter.</p>
      <p>Thanks for your time and for joining us in Shardling Ethereum!</p>
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
    </div>
  )
}

export default Intro;
