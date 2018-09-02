const initialState = {
  movies: [],
  completed: false
}

export default function(state = initialState, action) {
  console.log("Actions", action);
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESSFUL':
      return {
        ...state,
        movies: action.payload,
        completed: true
      }

    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        movies: action.payload,
        completed: false
      }

    default:
     return {
       ...state
     }
  }
}
