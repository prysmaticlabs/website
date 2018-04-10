import React from 'react';
import Prysm from './Prysm.svg'

const NavBar= () => (
	<div className="navbar">
		<img alt="Prysmatic Labs Logo" className="logo col" src={Prysm} />
		<div>
			<span className="navbar-item">About</span>
			<span className="navbar-item">Team</span>
			<span className="navbar-item">Github</span>
			<span className="navbar-item">Gitter</span>
			<span className="navbar-item">Mailing List</span>
		</div>
	</div>
)

export default NavBar;
