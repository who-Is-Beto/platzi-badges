import React from 'react'

import './styles/BadgeDetails.css'
import logoConf from '../images/logo conf.svg'
import { Link } from 'react-router-dom'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

export default function BadgeDetails(props) {
  const badge = props.badge
  return (
    <>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logoConf} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{badge.firstName} {badge.lastName}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div className="button-container">

              <div className="">
                <div className="">
                  <Link className="btn btn-primary mb-4 white"
                    to={`/basges/${badge.id}/edit`}>Edit</Link>
                </div>
              </div>


              <div className="">
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>

                <DeleteBadgeModal
                  onClose={props.onCloseModal}
                  isOpen={props.modalIsOpen}
                  onDeleteBadge={props.onDeleteBadge}
                />
                {/*{ReactDOM.createPortal(__QUE, __DONDE)}*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}