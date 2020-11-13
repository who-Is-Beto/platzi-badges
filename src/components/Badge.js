import React from 'react'
import confLogo from '../images/Group 69.svg'
import '../components/styles/badges.css'
import Gravatar from './Gravatar'

class Badge extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      avatar,
      email,
      jobTitle,
      twitter,
    } = this.props;
    return (
      <div className="badge" >
        <header className="badge_header">
          <img src={confLogo} alt="Logo de la conf"></img>
        </header>

        <div className="badge_section-name">
          <Gravatar className="badge_avatar" email={this.props.email} alt="Avatar" />
          <h1>{firstName} <br /> {lastName}</h1>
        </div>

        <div className="badge_section-info">
          <p className="badge_section-name">{jobTitle}</p>
          <p className="badge_section-name email">{email}</p>
          <p>@{twitter}</p>
        </div>

        <div className="badge_footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge