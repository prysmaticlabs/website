import React from 'react';
import Donor from './Donor'
import donors from '../../assets/donors'

const Donors = (props) => {
  return (
    <div className="donors">
      {donors.map(donor => <Donor donor={donor} key={donor.name} />)}
    </div>
  )
}

export default Donors;