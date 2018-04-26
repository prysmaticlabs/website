import React from 'react';

const TeamMember = ({ member }) => {
  return (
  	<div className="team-member">	
  		<a href={member.github}>
	  		<span>View on Github</span>
		    <img alt={member.name} src={member.image} />
	    </a>
	    <span>{member.name}</span><br/>
	    <span className="team-member-title">{member.title}</span><br/>
	    <span className="team-member-info">{member.description}</span>
    </div>
  )
}

export default TeamMember;