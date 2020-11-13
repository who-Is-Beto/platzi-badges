import React from 'react'

class BadgeForm extends React.Component {

  /*   handleSubmit = (event) => {
      event.preventDefault()
      console.log('Form submitted')
      console.log(this.state)
    } */

  handleClick = (event) => {
    console.log('Button was Clicked')
  }
  render() {
    return (
      <div>
        <h1>NEW ATTENDENT</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-grup">
            <label >First Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text"
              name="firstName" value={this.props.formValues.firstName} />
          </div>

          <div className="form-grup">
            <label >Last Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text"
              name="lastName" value={this.props.formValues.lastName} />
          </div>

          <div className="form-grup">
            <label >Email</label>
            <input onChange={this.props.onChange} className="form-control" type="email"
              name="email" value={this.props.formValues.email} />
          </div>

          <div className="form-grup">
            <label >Job Title</label>
            <input onChange={this.props.onChange} className="form-control" type="text"
              name="jobTitle" value={this.props.formValues.jobTitle} />
          </div>

          <div className="form-grup">
            <label >Twitter</label>
            <input onChange={this.props.onChange} className="form-control" type="text"
              name="twitter" value={this.props.formValues.twitter} />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;