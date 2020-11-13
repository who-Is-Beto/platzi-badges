import React from 'react'
import './styles/Navbar.css'
import logo from '../images/Group 47.svg'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/" >
            <img className="Navbar__brand-logo" src={logo} alt="" />
            <span className="font-weight-light">PLatzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar