import React from 'react';
import Prysm from './logos/Prysm.svg'

import { Link } from 'react-router-dom'

const NavBar= () => (
	<div className="navbar">
		<img alt="logo" className="logo col" src={Prysm} />
		<div>
			<Link to="/">
				<span className="navbar-item">About</span>
			</Link>
			<Link to="/faq">
				<span className="navbar-item">FAQ</span>
			</Link>
			<a href="http://github.com/prysmaticlabs/geth-sharding">
				<span className="navbar-item">Github</span>
			</a>
			<a href="http://gitter.im/prysmaticlabs/geth-sharding?source=orgpage">
				<span className="navbar-item">Gitter</span>
			</a>
			<a href="http://rauljordan.us14.list-manage.com/subscribe?u=7bcfcec175d2461e541a3f2a8&id=3a2a17337c">
				<span className="navbar-item">Mailing List</span>
			</a>
		</div>
	</div>
)

export default NavBar;
