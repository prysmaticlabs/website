import React from 'react';

const Contributor = ({ contributor }) => {
  return (
    <div className="contributor">
      <a href={contributor.website}>
        <img src={contributor.logo} alt={contributor.name + " logo"}/>
        <p>{contributor.name}</p>
      </a>
      <a href={contributor.transaction}>
        <h3 className="pink">{contributor.type}</h3>
      </a>
    </div>
  )
}

export default Contributor;