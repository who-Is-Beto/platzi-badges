import React from 'react'
import ErrorPage from './ErrorPage'
import e300 from '../images/300.png'
import e400 from '../images/400.png'
import NotFound from './notFound'
import e500 from '../images/500.png'
import unknow from '../images/unknow.png'

export default function Error(props) {

  switch (props.error.message) {
    case '300':
      return <ErrorPage image={e300} error={'Error 300 Multiple choices'} />
    case '400':
      return <ErrorPage image={e400} error={'Error 400 Bad Request'} />
    case '404':
      return (<NotFound />)
    case '500':
      return <ErrorPage image={e500} error={'Error 500 The server is broken :c'} />
    default:
      return <ErrorPage image={unknow} error={'Unknow error D:'} />
  }
}