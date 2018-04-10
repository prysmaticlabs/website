import React from 'react';
import Prysm from './logos/Prysm.svg'

import { Link } from 'react-router-dom'

const NavBar= () => (
	<div className="navbar">
		<img alt="logo" className="logo col" src={Prysm} />
		<div>
			<span className="navbar-item"><Link to="/">About</Link></span>
			<span className="navbar-item"><Link to="/faq">FAQ</Link></span>
			<span className="navbar-item"><a href="http://github.com/prysmaticlabs/geth-sharding">Github</a></span>
			<span className="navbar-item"><a href="http://gitter.im/prysmaticlabs/geth-sharding?source=orgpage">Gitter</a></span>
			<span className="navbar-item"><a href="http://rauljordan.us14.list-manage.com/subscribe?u=7bcfcec175d2461e541a3f2a8&id=3a2a17337c">Mailing List</a></span>
		</div>
	</div>
)

export default NavBar;
