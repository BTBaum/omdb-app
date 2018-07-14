import React, { Component } from 'react'
import { connect } from 'react-redux'

class Table extends Component {

  renderMovies({ Poster, Title, Type, Year, imdbID }) {
    return (
      <tr key={ imdbID }>
        <td>
          <img className="img-fluid" src={Poster} alt={`Poster: ${Title}`} />
        </td>
        <td>{ Title }</td>
        <td>{ Type }</td>
        <td>{ Year }</td>
        <td>{ imdbID }</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table">
        <thead className="thead-dark bg-info">
          <tr>
            <th>Poster</th>
            <th>Titile</th>
            <th>Type</th>
            <th>Year</th>
            <th>imdbID</th>
          </tr>
        </thead>
        <tbody>
          { 
            this.props.movies.length >= 1 
            ? 
            this.props.movies[0].Search.map(this.renderMovies) 
            :
            <tr>
              <td>Please search for a movie</td>
            </tr>
          }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ movies }) => ({ movies })

export default connect(mapStateToProps)(Table)
