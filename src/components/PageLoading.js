import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import BadgesList from './BadgesList'
import './styles/loader.css'

export default class PageLoading extends React.Component {
  render() {
    if (this.props.load === true) {
      return (
        <SkeletonTheme color="#d1d1d1" highlightColor="#b8b8b8">
          <ul id="loading" className="list-unstyled">
            <li id="list-element">
              {/* <img src={<Skeleton />} alt="Avatar" /> */}
              <div id="circle"><Skeleton circle={true} width={80} height={80} /></div>
              <div id="userData">
                <p id="loadP"><Skeleton /> <Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
              </div>
            </li>

            <li id="list-element">
              {/* <img src={<Skeleton />} alt="Avatar" /> */}
              <div id="circle"><Skeleton circle={true} width={80} height={80} /></div>
              <div id="userData">
                <p id="loadP"><Skeleton /> <Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
              </div>
            </li>

            <li id="list-element">
              {/* <img src={<Skeleton />} alt="Avatar" /> */}
              <div id="circle"><Skeleton circle={true} width={80} height={80} /></div>
              <div id="userData">
                <p id="loadP"><Skeleton /> <Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
              </div>
            </li>

            <li id="list-element">
              {/* <img src={<Skeleton />} alt="Avatar" /> */}
              <div id="circle"><Skeleton circle={true} width={80} height={80} /></div>
              <div id="userData">
                <p id="loadP"><Skeleton /> <Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
              </div>
            </li>

            <li id="list-element">
              {/* <img src={<Skeleton />} alt="Avatar" /> */}
              <div id="circle"><Skeleton circle={true} width={80} height={80} /></div>
              <div id="userData">
                <p id="loadP"><Skeleton /> <Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
                <p id="loadP"><Skeleton /></p>
              </div>
            </li>
          </ul>
        </SkeletonTheme>
      )
    }

    else {
      return (
        <BadgesList />
      )
    }
  }
}


