import React from 'react';
import TeamMember from './TeamMember'
import { Card, Image } from 'semantic-ui-react'

import Team from './team'

const TeamContainer = (props) => {
  return (
    <div>
    	<h3>Who We Are</h3>
    	<p>We are a team of individuals with a deep understanding of the Ethereum protocol.</p>
		<p>Armed with diverse backgrounds ranging from distributed systems to cloud computing, we emphasize a test driven approach to implementing the system's first sharding client.</p>
    </div>
  )
}

export default TeamContainer;