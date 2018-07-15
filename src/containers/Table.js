import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
  table: {
    width: "90vw",
    margin: "0 auto"
  }
}

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
      <table className="table" style={styles.table}>
        <thead className="bg-info">
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
            this.props.movies.length === 0 ? 
              <tr><td>Please enter a movie search term</td></tr> : 
              ( this.props.movies[0] ? 
                  this.props.movies[0].map(this.renderMovies) : 
                  <tr><td>Movie not found</td></tr> 
              )
          }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ movies }) => ({ movies })

export default connect(mapStateToProps)(Table)
