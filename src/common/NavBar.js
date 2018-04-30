import React from 'react';
import './NavBar.css'
import Prysm from '../assets/logos/Prysm.svg'
import { Link } from 'react-router-dom'

const NavBar= () => (
  <div className="navbar">
    <img alt="logo" className="navbar-logo" src={Prysm} />
    
    <div className="navbar-links">
      <Link to="/">
        <span className="navbar-item">About</span>
      </Link>
      <Link to="/faq">
        <span className="navbar-item">FAQ</span>
      </Link>
      <a href="http://github.com/prysmaticlabs/geth-sharding">
        <span className="navbar-item">Github</span>
      </a>      
      <a href="https://medium.com/prysmatic-labs">
        <span className="navbar-item">Blog</span>
      </a>
      <a href="https://twitter.com/prylabs">
        <span className="navbar-item">Twitter</span>
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
