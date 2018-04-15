import React from 'react';

const FAQPage = (props) => {
  return (
    <div className="faq-page">
      <h2><yel>FAQ</yel></h2>
      <p><pink>Q:</pink> Is this a for-profit venture? </p>
  		<p><blue>A:</blue> No, not at the moment. We are a team of open-source contributors implementing sharding for Ethereum because we truly believe the protocol desperately needs this ASAP. As a team, we may consider a for profit venture in the future, but we do not intend to profit directly from our work on sharding.</p>
  		<p><pink>Q:</pink> How can I contribute? </p>
  		<p><blue>A:</blue> Talk to us on Gitter! We are always looking for more contributors. We'll guide you on how to submit pull requests from there.</p>
  		<p><pink>Q:</pink> How can I stay updated? </p>
  		<p>A: Join our mailing list! We will also be posting major milestones on the /r/ethereum Reddit. We also provide updates on YouTube and Medium.</p>
    </div>
  )
}

export default FAQPage;