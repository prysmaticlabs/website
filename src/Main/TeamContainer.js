import React from 'react';
import TeamMember from './TeamMember'
import Team from '../team'

const TeamContainer = (props) => {
  return (
    <div className="team-container">
    	<h2>Who We Are</h2>
    	<p>We are a team of individuals with a deep understanding of the Ethereum protocol.</p>
  		<p>Armed with diverse backgrounds ranging from distributed systems to cloud computing, we emphasize a test driven approach to implementing the system's first sharding client.</p>
  		<div className="team-card-container">
  			{Team.map(member => <TeamMember key={member.name} member={member}/>)}
  		</div>
    </div>
  )
}

export default TeamContainer;