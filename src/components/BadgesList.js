import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'

class BadgesList extends React.Component {

  render() {
    if (this.props.badges.length === 0) {
      return (
        <div className="notFound">
          <h3>No badges were found :c</h3>
          <Link className="btn btn-primary" to="/Badges/new" >Create a new Badge</Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <Gravatar className="BadgesListItem__avatar" email={badge.email}
                alt={`${badge.firstName} ${badge.lastName}`} />
              <div className="userData">
                <p>{badge.firstName} {badge.lastName}</p>
                <p>{badge.email}</p>
                <p>{badge.jobTitle}</p>
                <p>{badge.twitter}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList;