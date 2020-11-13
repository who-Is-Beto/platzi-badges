import React from 'react';
import './styles/Badge.css'
import logo from '../images/logo conf.svg'

class Hero extends React.Component {
  render() {
    return (
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={logo} alt="" />
      </div>
    )
  }
}

export default Hero