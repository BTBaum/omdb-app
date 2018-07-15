import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/index'

class SearchForm extends Component {
  
  renderTermField(field) {
    const { meta: { touched, error } } = field
    return (
      <div className="d-flex flex-column">
        <input 
          className="form-control"
          type="search"
          placeholder="Search OMDb"
          {...field.input}
        />
        <div className="text-danger">
        { touched ? error : "" }
        </div>
      </div>
    )
  }

  onSubmit({ term }) {
    this.props.fetchMovies(term)
    this.props.destroy()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form 
        className="d-flex flex-row col-sm-6 my-5 mx-5" 
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <Field 
          className=""
          name="term" 
          component={this.renderTermField} 
        />
        <button 
          className="btn btn-outline-info align-self-start mx-2" 
          type="submit"
        >
          Search
        </button>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {}
  if(!values.term) {
    errors.term = "Enter a movie search term"
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'SearchForm'
})(
  connect(null, { fetchMovies })(SearchForm)
)