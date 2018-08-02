import * as React from 'react';
import urls from '../assets/urls';

const FAQ = () => {
  return (
    <div>
      <h2 className="yel">FAQ</h2>
      <p>
        <span className="pink">Q: </span> 
        Is this a for-profit venture? 
      </p>
      <p>
        <span className="blue">A: </span>
        No, not at the moment. We are a team of open-source contributors 
        implementing <a className="pink" href={urls.sharding}> sharding</a> for 
        Ethereum because we truly believe the protocol desperately needs 
        this ASAP. As a team, we may consider a for profit venture in the future, 
        but we do not intend to profit directly from our work on sharding.
      </p>
      <p>
        <span className="pink">Q: </span> 
        How can I contribute? 
      </p>
      <p>
        <span className="blue">A: </span> 
        Talk to us on <a className="pink" href={urls.gitter}>Gitter</a>! We are 
        always looking for more contributors. We'll guide you on how to 
        submit pull requests from there. You can also check our current progress 
        on our Github page.
      </p>
      <p>
        <span className="pink">Q: </span> 
        How can I stay updated?
      </p>
      <p>
        <span className="blue">A: </span> 
        Join our <a className="pink" href={urls.mailingList}>mailing list</a>! We 
        will also be posting major milestones on the 
        <a className="pink" href={urls.rEthereum}> /r/ethereum</a> Reddit. We also 
        provide updates on <a className="pink" href={urls.youTube}>YouTube</a> and 
        <a className="pink" href={urls.medium}> Medium</a>.
      </p>
    </div>
  );
};

export default FAQ;