import * as React from 'react';
import Contributor from './Contributor';
import contributors from '../../assets/contributors';

const Contributors = () => {
  return (
    <div className="contributors">
      {contributors.map(contributor => <Contributor contributor={contributor} key={contributor.name} />)}
    </div>
  );
};

export default Contributors;