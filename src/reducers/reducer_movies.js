import { FETCH_MOVIES } from "../actions";

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_MOVIES:
      return [ action.payload, ...state ]
    default:
      return state
  }
}