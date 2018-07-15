import axios from 'axios'

// In prod app I would use environment variables
// process.env.REACT_API_KEY and process.env.OMDB_API

const API_KEY = "9f572b90"
const OMDB_API = `https://www.omdbapi.com/?apikey=${API_KEY}`

export const FETCH_MOVIES = 'FETCH_MOVIES'

export const fetchMovies = (movie) => {
  const url = `${OMDB_API}&s=${movie}`
  const request = axios.get(url)
  return(dispatch) => {
    request.then(({ data: { Search } }) => {
      dispatch({ 
        type: FETCH_MOVIES, 
        payload: Search 
      })
    })
  } 
}