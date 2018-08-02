import * as React from 'react';
import './DonorGrantsContainer.css';
import Contributors from './Contributors';

class DonorGrantsContainer extends React.Component {
  render() {
    return (
      <div className="container donor-grants-container">
        <h2>Donors & Granters</h2>
        <p>Your support means a lot to us. With your help, we're able to accelerate our 
        work on sharding, furthering our goal to scale the Ethereum blockchain for all. We have set 
        up a multisig smart contract to accept donations.</p>
        <a href="https://etherscan.io/address/0x9B984D5a03980D8dc0a24506c968465424c81DbE">
          Address: 0x9B984D5a03980D8dc0a24506c968465424c81DbE
        </a>
        <p>Thank you to all who have contributed to Prysmatic Labs; we are eternally grateful. Check 
        out some of our awesome patrons below.</p>
        <Contributors/>
      </div> 
    );
  }
}

export default DonorGrantsContainer;