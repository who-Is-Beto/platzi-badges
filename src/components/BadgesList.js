import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'

function BadgesList(props) {

  const [query, setQuery] = React.useState('')
  const [filterBadges, setFilterBadges] = React.useState(props.badges)
  React.useMemo(
    () => {
      const result = props.badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase()
          .includes(query.toLocaleLowerCase())
      })

      setFilterBadges(result)
    }, [props.badges, query])
  /* const filterBadges = props.badges.filter(badge => {
    return `${badge.firstName} ${badge.lastName}`.toLowerCase()
      .includes(query.toLocaleLowerCase())
  }) */

  if (filterBadges.length === 0) {
    return (
      <div className="notFound">
        <div className="form-grup">
          <label htmlFor="">Filter Badges</label>
          <input type="text" className='form-control'
            value={query}
            onChange={e => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <h3>No badges were found :c</h3>
        <Link className="btn btn-primary" to="/Badges/new" >Create a new Badge</Link>
      </div>
    )
  }
  return (
    <div className="BadgesList">
      <div className="form-grup">
        <label htmlFor="">Filter Badges</label>
        <input type="text" className='form-control'
          value={query}
          onChange={e => {
            setQuery(e.target.value)
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filterBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link id='list-element' className='text-reset text-decoration-none'
                to={`/badges/${badge.id}`}>
                <Gravatar className="BadgesListItem__avatar" email={badge.email}
                  alt={`${badge.firstName} ${badge.lastName}`} />
                <div className="userData">
                  <p>{badge.firstName} {badge.lastName}</p>
                  <p>{badge.email}</p>
                  <p>{badge.jobTitle}</p>
                  <p>{badge.twitter}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BadgesList;