import * as React from 'react';

const Contributor = ({ contributor }: {contributor: {
  logo: string;
  name: string;
  type: string;
  website: string;
}}) => {
  return (
    <div className="contributor">
      <a href={contributor.website}>
        <img src={contributor.logo} alt={contributor.name + ' logo'}/>
        <p>{contributor.name}</p>
        <h3 className="pink">{contributor.type}</h3>
      </a>
    </div>
  );
};

export default Contributor;