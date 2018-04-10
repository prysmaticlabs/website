import React from 'react';

const TeamMember = ({ member }) => {
  return (
  	<div className="team-member">
	    <img alt={member.name} src={member.image} />
	    <h3>{member.name}</h3>
	    <h5>{member.title}</h5>
	    {member.description}
    </div>
  )
}

export default TeamMember;