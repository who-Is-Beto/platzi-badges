import React from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/badges.css'
import BadgesList from '../components/BadgesList'
import colombia from '../images/Group 69.svg'
import api from '../api'
import PageLoading from '../components/PageLoading'
import Error from '../components/Error'


class Badges extends React.Component {

  state = {
    loading: true,
    error: null,
    data: undefined,
  }

  constructor(props) {
    super(props)
    console.log('1 Im the first')
    this.state = {
      data: []
    }
  }

  async fetchData() {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data,
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      })
    }
  }

  componentDidMount() {
    this.fetchData()

    this.IntervalId = setInterval(this.fetchData(), 60000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('UPDATE!!!')
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    })
    console.log({
      props: this.props,
      state: this.state,
    })
  }

  componentWillUnmount() {
    console.log('byeee')
    clearTimeout(this.timeId)

    clearInterval(this.IntervalId)
  }

  render() {
    if (this.state.loading === true) {
      return <PageLoading load={true} badges={this.state.data} />;
    }

    if (this.state.error) {
      return <Error error={this.state.error} />
    }
    console.log('Im the second')
    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo  " src={colombia} alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="Badge__conteiner">
          <div className="Badges__buttons">
            <Link to="/Badges/new" id="create" className="btn btn-primary">New Badge</Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__Container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Badges;