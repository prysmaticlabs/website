import React from 'react';

const Donor = ({ donor }) => {
  return (
    <div className="donor">
      <a href={donor.website}>
        <img src={donor.logo} alt={donor.name + " logo"}/>
        <p>{donor.name}</p>
      </a>
    </div>
  )
}

export default Donor;