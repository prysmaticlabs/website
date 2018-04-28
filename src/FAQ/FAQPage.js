import React from 'react';

const FAQPage = (props) => {
  return (
    <div className="faq-page">
      <h2 className="yel">FAQ</h2>
      <p><span className="pink">Q:</span> Is this a for-profit venture? </p>
  		<p><span className="blue">A:</span> No, not at the moment. We are a team of open-source contributors implementing <a className="pink" href="https://github.com/ethereum/wiki/wiki/Sharding-FAQ">sharding</a> for Ethereum because we truly believe the protocol desperately needs this ASAP. As a team, we may consider a for profit venture in the future, but we do not intend to profit directly from our work on sharding.</p>
  		<p><span className="pink">Q:</span> How can I contribute? </p>
  		<p><span className="blue">A:</span> Talk to us on <a className="pink" href="https://gitter.im/prysmaticlabs/geth-sharding?source=orgpage">Gitter</a>! We are always looking for more contributors. We'll guide you on how to submit pull requests from there. You can also check our current progress on our Github page.</p>
  		<p><span className="pink">Q:</span> How can I stay updated? </p>
  		<p><span className="blue">A:</span> Join our <a className="pink" href="https://rauljordan.us14.list-manage.com/subscribe?u=7bcfcec175d2461e541a3f2a8&id=3a2a17337c">mailing list</a>! We will also be posting major milestones on the <a className="pink" href="https://www.reddit.com/r/ethereum/">/r/ethereum</a> Reddit. We also provide updates on <a className="pink" href="https://www.youtube.com/channel/UCxnN_5jJaU6y--dDQI7qO-Q">YouTube</a> and <a className="pink" href="https://medium.com/prysmatic-labs">Medium</a>.</p>
    </div>
  )
}

export default FAQPage;