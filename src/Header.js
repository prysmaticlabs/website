import React from 'react';
import PrysmStripe from './PrysmStripe.png'

const Header= () => (
	<div className="header">
		<img alt="Prysmatic Labs Logo" className="logo col" src={PrysmStripe} />
		<h1 className="col">Prysmatic Labs</h1>
	</div>
)

export default Header;
