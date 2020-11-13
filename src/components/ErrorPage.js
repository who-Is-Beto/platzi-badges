import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './hero'
import './styles/ErrorPage.css'

export default function ErrorPage(props) {
  return (
    <div className="errorMessage">
      <Hero />
      <div className="error">
        <img src={props.image} alt="" />
        <p id='errorFont'>{props.error}</p>
        <Link to="/Badges/new" id="errorButton" className="btn btn-primary">New Badge</Link>
      </div>
    </div>
  )
}