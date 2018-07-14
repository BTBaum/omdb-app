import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    
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
          placeholder="Search"
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

export default SearchBar