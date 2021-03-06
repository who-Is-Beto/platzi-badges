import React from 'react'
import Hero from '../components/hero'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import colombia from '../images/Group 69.svg'
import Badge from '../components/Badge'
import '../components/styles/badges.css'
import Betorta from '../images/beto.jpg'
import Loading from '../components/formLoading'

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error: null })

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({ loading: false })

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      })
    }
  }

  fetchData = async (event) => {
    this.setState({
      loading: true, error: null
    })

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )

      this.setState({
        loading: false, error: null, form: data,
      })
    }
    catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {

    if (this.state.loading) {
      return <Loading />
    }
    return (
      <div>
        <Hero logo={colombia} />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                email={this.state.form.email || 'example@email.com'}
                twitter={this.state.form.twitter || 'user'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                avatar={Betorta} />
            </div>

            <div className="col-6">
              <BadgeForm
                page='EDIT'
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                error={this.state.error}
                formValues={this.state.form} />
            </div>


          </div>
        </div>
      </div>

    )
  }
}

export default BadgeEdit