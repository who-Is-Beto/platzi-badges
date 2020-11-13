import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ErrorPage.css'
import Hero from './hero';
import e404 from '../images/404.png';

function NotFound() {
  return (
    <div className="errorMessage">
      <Hero />
      <div className="error">
        <img src={e404} alt="" />
        <p id='errorFont'>Error 404 Not Found :c</p>
        <Link to="/Badges/new" id="errorButton" className="btn btn-primary">New Badge</Link>
      </div>
    </div>
  )
}

export default NotFound