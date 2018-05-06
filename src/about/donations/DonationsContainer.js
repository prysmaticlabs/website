import React from 'react';
import './DonationsContainer.css'
import Donors from './Donors'

class DonationsContainer extends React.Component {

  render(){
    return (
      <div className="container donations-container">
        <h2>Donations</h2>
        <p>Your support means a lot to us. With your help, we're able to accelerate our 
        work on sharding, furthering our goal to scale the Ethereum blockchain for all. We have set 
        up a multisig smart contract to accept donations.</p>
        <a href="https://etherscan.io/address/0x9B984D5a03980D8dc0a24506c968465424c81DbE">
          Address: 0x9B984D5a03980D8dc0a24506c968465424c81DbE
        </a>
        <p>Thank you to all who have contributed to Prysmatic Labs; we are eternally grateful. Check 
        out some of our awesome patrons below.</p>
        <Donors/>
      </div> 
    )
  }
}

export default DonationsContainer