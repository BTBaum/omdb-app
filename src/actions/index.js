import axios from 'axios'

const API_KEY = "9f572b90"
const OMDB_API = `http://www.omdbapi.com/?apikey=${API_KEY}`

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