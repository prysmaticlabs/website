import React from 'react';

const TeamMember = ({ member }) => {
  return (
  	<div className="team-member">
  		<a href={member.github}>
		    <img alt={member.name} src={member.image} />
	    </a>
	    <h5>{member.name}</h5>
	    <h5>{member.title}</h5>
	    <p>{member.description}</p>
    </div>
  )
}

export default TeamMember;