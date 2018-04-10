import React from 'react';
import Prysm from './Prysm.svg'

const Header= () => (
	<div className="header">
		<img alt="Prysmatic Labs Logo" className="logo col" src={Prysm} />
		<h1 className="title col">Prysmatic Labs</h1>
	</div>
)

export default Header;
