import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMovies } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.fetchMovies(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <form 
        className="form-inline"
        onSubmit={this.onSubmit}
      >
        <input 
          className="form-control mr-2" 
          type="search" 
          placeholder="Search movie title"
          onChange={this.onInputChange}
          value={this.state.term}
        />
        <button 
          className="btn btn-outline-info my-2" 
          type="submit"
        >
          Search
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMovies }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)